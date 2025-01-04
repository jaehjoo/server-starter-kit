# build
FROM node:20-alpine3.21 AS build

WORKDIR /app

COPY ./react_app/package*.json ./

RUN npm ci

COPY ./react_app/ .

RUN npm run build

# production
FROM nginx:1.24-alpine AS production

COPY --from=build /app/build /var/www/html

RUN apk update && \
    apk upgrade --no-cache && \
    apk add --no-cache bash dumb-init

COPY ./conf/nginx.conf /etc/nginx/nginx.conf
COPY ./conf/nginx-app.conf /etc/nginx/sites-available/nginx-app.conf

RUN mkdir -p /etc/nginx/sites-enabled/ \
    && ln -s /etc/nginx/sites-available/nginx-app.conf /etc/nginx/sites-enabled/

EXPOSE 80

CMD ["/usr/bin/dumb-init", "--", "nginx", "-g", "daemon off;"]
