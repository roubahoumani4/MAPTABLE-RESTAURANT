# Register a new user
echo "1. Testing Registration..."
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","name":"Test User","phone":"+1234567890"}'

echo "\n\n2. Testing Login..."
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}' \
  -c cookies.txt

echo "\n\n3. Testing Get Current User..."
curl http://localhost:3000/api/auth/me \
  -b cookies.txt

echo "\n\n4. Testing Change Password..."
curl -X POST http://localhost:3000/api/auth/change-password \
  -H "Content-Type: application/json" \
  -d '{"currentPassword":"password123","newPassword":"newpassword123"}' \
  -b cookies.txt

echo "\n\n5. Testing Logout..."
curl -X POST http://localhost:3000/api/auth/logout \
  -b cookies.txt

echo "\n"
