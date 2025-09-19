# Thrive Application

A React-based financial management application with Node.js backend API.

## Project Structure

- `thrive-react/` - React frontend application
- `thirve-api-backend/` - Node.js backend API

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd thirve-api-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. **Database Setup**: 
   - Install MongoDB locally, or
   - Update `config/db.js` to use MongoDB Atlas or another database service
   - For local MongoDB, ensure it's running on `mongodb://localhost:27017`

4. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd thrive-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```
   The application will run on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/user` - Get user profile (requires authentication)

### Registration Example
```json
POST http://localhost:5000/api/auth/register
{
  "name": "Hiren",
  "email": "hiren@example.com",
  "password": "123456"
}
```

### Login Example
```json
POST http://localhost:5000/api/auth/login
{
  "email": "hiren@example.com" "hiren@root.com", 
  "password": "123456"
}

```

## Features Implemented

### Routing
- ✅ Proper React Router setup with nested routes
- ✅ Protected routes requiring authentication
- ✅ Public routes for login/signup
- ✅ Automatic redirects based on authentication status

### Authentication
- ✅ Login functionality using backend API
- ✅ Token-based authentication
- ✅ User profile fetching
- ✅ Logout functionality

### Header Component
- ✅ Dynamic user profile display
- ✅ User name and ID display
- ✅ Profile picture with fallback
- ✅ Dropdown menu with profile and logout options
- ✅ Responsive navigation

### Pages Available
- Dashboard
- Balance & Transactions
- Suppliers Management
- Bank Transfer
- Documents
- Profile & Settings
- Authentication pages (Login, Signup, etc.)

## Current Status

The application is now properly configured with:

1. **Fixed Routing**: App.js now has proper nested routing structure
2. **Backend Integration**: Login.js uses the correct backend endpoint
3. **Dynamic Header**: Header.js displays user profile and name dynamically
4. **Protected Routes**: Proper authentication flow implemented

## Testing

To test the registration endpoint using Postman:

1. Set method to `POST`
2. URL: `http://localhost:5000/api/auth/register`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):
   ```json
   {
     "name": "Hiren",
     "email": "hiren@example.com",
     "password": "123456"
   }
   ```

**Note**: If you get "User already exists" message, it means the user is already registered. You can either:
- Use a different email address
- Delete the user from the database
- Use the login endpoint instead

## Troubleshooting

1. **MongoDB Connection Error**: Ensure MongoDB is running or update the database connection string
2. **CORS Issues**: The backend has CORS enabled, but ensure both servers are running
3. **Port Conflicts**: Backend runs on port 5000, frontend on port 3000

## Next Steps

1. Set up MongoDB or configure a different database
2. Add more API endpoints for other features
3. Implement error handling and loading states
4. Add form validation
5. Implement the remaining page functionality 