# этап сборки (build stage)
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# этап production (production-stage)
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# command to build the image - docker build -t vuejs-meal .
#  run - docker run -d -it -p 8080:80 --rm --name vuejs-meal-1 vuejs-meal