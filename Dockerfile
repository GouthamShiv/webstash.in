FROM nginx:1.29.0-alpine

COPY ./ /usr/share/nginx/html

EXPOSE 80
