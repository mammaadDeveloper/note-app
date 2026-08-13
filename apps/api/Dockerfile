FROM oven/bun:1 AS builder

WORKDIR /app

COPY package.json bun.lock ./
COPY nx.json tsconfig.base.json tsconfig.json ./

COPY apps ./apps
# COPY libs ./libs

RUN bun install

RUN bun run api:build


FROM oven/bun:1 AS runtime

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

COPY package.json bun.lock ./

COPY --from=builder /app/dist/apps/api ./dist

EXPOSE 3000

CMD ["bun", "dist/main.js"]
