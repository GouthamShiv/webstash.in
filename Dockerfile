FROM nginx:1.21.3-alpine

COPY ./webstash.in/ /usr/share/nginx/html

EXPOSE 80
