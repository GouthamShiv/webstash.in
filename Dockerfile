FROM nginx:1.27.5-alpine

COPY ./ /usr/share/nginx/html

EXPOSE 80
