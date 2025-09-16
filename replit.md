# Barbershop Website Project

## Overview

This is a modern React-based barbershop website for "Lw by Laith L.L.C & Barbershop" located in Tampa, FL. The application is built as a single-page application (SPA) featuring a comprehensive barbershop presence with services, pricing, about information, and contact details. The site emphasizes a professional, masculine aesthetic inspired by modern barbershop websites like Booksy and The Art of Shaving, with a focus on building trust and showcasing craftsmanship.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing (currently single-page design)
- **Styling**: Tailwind CSS with custom design system implementing dark/light themes
- **Component Library**: Radix UI primitives with custom shadcn/ui components for consistent, accessible UI elements
- **State Management**: React Query (@tanstack/react-query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Development Setup**: Hot module replacement (HMR) with Vite integration
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage)
- **Middleware**: JSON parsing, URL encoding, and request logging with performance metrics

### Design System
- **Theme System**: CSS custom properties supporting light/dark modes with golden amber primary color (#25 85% 45%)
- **Typography**: Inter for body text, Playfair Display for elegant headers
- **Layout**: Mobile-first responsive design using Tailwind spacing units (4, 8, 12, 16, 24)
- **Components**: Comprehensive UI library including navigation, buttons, cards, forms, and hero sections

### Data Layer
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: User management schema with UUID primary keys and validation via Zod
- **Migrations**: Drizzle Kit for database schema management and migrations

### File Structure
- **Client**: React application in `/client` with TypeScript, components, pages, and utilities
- **Server**: Express backend in `/server` with routes, storage abstractions, and Vite integration
- **Shared**: Common schemas and types in `/shared` for type consistency across frontend/backend
- **Assets**: Static assets and generated images in `/attached_assets`

### Key Features
- **Responsive Design**: Mobile-first approach with desktop optimizations
- **Theme Support**: Toggle between light and dark modes with localStorage persistence
- **Service Display**: Comprehensive pricing menu with categorized services
- **Contact Integration**: Direct phone calling, email functionality, and embedded map placeholder
- **Booking Flow**: Currently redirects to phone calls with placeholder for future online booking
- **Performance**: Optimized builds with code splitting and lazy loading capabilities

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for state management
- **Routing**: Wouter for lightweight client-side routing
- **TypeScript**: Full TypeScript support across frontend and backend

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer
- **Radix UI**: Accessible component primitives (@radix-ui/* packages)
- **Lucide React**: Modern icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variants
- **Tailwind Merge**: Intelligent Tailwind class merging utility

### Backend and Database
- **Express.js**: Web application framework for Node.js
- **Drizzle ORM**: Type-safe PostgreSQL ORM with Zod integration
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **PostgreSQL Session Store**: connect-pg-simple for session management

### Development Tools
- **Vite**: Fast build tool with TypeScript support and React plugin
- **ESBuild**: Fast JavaScript bundler for production builds
- **TSX**: TypeScript execution environment for development
- **Replit Integration**: Development environment plugins and runtime error handling

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration layer for validation libraries
- **Zod**: TypeScript-first schema validation for forms and API data

### Utility Libraries
- **Date-fns**: Modern date utility library for JavaScript
- **clsx**: Utility for constructing className strings conditionally
- **Nanoid**: URL-safe unique string ID generator
- **CMDK**: Command palette component for enhanced user experience