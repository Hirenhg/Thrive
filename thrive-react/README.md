# Thrive - Financial Management Platform

## Overview
Thrive is a modern financial management platform built with React, designed to help users manage their financial transactions, suppliers, and banking operations efficiently.

## Features

### Authentication & Security
- Secure login system with verification code
- User registration with terms & conditions
- Password reset functionality
- Protected routes for secure access

### Financial Management
- Dashboard for financial overview
- Balance tracking and management
- Transaction history and details
- ATM deposits tracking
- Bank transfer functionality

### Supplier Management
- Supplier listing and management
- Add new suppliers
- Supplier payment tracking
- Supplier history viewing
- Super Trader management

### Additional Features
- Document management system
- User profile management
- Responsive design for all devices

## Tech Stack

- **Frontend Framework:** React 19.0.0
- **Routing:** React Router DOM 7.2.0
- **HTTP Client:** Axios
- **Styling:** 
  - Bootstrap 5.1.0
  - SASS
- **Testing:** Jest, React Testing Library

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd thrive-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Project Structure

```
thrive-react/
├── src/
│   ├── pages/
│   │   ├── Auth/           # Authentication related components
│   │   ├── Dashboard/      # Dashboard components
│   │   ├── Balance/        # Balance and transaction components
│   │   ├── Suppliers/      # Supplier management components
│   │   ├── BankTransfer/   # Bank transfer components
│   │   ├── Documents/      # Document management components
│   │   └── Profile/        # User profile components
│   ├── protected/          # Protected route components
│   ├── App.js             # Main application component
│   └── index.js           # Application entry point
├── public/                # Static files
└── package.json          # Project dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please contact [support email/contact information]

## Acknowledgments

- Create React App
- React Community
- All contributors who have helped shape this project
