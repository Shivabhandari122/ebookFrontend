import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SingleCard from './pages/SingleCard'


function App() {
   return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/books/:id' element = {<SingleCard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
