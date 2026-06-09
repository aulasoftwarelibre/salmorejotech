FROM node:22-alpine AS builder

WORKDIR /app

RUN corepack enable

# Static export does not need native build scripts (sharp/msw); don't fail on them.
ENV PNPM_CONFIG_STRICT_DEP_BUILDS=false

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build


FROM nginx:alpine

# Allow the unprivileged worker to bind port 80.
RUN apk add --no-cache libcap && \
    addgroup -g 1001 -S appgroup && \
    adduser -u 1001 -S appuser -G appgroup

COPY --from=builder /app/out /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

RUN setcap 'cap_net_bind_service=+ep' /usr/sbin/nginx && \
    sed -i '/^user /d' /etc/nginx/nginx.conf && \
    sed -i 's|^pid .*;|pid /tmp/nginx.pid;|' /etc/nginx/nginx.conf && \
    chown -R appuser:appgroup /var/cache/nginx /var/log/nginx /usr/share/nginx/html && \
    touch /tmp/nginx.pid && chown appuser:appgroup /tmp/nginx.pid

USER appuser

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -qO- http://127.0.0.1:80/health || exit 1
