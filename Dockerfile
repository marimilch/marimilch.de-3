# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm_config_yes=true npx nuxt build

# production stage
FROM node:lts-alpine as production-stage
COPY --from=build-stage /app/.output /.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]