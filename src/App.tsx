import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components'
import { ItemListContainer } from './itemListContainer/ItemListContainer'

function App() {

  const [loader, setLoader] = useState(false)

  useEffect(() => {
    // setTimeout(() => {
    //   setLoader(false)
    // }, 2000)
  }, [])

  return (
    <div className='max-w-7xl mx-auto'>
      {
        loader
          ?
          <div className='text-center h-screen absolute top-96 left-10 text-3xl px-10'>
            Cargando Menu...
          </div>
          :
          <>
            <Navbar />
            <ItemListContainer />
          </>
      }
    </div>
  )
}

export default App
