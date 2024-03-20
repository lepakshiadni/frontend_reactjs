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
