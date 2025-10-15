FROM nginx:1.29.2-alpine

COPY ./ /usr/share/nginx/html

EXPOSE 80
