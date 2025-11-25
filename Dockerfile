# Use official Node.js 18 LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package files first (for efficient caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the app
COPY . .

# Expose app port
EXPOSE 8080

# Run the server
CMD ["npm", "start"]
