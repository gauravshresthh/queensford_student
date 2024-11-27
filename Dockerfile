# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the application
RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
