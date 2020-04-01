#use existing docker image as base
FROM node:alpine as builder
#create a working dir in container(snapshot)
WORKDIR /app
#Copy the dependencies
COPY package.json .
#install dependencies
RUN npm install
#copy the source code
COPY . .
#command to run when container starts
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html