import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDGdaZdd5hRH03gIdT6L5Qhq2j6y27FM58",
  authDomain: "americanorestobar.firebaseapp.com",
  projectId: "americanorestobar",
  storageBucket: "americanorestobar.appspot.com",
  messagingSenderId: "109666462760",
  appId: "1:109666462760:web:4d40a9334ad9d3ae17d91d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
