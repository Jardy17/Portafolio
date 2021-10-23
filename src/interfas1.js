import img from './imagenes/background.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'
export default function Interfas1(){
    return(

        <>
        <div className="container-one" id="profile">
            <ul className="menu">
                <li><a href="#profile" className="links">Profile</a></li>
                <li><a href="#abilities" className="links">Abilities</a></li>
                <li><a href="#" className="links">Proyects</a></li>
                <li><a href="#" className="links">Contact me</a></li>
            </ul>
            
            <img src={img} className="imagen-one"/>
            
            <div className="presentation">
             <img src="data:image/png;base64,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" className="imagen-two"/>
            <h1 className="nombre">Jardy Litardo Vera</h1>
            <h2  className="descripcion">FrontEnd Developer</h2>
            </div>


        </div>
        </>

    );
}