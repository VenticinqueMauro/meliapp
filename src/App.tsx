import './App.css'
import { useEffect, useState } from 'react'
import { Navbar } from './components'
import { ItemListContainer } from './itemListContainer/ItemListContainer'
import camarero from './assets/camarero.webp'
import { Sidebar } from './components/Sidebar'


function App() {

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }, [])

  return (
    <div className='relative'>
      {
        loader
          ?
          <div className='h-screen w-full relative gifWelcome '>
            {/* <img className=' w-full h-screen absolute top-0 left-0 right-0 bottom-0 -z-10' src={camarero} /> */}
            <div className='p-3 z-30 text-gray-100 text-center welcome'>
              <h2 className='text-6xl'>Americano</h2>
              <h6 className='text-4xl'>RestoBar</h6>
            </div>
          </div>
          :
          <>
            <Sidebar />
            <ItemListContainer />
          </>
      }
    </div>
  )
}

export default App
