#!/bin/bash

echo "🚀 Setting up TableMap Database..."

# Check if PostgreSQL is running
if ! pg_isready -q; then
    echo "❌ PostgreSQL is not running. Please start PostgreSQL first:"
    echo "   sudo systemctl start postgresql"
    echo "   sudo systemctl enable postgresql"
    exit 1
fi

echo "✅ PostgreSQL is running"

# Create .env.local file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
NODE_ENV=development
PORT=5000
SESSION_SECRET=local-dev-secret-key-change-in-production
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/tablemap
EOF
    echo "✅ Created .env.local file"
else
    echo "✅ .env.local file already exists"
fi

# Create database
echo "🗄️  Creating database..."
createdb -U postgres tablemap 2>/dev/null || echo "Database already exists"

# Check if we can connect to the database
if psql -U postgres -d tablemap -c "SELECT 1;" >/dev/null 2>&1; then
    echo "✅ Database connection successful"
else
    echo "❌ Cannot connect to database. Please check your PostgreSQL setup:"
    echo "   1. Make sure PostgreSQL is running"
    echo "   2. Check if user 'postgres' has access"
    echo "   3. Verify the DATABASE_URL in .env.local"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run database setup
echo "🔧 Setting up database tables and sample data..."
npm run setup:db

echo ""
echo "🎉 Database setup complete!"
echo ""
echo "📋 Next steps:"
echo "   1. Start the development server: npm run dev"
echo "   2. Open http://localhost:5000 in your browser"
echo "   3. Try signing up with a new account"
echo ""
echo "🔑 Test accounts available:"
echo "   Admin: admin@tablemap.com / admin123"
echo "   User: test@example.com / test123"
echo "   Manager: manager@restaurant.com / manager123"
