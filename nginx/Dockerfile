FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /etc/nginx/ssl

COPY swifti.tech.crt /etc/nginx/ssl/swifti.tech.crt
COPY swifti.tech.key /etc/nginx/ssl/swifti.tech.key

EXPOSE 80
EXPOSE 443