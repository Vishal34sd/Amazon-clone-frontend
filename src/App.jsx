import Header from './components/Header'
import './App.css'
import LowerHeader from './components/LowerHeader'
import Body from './components/Body'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { searchData } from './utils/dummySearchData'

function App() {
  

  return (
   <div className = "App p-0 m-0 box-border overflow-x-hidden">
    <Header />
    <LowerHeader/>
    <Outlet/>
    <Footer/>
   </div>
  )
}

export default App
