const { Ovo } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = { theme: { extend: {
  colors: {
    lightHover: '#fcf4ff',
    darkhover: '#2a004a',
    darkTheme: '#11001F'
  }, 
  fontFamily: {
    Outfit: ["Outfit", "sans-serif"], 
    Ovo: ["Ovo", "serif"]
  }
} }, plugins: [] };
