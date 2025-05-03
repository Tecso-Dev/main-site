FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy built artifacts from build stage
COPY --from=build /app/.output /app/.output
COPY --from=build /app/public /app/public

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", ".output/server/index.mjs"]
