# TableMap - Local Development Setup

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp env.local.example .env.local
   # Edit .env.local with your preferred values
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5000`

## Local Development Features

- **Mock Data**: Uses in-memory storage with sample restaurants, tables, and floor maps
- **Local Authentication**: Simple username/password login (any credentials work)
- **No Database Required**: Everything runs in memory for development
- **Hot Reload**: Frontend and backend changes auto-refresh

## Sample Data

The app comes with 10 sample restaurants:
- Zaatar & Co. (Lebanese)
- Saffron Lane (Indian Fusion)
- Beirut Bites (Street Food)
- Mediterranean Grill (Seafood)
- Pasta Paradise (Italian)
- Sushi Sakura (Japanese)
- Burger Haven (American)
- Vegan Vibes (Plant-based)
- Dessert Dreams (Pastries)

Each restaurant has sample tables with floor map layouts.

## Authentication

For local development, you can use any username/password combination. The system will automatically create a user account for you.

## API Endpoints

All API endpoints are available at `/api/*` and work with the mock data:
- `/api/restaurants` - List all restaurants
- `/api/restaurants/:slug` - Get restaurant details
- `/api/restaurants/:id/tables` - Get restaurant tables
- `/api/restaurants/:id/floor-map` - Get floor map
- `/api/auth/user` - Get current user (requires login)

## Troubleshooting

- **Port conflicts**: Change `PORT` in `.env.local`
- **Session issues**: Clear browser cookies/localStorage
- **Mock data not loading**: Check browser console for errors

## Production vs Development

- **Development**: Uses `MockStorage` with in-memory data
- **Production**: Uses `DatabaseStorage` with PostgreSQL

The system automatically switches based on `NODE_ENV`.
