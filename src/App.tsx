import { useEffect, useState } from 'react'
import './App.css'
import { Presentacion } from './components/Presentacion'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'


function App() {

  const [loader, setLoader] = useState(true)


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
          <>
            <ItemListContainer />
          </>
      }
    </>
  )
}

export default App
