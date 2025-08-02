# Booking App

A simple hotel/property booking web application built with **React** and **Vite**.

---

## Features

- Modern React with functional components and hooks
- Property listing with images and categories
- Date and guest selection for booking
- Responsive design with custom CSS
- Modular component structure (Header, Footer, PropertyList, etc.)

---

## Project Structure

```
├── public/
├── src/
│   ├── assets/
│   │   └── PropertyImg/
│   ├── components/
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── header.css
│   │   ├── PropertyList/
│   │   │   ├── PropertyList.jsx
│   │   │   └── PropertyList.css
│   │   └── featured/
│   │       ├── feature.jsx
│   │       └── featured.css
│   ├── pages/
│   │   ├── Home/
│   │   ├── Hotel/
│   │   └── List/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

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

---

## Main Components

- **Header**: Search bar, date picker, guest/room selection
- **PropertyList**: Displays property types with images
- **Featured**: Highlights featured hotels/properties
- **Footer**: App footer with links and copyright

---

## Dependencies

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [react-router-dom](https://reactrouter.com/)
- [react-date-range](https://github.com/hypeserver/react-date-range)
- [react-icons](https://react-icons.github.io/react-icons/)

---

## License

This project is for educational/demo purposes.