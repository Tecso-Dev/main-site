# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

## Docker Deployment

The application now includes optimized Docker support for production deployment:

### Method 1: Build in Docker (Full Build)
```bash
# Build the Docker image (builds inside container)
docker build -t tecso-team .

# Run the container
docker run -p 3000:80 tecso-team
```

### Method 2: Static Deployment (Recommended)
For faster deployment using pre-built static files:

```bash
# First, build the static files locally
npm run generate

# Build the Docker image using static files
docker build -f Dockerfile.static -t tecso-team-static .

# Run the container
docker run -p 3000:80 tecso-team-static
```

### Performance Optimizations

The Docker configuration includes several optimizations for better loading performance:

1. **Static Generation** - Pre-builds all pages for fastest serving
2. **Nginx Optimizations** - Gzip compression, caching headers, and performance tuning
3. **Security Headers** - X-Frame-Options, CSP, and other security measures
4. **Health Checks** - Automatic container health monitoring

### Environment Variables

The application supports the following environment variables:

- `NODE_ENV=production` - Sets production mode
- `NUXT_HOST=0.0.0.0` - Binds to all interfaces  
- `NUXT_PORT=3000` - Sets the port (default: 3000)

### Troubleshooting

If you encounter build issues:

1. **SSL Certificate Issues**: The Dockerfile includes workarounds for Docker environments
2. **Missing Dependencies**: Use the static deployment method if build dependencies fail
3. **Performance Issues**: The static method provides the best performance for production

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
