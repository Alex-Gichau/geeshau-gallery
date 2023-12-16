import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const menuContent = document.querySelector("#menuContent");

const menuButtons = document.querySelectorAll(".menu-buttons button");

const menuHeight = getComputedStyle(document.documentElement).getPropertyValue(
  "--menu-height"
);

const toggleMenuOpen = (value) => {
  document.body.classList.toggle("open", value);
};

const toggleMenuBlock = (event, index) => {
  menuButtons.forEach((button) => button.classList.remove("active"));
  event.classList.toggle("active");
  menuContent.style.translate = `0 calc(0px - ${menuHeight} * ${index})`;
};

