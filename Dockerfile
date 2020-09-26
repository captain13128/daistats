FROM nginx:alpine

COPY build/ /www/public_html/
COPY conf.d/ /etc/nginx/conf.d/
COPY nginx.conf /etc/nginx/nginx.conf

COPY docker-entrypoint.sh /docker-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]