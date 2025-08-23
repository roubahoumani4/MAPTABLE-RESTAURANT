# TableMap Restaurant Reservations System

## Overview

TableMap is a full-stack restaurant reservation platform focused on the Lebanese market. The application provides users with the ability to browse restaurants, view visual floor maps with table layouts, make reservations for specific tables, and earn loyalty points. It features a comprehensive management system for restaurant owners to control their floor plans, reservations, and offers.

The system is designed with multi-language support (English/Arabic with RTL), dual currency support (USD/LBP), and Lebanon-specific features including WhatsApp integration and timezone settings for Asia/Beirut.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The client-side is built as a React Single Page Application using:
- **Framework**: React 18 with TypeScript and Vite for bundling
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and data fetching
- **UI Framework**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Authentication Flow**: Session-based authentication with automatic redirect handling

The application follows a component-based architecture with clear separation between UI components, pages, and business logic. Custom hooks handle authentication state and API interactions.

### Backend Architecture

The server is built using Express.js with TypeScript in ESM format:
- **Framework**: Express.js with middleware for JSON parsing and request logging
- **Authentication**: Passport.js with OpenID Connect strategy for Replit authentication
- **Session Management**: Express sessions with PostgreSQL storage via connect-pg-simple
- **API Design**: RESTful endpoints with Zod validation schemas
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Hot reloading with Vite integration in development mode

The backend follows a layered architecture with separate modules for authentication, routing, storage, and database operations.

### Data Storage Solutions

**Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon serverless database with WebSocket support
- **Schema Management**: Drizzle migrations with shared schema definitions
- **Type Safety**: Full TypeScript integration with Drizzle-Zod for validation

**Key Data Models**:
- Users with role-based access (USER, RESTAURANT_MANAGER, ADMIN)
- Restaurants with location, cuisine, and operational data
- Tables with positional data for floor map visualization
- Reservations with temporal constraints and status tracking
- Reviews and ratings system
- Loyalty points and tier system
- Offers and discount management

### Authentication and Authorization

**Authentication Strategy**: 
- OpenID Connect via Replit's authentication service
- Session-based authentication with secure HTTP-only cookies
- Automatic token refresh and session management
- Memoized OIDC configuration for performance

**Authorization Levels**:
- Public access for restaurant browsing
- User authentication required for reservations and reviews
- Restaurant manager access for venue management
- Admin access for platform administration

**Security Features**:
- CSRF protection through session middleware
- Secure cookie configuration with proper flags
- Environment-based configuration for different deployment contexts

### External Dependencies

**Database Services**:
- Neon PostgreSQL for primary data storage
- WebSocket support for real-time features

**Authentication Services**:
- Replit OpenID Connect for user authentication
- Passport.js strategy integration

**Development Tools**:
- Vite for frontend development and hot reloading
- Replit development banner integration
- TypeScript for full-stack type safety
- Drizzle Kit for database migrations

**UI and Styling**:
- Radix UI for accessible component primitives
- Tailwind CSS for utility-first styling
- Custom font integration (Inter, Amiri for Arabic)
- CSS custom properties for theming and RTL support

**Build and Deployment**:
- esbuild for server-side bundling
- Multi-stage build process for production
- Environment variable configuration
- PostgreSQL session store for scalability