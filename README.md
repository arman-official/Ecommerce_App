# Ecommerce_App

Production-grade MERN ecommerce platform scaffold following Clean Architecture, layered services, repository pattern, DTOs, and middleware-driven security.

## Architecture Principles
- Clean Architecture with modular boundaries
- Layered services and repositories
- DTO-driven API responses
- Middleware-based security and validation

## Monorepo Structure
```
client/   # React + Vite + Tailwind UI
server/   # Express API and domain modules
infra/    # Nginx, Docker, CI/CD assets
docs/     # Design and planning artifacts
```

## Getting Started
### Backend
```
cd server
cp .env.example .env
npm install
npm run dev
```

### Frontend
```
cd client
npm install
npm run dev
```

## Environment
Update `server/.env` with MongoDB, Redis, Stripe, Cloudinary, and SMTP credentials.

## Status
- Backend scaffold with routing, middleware, and core data models
- Frontend scaffold with routing, layouts, and state management
- Infrastructure placeholders for Docker, Nginx, and CI/CD
