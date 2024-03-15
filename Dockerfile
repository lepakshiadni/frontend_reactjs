# Use an official Node.js runtime as the base image
FROM node:alpine3.18 AS build

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
# Use a lightweight Nginx server as the base image
FROM nginx:1.23-alpine

WORKDIR /usr/share/nginx/html
 
RUN rm -rf *

# Copy the built React app from the previous stage
COPY --from=build /app/build .

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
