# TableMap Setup Guide

## Database Setup

### 1. Create Database Tables

Run the SQL script to create all necessary tables:

```bash
# Connect to your PostgreSQL database and run:
psql -h your_host -U your_user -d your_database -f create_tables.sql
```

### 2. Setup Database with Sample Data

```bash
# Install dependencies first
npm install

# Run the database setup script
npm run setup:db
```

This will create:
- All required database tables and enums
- Sample users (admin, test user, restaurant manager)
- Mock restaurants, floor maps, and tables

## Test Accounts

After setup, you can use these test accounts:

| Email | Password | Role | Tier |
|-------|----------|------|------|
| `admin@tablemap.com` | `admin123` | Admin | Platinum |
| `test@example.com` | `test123` | User | Silver |
| `manager@restaurant.com` | `manager123` | Restaurant Manager | Gold |

## Features

### ✅ Complete Authentication System
- User registration and login
- Password hashing with bcrypt
- JWT token-based authentication
- Role-based access control

### ✅ Modern UI Components
- Responsive design matching the website theme
- Tabbed login/signup modal
- Toast notifications
- Loading states and error handling

### ✅ Database Integration
- PostgreSQL with Drizzle ORM
- Proper foreign key relationships
- Indexes for performance
- Automatic timestamp updates

### ✅ Restaurant Management
- View restaurant details
- Interactive floor maps
- Table selection and booking
- Reservation management

## Development

### Start the Application

```bash
# Terminal 1: Start the server
npm run dev:server

# Terminal 2: Start the client
npm run dev:client
```

### Environment Variables

Create a `.env.local` file:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/tablemap
NODE_ENV=development
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Restaurants
- `GET /api/restaurants` - List all restaurants
- `GET /api/restaurants/:slug` - Get restaurant details
- `GET /api/restaurants/:id/tables` - Get restaurant tables

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify your `DATABASE_URL` is correct
   - Ensure PostgreSQL is running
   - Check database permissions

2. **Authentication Not Working**
   - Clear browser cookies
   - Check server logs for errors
   - Verify JWT secret is set

3. **Tables Not Loading**
   - Run the database setup script
   - Check if mock data was inserted
   - Verify API endpoints are working

### Database Reset

To completely reset the database:

```bash
# Drop and recreate tables
psql -h your_host -U your_user -d your_database -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"

# Run setup again
npm run setup:db
```

## Next Steps

1. **Add Real Restaurant Data** - Replace mock data with actual restaurants
2. **Implement Payment System** - Add Stripe or similar payment processing
3. **Mobile App** - Create React Native mobile application
4. **Analytics Dashboard** - Add restaurant performance metrics
5. **Email Notifications** - Send booking confirmations and reminders
