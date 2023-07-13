# Base image
FROM node:14-alpine

# Install build tools
RUN apk add --no-cache build-base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the app
RUN npm run build

# Expose the desired port (change this if necessary)
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]