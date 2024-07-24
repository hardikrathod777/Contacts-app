import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import Addcontact from './Components/Addcontact/Addcontact'
import Editcontact from './Components/Editcontact/Editcontact'
import { useSelector } from 'react-redux'
function App() {
  const isLogin = useSelector(state => state.authReducer.isLogin);
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={isLogin ? <Home /> : <Navigate to="/login" />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/Addcontact' element={<Addcontact/>}/>
        <Route path='/Editcontact' element={<Editcontact/>}/>
      </Routes>
    </>
  )
}

export default App
