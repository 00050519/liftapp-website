# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the desired port (change this if necessary)
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]