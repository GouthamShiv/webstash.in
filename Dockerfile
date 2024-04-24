FROM nginx:1.26-alpine

COPY ./ /usr/share/nginx/html

EXPOSE 80
