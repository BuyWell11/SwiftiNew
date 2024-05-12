FROM node:latest as build-stage

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY .env ./

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

COPY ./default.conf.template /etc/nginx/templates/

EXPOSE 8080
