import { useEffect, useState } from 'react'
import './App.css'
import { OrdenyFiltro } from './components/OrdenyFiltro'
import { Sidebar } from './components/Sidebar'
import { ItemListContainer } from './itemListContainer/ItemListContainer'


function App() {

  const [loader, setLoader] = useState(false)

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
            <div className='p-3 z-30 text-gray-100 text-center welcome'>
              <h2 className='text-6xl'>Americano</h2>
              <h6 className='text-4xl'>RestoBar</h6>
            </div>
          </div>
          :
          <>
            <Sidebar />
            <OrdenyFiltro />
            <ItemListContainer />
          </>
      }
    </div>
  )
}

export default App
