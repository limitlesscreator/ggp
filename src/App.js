import logo from './logo.svg';
import './sass/main.module.sass'
import {AboutUs} from "./components/AboutUs/AboutUs";
import {Header} from "./components/Header/Header";
import {Mainpage} from "./components/Mainpage/Mainpage";
import {Route, Routes} from "react-router-dom";
import {Utp} from "./components/Utp/utp";
import {Clients} from "./components/Clients/Clients";
import {Uslugi} from "./components/Uslugi/Uslugi";
import {Production} from "./components/Production/Production";
import {Contacts} from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
        <Header/>
        {/*<Mainpage/>*/}
        {/*<AboutUs/>*/}
        <Routes>
            <Route path={'/'} element={<Mainpage/>}/>
            <Route path={'/us'} element={<AboutUs/>}/>
            <Route path={'/utp'} element={<Utp/>}/>
            <Route path={'/clients'} element={<Clients/>}/>
            <Route path={'/uslugi'} element={<Uslugi/>}/>
            <Route path={'/production'} element={<Production/>}/>
            <Route path={'/contacts'} element={<Contacts/>}/>

        </Routes>
    </div>
  );
}

export default App;
