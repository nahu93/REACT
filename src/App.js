
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/Container/ItemListContainer'
import Cart from './components/Cart/Cart';





function App() {

function onAdd (cant){
  console.log (cant)
}


  return (

 
    

  <BrowserRouter>

   <div className="App" >
    <NavBar/> 
    <Routes>
    <Route path='/catalogo' element={<ItemListContainer/>} />
    <Route path='/item/:idProducto' element={<ItemDetailContainer/>} />
    <Route path='/cart' element={<Cart/>} />
    
 
    </Routes>
   </div>

  </BrowserRouter>

  );
}

export default App;
