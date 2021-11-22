
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/Container/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';



function App() {

function onAdd (cant){
  console.log (cant)
}


  return (


    
    <div className="App" >
  
    <NavBar/>
    <ItemListContainer/>
    <ItemCount initial={1} stock={11} onAdd={onAdd} />
    
   </div>

   

  );
}

export default App;
