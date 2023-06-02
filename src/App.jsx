import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductsHeader from './components/ProductsHeader'
import ProductsTable from './components/ProductsTable'
import ProductForm from './components/ProductForm'
import SalesScreen from './Pages/SalesScreen'
import ProductManagement from './Pages/ProductManagement'
import Login from './Pages/Login'
import Signup from './Pages/Signup'


function App() {
  
  const [products, setProducts] = useState([]);
/* 
  return (
    <>
    <ProductsHeader />
    <ProductsTable/>
    <ProductForm/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  ) */
  return ( <><ProductManagement products={products} setProducts={setProducts} /></>)
  //return ( <><SalesScreen/><ProductsTable products={products}/></>)
}

export default App
