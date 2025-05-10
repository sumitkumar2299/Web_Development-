

import './App.css'
import Products from './Components/Products'
import PaymentSuccess from './Components/paymentSuccess'
import productsData from './Components/data'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path = "/" element = {<Products products={productsData}/>}></Route>
        <Route path='/paymentSuccess' element = {<PaymentSuccess/>}></Route>
      </Routes>
    </Router>
      
      
    </>
  )
}

export default App
