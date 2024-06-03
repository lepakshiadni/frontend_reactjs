# Use an official Node.js runtime as the base image
FROM node:alpine3.18 AS build 

ARG REACT-APP-BASEURL
ARG BACKEND_URL 

ARG REACT-APP-BASEURL=REACT-APP-BASEURL
ARG BACKEND_URL=BACKEND_URL  
# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build
#--------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>--------------------------------->>>>>>>>>>>>>>>> 

FROM nginx:1.23-alpine 
WORKDIR /usr/share/nginx/html 
RUN rm -rf * 
COPY --from=build /app/build .
# Install OpenSSL and generate SSL certificates inside the container
# RUN apk add --no-cache openssl && \
#     openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx.key -out /etc/ssl/certs/nginx.crt -subj "/CN=localhost"
COPY default.conf /etc/nginx/conf.d/default.conf 
EXPOSE 80 
EXPOSE 443
ENTRYPOINT ["nginx", "-g", "daemon off;" ]
