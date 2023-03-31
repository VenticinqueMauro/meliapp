import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { HotKeys, KeyMap } from 'react-hotkeys'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { Presentacion } from './components'
import { AgregarPlatos } from './components/admin/AgregarPlatos'
import { CambiarPassword } from './components/admin/CambiarPassword'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { Login } from './components/login/Login'
import { loginAdmin, selectCarta } from './features/menuDigital/cartaSlice'


const keyMap: KeyMap = {
  SAVE: 'alt+a+r'
};



function App() {

  const [loader, setLoader] = useState(true)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { adminLogged } = useAppSelector(selectCarta)

  useEffect(() => {

    const isLogged = localStorage.getItem('isLogged');
    if (isLogged === 'true') {
      dispatch(loginAdmin());
    }

    setTimeout(() => {
      setLoader(false);
    }, 2000)
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
          <>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/login' element={!adminLogged ? <Login /> : <Navigate to='/' />} />
              {/* <Route path='/admin' element={adminLogged ? <Admin /> : <Login /> } /> */}
              <Route path='/admin/changepassword' element={adminLogged ? <CambiarPassword /> : <Login /> } />
              <Route path='/admin/agregarmenus' element={adminLogged ? <AgregarPlatos /> : <Login /> } />              
              <Route path='*' element={<div>ERROR 404...</div>} />
            </Routes>
            <Toaster position='bottom-right' />
          </>

      }
    </HotKeys>
  )
}

export default App
