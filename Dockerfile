FROM nginx:1.26.2-alpine

COPY ./ /usr/share/nginx/html

EXPOSE 80
