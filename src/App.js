import './App.css';
import Tete from './page/tete';
import Pied from './page/pied';
import { Route , Routes } from 'react-router-dom';
import Routt from'./rout'

function App() {
  return (
    <div>
      <Tete/>
        <Routt></Routt>
      <Pied/>

    </div>
  );
}

export default App;
