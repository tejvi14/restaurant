import React,{Component} from "react";
import {BrowserRouter,Routes,Route,Link} from"react-router-dom";
import Home from "./Home";
import Service from "./Service";
import Panchangam from "./Panchangam";
import Calendar from "./Calendar";
import ContactUs from "./ContactUs";
class NavBar extends Component{
    render(){
        return(
            <BrowserRouter>
            <ul>
                <li>
                    <Link to='/Home'>Home</Link>
                </li>
                <li>
                    <Link to='/Service'>Service</Link>
                </li>
                
                <li>
                    <Link to='/Panchangam'>Panchangam</Link>
                </li>
                
                <li>
                    <Link to='/Calendar'>Calendar</Link>
                </li>
                
                <li>
                    <Link to='/ContactUs'>ContactUs</Link>
                </li>
            </ul>
            <Routes>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Service' element={<Service/>}/>
                <Route path='/Panchangam' element={<Panchangam/>}/>
                <Route path='/Calendar' element={<Calendar/>}/>
                <Route path='/ContactUs' element={<ContactUs/>}/>
            </Routes>
            </BrowserRouter>
        )
    }
}
export default NavBar