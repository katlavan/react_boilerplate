### STAGE 1: Build ###
FROM node:8.6.0 as build
#RUN mkdir /usr/src/app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
#RUN npm install react-scripts -g --silent
COPY . /app
RUN npm run build

#### STAGE 2: Production Environment ###
#FROM nginx:1.13.12-alpine
#COPY --from=build /app/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]


FROM python:latest
COPY --from=build /app/dist /
EXPOSE 7000
CMD python -m http.server 7000