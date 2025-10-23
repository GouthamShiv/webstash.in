FROM nginx:1.26.3-alpine

COPY ./ /usr/share/nginx/html

EXPOSE 80
