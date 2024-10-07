import Acceuil from './page/acceuil';
import Apropos from './page/a-propos';
import Realisation from './page/realisation';
import Blogs from './page/blog';
import Mention from './page/mention-legales';
import Services from './page/services';
import Contact from './page/contact';
import { Link ,Route, Routes} from "react-router-dom";/*style={{background: "#333"}}*/
export default function Routt() {
    return(
    <Routes>
        <Route path='/' element={ <Acceuil/>}></Route>
        <Route path='/Apropos' element={<Apropos/>}></Route>
        <Route path='/Realisation' element={<Realisation/>}></Route>
        <Route path='/Blogs' element={<Blogs/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/Mention' element={<Mention/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>)
}