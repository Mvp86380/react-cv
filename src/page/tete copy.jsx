import "../css-page/tete.css"
import Acceuil from './acceuil';
import Apropos from './a-propos';
import Realisation from './realisation';
import Blogs from './blog';
import Mention from './mention-legales';
import Services from './services';
import Contact from './contact';
import { Link ,Route, Routes} from "react-router-dom";/*style={{background: "#333"}}*/
function Tete() {
    return (
        <div>
            <div >
                <nav class="navbar navbar-expand-lg bg-secondary text-light text-uppercase fixed-top " id="mainNav" >
                    <div  class="container">
                        <a class="navbar-brand text-light" href="#page-top">Jane Doe</a>
                        <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-bars"></i>
                        </button> 
                        <div class="navbar-collapse collapse" id="navbarResponsive" >
                            
                            <ul id="ulnav" class="navbar-nav ms-auto">
                                <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/">Acceuil</Link></li>
                                <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/Realisation">Realisation</Link></li>
                                <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/Blogs">Blogs</Link></li>
                                <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/Services">Services</Link></li>
                                <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/Contact">Contact</Link></li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>


        <Routes>
            <Route path='/' element={ <Acceuil/>}></Route>
            <Route path='/Apropos' element={<Apropos/>}></Route>
            <Route path='/Realisation' element={<Realisation/>}></Route>
            <Route path='/Blogs' element={<Blogs/>}></Route>
            <Route path='/Services' element={<Services/>}></Route>
            <Route path='/Mention' element={<Mention/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
        </div>


    );
  }
  
  export default Tete;

