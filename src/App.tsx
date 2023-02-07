import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Presentacion } from './components'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { Login } from './components/login/Login'
import { db } from './main'




function App() {

  const docRef = doc(db, "cartaAmericano", "carta");

  const traerInfo = async () => {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }


  useEffect(() => {
    // traerInfo()
  }, [])







  const [loader, setLoader] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }, [])

  return (
    <>
      {
        loader
          ?
          <Presentacion />
          :
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<div>ERROR 404...</div>} />

          </Routes>
          
      }
    </>
  )
}

export default App
