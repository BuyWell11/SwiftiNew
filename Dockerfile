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

COPY ./templates/default.conf.template /etc/nginx/templates/

CMD /bin/bash -c "envsubst '${NGINX_PORT}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"

EXPOSE 8080
