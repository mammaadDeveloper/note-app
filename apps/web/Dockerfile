FROM node:lts-alpine AS builder
WORKDIR /app

COPY package.json bun.lock nx.json tsconfig.base.json tsconfig.json ./
COPY apps/web ./apps/web

RUN npm install
RUN npm run web:build

FROM nginx:stable-alpine AS runtime
COPY --from=builder /app/apps/web/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
