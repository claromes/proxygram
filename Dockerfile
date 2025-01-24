FROM node:18-alpine AS build-env

WORKDIR /app
COPY package.json ./

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

RUN pnpm install

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm run build

CMD ["./node_modules/next/dist/bin/next", "start"]
