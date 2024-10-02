FROM nginx:1.26.0-alpine

COPY ./ /usr/share/nginx/html

EXPOSE 80
