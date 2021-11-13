
import Cartwidget from './CartWidget'


const NavBar = () => {
    return (  

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LOGO</a>
   
   
    <ul class="nav justify-content-end">
  <li class="navbar-nav" >
    <a class="nav-link active" aria-current="page" href="#">Catalogo</a>
  </li>
  <li class="navbar-nav" >
    <a class= "nav-link active" aria-current="page" href="#">Oferta!</a>
  </li>
  <li class="navbar-nav" >
    <a class= "nav-link active" aria-current="page" href="#">Contacto</a>
  </li>
  <li class="navbar-nav" >
    <a class= "nav-link active" aria-current="page" href="#">Info</a>
  </li>
  </ul>
  <li class="navbar-nav" >
    <a class= "nav-link active" aria-current="page" href="#" ><Cartwidget/></a>
  </li>

 
  </div>
</nav>



        )
    
    
      
    
}

export default NavBar

/*<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    */