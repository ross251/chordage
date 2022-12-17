FROM node:alpine AS client

WORKDIR /app

COPY ./package.json ./
RUN npm install

COPY ./src ./src
COPY ./resources ./resources
COPY ./webpack.config.js .

RUN npm run b

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=client /app/src/index.html .
COPY --from=client /app/static ./static

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
