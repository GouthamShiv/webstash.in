FROM nginx:1.27.4-alpine

COPY ./ /usr/share/nginx/html

EXPOSE 80
