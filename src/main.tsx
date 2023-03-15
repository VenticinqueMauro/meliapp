import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyAixUNS-9F8ebjYRHD1RYVShnH4_JumG20",
  authDomain: "lacarta-92bf7.firebaseapp.com",
  projectId: "lacarta-92bf7",
  storageBucket: "lacarta-92bf7.appspot.com",
  messagingSenderId: "902477021868",
  appId: "1:902477021868:web:c4a5be3d280454c0655509"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const storage = getStorage(app);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
