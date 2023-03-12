import { useEffect, useState } from 'react'
import { HotKeys, KeyMap } from 'react-hotkeys'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { useAppDispatch } from './app/hooks'
import { Presentacion } from './components'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { Login } from './components/login/Login'
import { loginAdmin } from './features/menuDigital/cartaSlice'


const keyMap: KeyMap = {
  SAVE: 'alt+a+r'
};



function App() {

  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000)
      const isLogged = localStorage.getItem('isLogged');
      if (isLogged === 'true') {
          dispatch(loginAdmin());
      }
  }, [])
  
  const handlers = {
    SAVE: (keyEvent?: KeyboardEvent) => {
      if (keyEvent) {
        keyEvent.preventDefault();
      }
      navigate('/login')
    },
  };


  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
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
    </HotKeys>
  )
}

export default App
