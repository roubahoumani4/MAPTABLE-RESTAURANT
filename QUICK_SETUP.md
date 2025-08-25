# Quick Database Setup for TableMap

## 🚀 Fast Setup (Recommended)

Run the automated setup script:

```bash
./setup-database.sh
```

This script will:
- Check if PostgreSQL is running
- Create the `.env.local` file
- Create the database
- Set up tables and sample data
- Install dependencies if needed

## 🔧 Manual Setup

### 1. Install PostgreSQL (if not already installed)

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### 2. Create Database

```bash
sudo -u postgres createdb tablemap
```

### 3. Create .env.local file

```bash
cat > .env.local << EOF
NODE_ENV=development
PORT=5000
SESSION_SECRET=local-dev-secret-key-change-in-production
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/tablemap
EOF
```

### 4. Install Dependencies & Setup Database

```bash
npm install
npm run setup:db
```

### 5. Start the Server

```bash
npm run dev
```

## ✅ Verification

After setup, you should see:
- `✅ Connected to PostgreSQL database` in the server logs
- Both login AND signup working in the web interface
- Test accounts available for login

## 🐛 Troubleshooting

### "Database connection failed"
- Make sure PostgreSQL is running: `sudo systemctl status postgresql`
- Check if the database exists: `sudo -u postgres psql -l | grep tablemap`

### "Permission denied"
- Make sure you're using the correct database user
- Try: `sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'postgres';"`

### Port already in use
- Change the port in `.env.local` or stop other services using port 5000
