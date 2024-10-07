  import "../css-page/acceuil.css"
  import Apropos from "./a-propos";

  function Acceuil() {
    return (
        <div>
          <div>
            <img src="img-use/hero-bg-mobile.jpg" alt="ordinateur" width="100%" height=""/>
            <div class="centered">
              <h1>Bonjour, je suis John Doe</h1>
              <h2>Devellopeur web full stack</h2>
              <button>En savoir plus</button>
            </div>
            </div>
            <div>
              <Apropos/>
            </div>
        </div>

    );
  }
  
  export default Acceuil;
  /*
  .centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
  */