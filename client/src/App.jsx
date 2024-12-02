
import { useContext } from 'react'
import './App.css'
import Footer from './components/Footer'
import Login from './components/Login'
import NavBar from './components/NavBar'
import BuyCredit from './pages/BuyCredit'
import Home from './pages/Home'
import Result from './pages/Result'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppContext } from './context/AppContext'

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/result",
  //     element: <Result />,
  //   },
  //   {
  //     path: "/buy-credit",
  //     element: <BuyCredit />,
  //   },
  // ]);

  const {showLogin} = useContext(AppContext)


  return (
    <div className='
    px-4 sm:px-10 md-px-14 lg:px-20 min-h-screen
    bg-gradient-to-b from-teal-50 to-orange-50
    '>

      <BrowserRouter>
        <NavBar/>
        {showLogin && <Login/>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredit />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      {/* <Home/>
      <Result/>
      <BuyCredit/> */}
    </div>
  )
}

export default App
