import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Importamos bootstrap:
import 'bootstrap/dist/css/bootstrap.min.css';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWuhdHtnbklJfF5mxXqJDbrTLScSUEuiU",
  authDomain: "importmining-e3e0d.firebaseapp.com",
  projectId: "importmining-e3e0d",
  storageBucket: "importmining-e3e0d.appspot.com",
  messagingSenderId: "972776316356",
  appId: "1:972776316356:web:7ac5f32378ae7a8722d891"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

