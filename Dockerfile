from node:16.19 as build
WORKDIR /Projekt1
COPY package*.json .
RUN npm install
COPY . .

RUN npm run build
FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /Projekt1/build /usr/share/nginx/html