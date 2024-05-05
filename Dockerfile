FROM node:latest as build-stage

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY .env ./

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
