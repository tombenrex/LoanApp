# LOANAPP

A React-based web application for managing loan applications, built with Vite.

## Project Structure

```
LOANAPP/
├── node_modules/              # Dependencies installed via npm
├── src/                      # Source code directory
│   ├── components/           # Reusable React components
│   │   ├── form/             # Form-related components
│   │   │   ├── Comments.jsx
│   │   │   ├── Confirmation.jsx
│   │   │   ├── EmploymentInfo.jsx
│   │   │   ├── LoanDetails.jsx
│   │   │   ├── LoanForm.jsx
│   │   │   └── PersonalInfo.jsx
│   ├── img/                  # Image assets
│   │   └── bank.jpg
│   ├── main/                 # Main application files
│   │   ├── Home.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
├── .gitignore                # Git ignore file
├── eslint.config.js          # ESLint configuration
├── index.html                # Main HTML entry point
├── package-lock.json         # Dependency lock file
├── package.json              # Project metadata and dependencies
├── README.md                 # Project documentation (this file)
└── vite.config.js            # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd LOANAPP
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port specified in the terminal).

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint to check for code issues

## Technologies Used

- **React**: Frontend library for building user interfaces
- **Vite**: Build tool for fast development and optimized builds
- **ESLint**: Linting tool for identifying and fixing code issues
- **Bootstrap**: For styling
