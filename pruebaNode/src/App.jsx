import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Product from './components/product/product'
import Contador from './components/contador/contador'
import navbar from './components/navBar/navbar'
import './App.css'

function App() {
    return (
      <div>
        <div>
          <NavBar/>
          </div>

        <div>
        <h1>Bienvenido a mi E-comerce</h1>
        <Produc img='https://i.pinimg.com/736x/79/e0/38/79e038fd1835382a12d7d92860f72f6c.jpg' alt='ram' 
        title='RAM' descripcion="8 gb ddr4 ram" precio='10' />

        <Produc img='https://i.pinimg.com/736x/d9/83/5c/d9835cc913940b865203d4cfe51d357d.jpg'alt='gpu' 
        title='gpu' descripcion="1060 ti" precio='50'/>

        <Produc img='https://i.pinimg.com/736x/00/2f/35/002f35272fa5572fe44e58336b3eae8b.jpg' alt='mother' 
        title='mother' descripcion="motherboard asus" precio='30'/>

        <Produc img='https://i.pinimg.com/736x/b5/2d/40/b52d403f412c7ded032d0c6066e425d2.jpg' alt='fuente'
        title='fuente' descripcion="fuente 500w bronce" precio='15'/>
        </div>
      </div>
  )
}

export default App
