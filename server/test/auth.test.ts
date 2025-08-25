import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Configure axios defaults
axios.defaults.withCredentials = true;
let authCookie: string;

async function testAuth() {
  try {
    console.log('1. Testing Registration...');
    const registerResponse = await axios.post(`${API_URL}/auth/register`, {
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
      phone: '+1234567890'
    });
    console.log('Registration successful:', registerResponse.data);
    authCookie = registerResponse.headers['set-cookie']?.[0];

    console.log('\n2. Testing Login...');
    const loginResponse = await axios.post(`${API_URL}/auth/login`, {
      email: 'test@example.com',
      password: 'password123'
    });
    console.log('Login successful:', loginResponse.data);
    authCookie = loginResponse.headers['set-cookie']?.[0];

    console.log('\n3. Testing Get Current User...');
    const meResponse = await axios.get(`${API_URL}/auth/me`, {
      headers: {
        Cookie: authCookie
      }
    });
    console.log('Get current user successful:', meResponse.data);

    console.log('\n4. Testing Change Password...');
    const changePasswordResponse = await axios.post(
      `${API_URL}/auth/change-password`,
      {
        currentPassword: 'password123',
        newPassword: 'newpassword123'
      },
      {
        headers: {
          Cookie: authCookie
        }
      }
    );
    console.log('Change password successful:', changePasswordResponse.data);

    console.log('\n5. Testing Logout...');
    const logoutResponse = await axios.post(
      `${API_URL}/auth/logout`,
      {},
      {
        headers: {
          Cookie: authCookie
        }
      }
    );
    console.log('Logout successful:', logoutResponse.data);

  } catch (error: any) {
    console.error('Test failed:', error.response?.data || error.message);
  }
}

testAuth();
