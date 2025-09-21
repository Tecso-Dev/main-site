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

### Quick Start

Build and run with Docker:

```bash
# Build the Docker image
docker build -t tecso-team .

# Run the container
docker run -p 3000:3000 tecso-team
```

### Docker Commands

```bash
# Build image
npm run docker:build

# Run container (maps to port 80)
npm run docker:run

# Run with docker-compose
npm run docker:compose
```

### Performance Optimizations

The Docker configuration includes several optimizations for better loading performance:

1. **Multi-stage build** - Separates build dependencies from runtime
2. **SSR Mode** - Server-side rendering for faster initial page loads
3. **Optimized chunking** - Better code splitting for faster loading
4. **Compressed assets** - Reduced bundle sizes
5. **Image optimization** - WebP format with quality optimization

### Health Checks

The Docker container includes health checks that verify the application is responding correctly.

### Environment Variables

The application supports the following environment variables:

- `NODE_ENV=production` - Sets production mode
- `NUXT_HOST=0.0.0.0` - Binds to all interfaces
- `NUXT_PORT=3000` - Sets the port (default: 3000)

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
