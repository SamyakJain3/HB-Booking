# Booking App

A simple hotel booking web application built with **React** and **Vite**.

## Features

- Modern React (v19) with functional components and hooks
- Routing with `react-router-dom`
- Date selection with `react-date-range`
- Responsive UI with custom CSS
- Modular component structure

## Project Structure

```
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── assets/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── header.css
│   │   └── Navbar/
│   │       ├── Navbar.jsx
│   │       └── Navbar.css
│   └── pages/
│       ├── Home/
│       │   ├── Home.jsx
│       │   └── Home.css
│       ├── Hotel/
│       │   └── Hotel.jsx
│       └── List/
│           └── List.jsx
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── .gitignore
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

4. **Preview the production build:**
   ```sh
   npm run preview
   ```

## Main Pages

- `/` - Home page with search and navigation
- `/hotels` - List of hotels
- `/hotels/:id` - Hotel details

## Dependencies

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [react-router-dom](https://reactrouter.com/)
- [react-date-range](https://github.com/hypeserver/react-date-range)
- [react-icons](https://react-icons.github.io/react-icons/)

## License

This project is for educational/demo purposes.