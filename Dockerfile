FROM nginx:1.27.2-alpine

COPY ./ /usr/share/nginx/html

EXPOSE 80
