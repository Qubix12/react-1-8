import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header4 from './components/Header'
import Product from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Jakub</h1>
    <p>jakiś krótki opis</p>


    <Header2></Header2>
    <Product></Product>
    <Footer></Footer>
    </>
  )
}

export default App
