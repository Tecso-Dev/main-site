FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files for better caching
COPY package*.json ./

# Install dependencies with workarounds for Docker environment issues
RUN npm config set strict-ssl false && \
    npm config set registry http://registry.npmjs.org/ && \
    npm ci --no-audit --no-fund --ignore-scripts

# Copy source code
COPY . .

# Build the application
RUN npm run generate

# Production stage - use nginx for static serving
FROM nginx:alpine AS production

# Copy built static files
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Create directories for logs
RUN mkdir -p /var/log/nginx

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
