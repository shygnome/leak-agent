# Build context: repo root (docker-compose sets context: .)
# This gives the deps stage access to pnpm-workspace.yaml (allowBuilds config).

FROM node:24-alpine AS base
RUN corepack enable pnpm

FROM base AS deps
WORKDIR /app
# Copy workspace config first — pnpm reads allowBuilds from here
COPY pnpm-workspace.yaml pnpm-lock.yaml ./
COPY web/package.json ./web/package.json
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/web/node_modules ./web/node_modules
COPY . .
# Build from web/ so Next.js treats it as the project root.
# This keeps the standalone output flat: server.js at standalone/ root
# instead of standalone/web/server.js (which happens when building from /app).
WORKDIR /app/web
RUN pnpm build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

COPY --from=builder /app/web/public ./web/public
COPY --from=builder --chown=nextjs:nodejs /app/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/web/.next/static ./web/.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "web/server.js"]
