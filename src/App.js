
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/Container/ItemListContainer'
import NavBar from './components/NavBar/NavBar';

function App() {

  let greeting = 'bienvenido a mi e-commerce'


  return (


    
    <div className="App" >
  
    <NavBar/>

   
    <ItemListContainer greeting= {greeting} />
    </div> 
   

   

  );
}

export default App;
