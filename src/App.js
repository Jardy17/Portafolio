import logo from './logo.svg';
import './styles-1.css';
import Interfas1 from './interfas1';
import Interfas2 from './interfas2';
import Interfas3 from './interfas-3';

function App() {
  return (
    <div className="container-padre">
    <Interfas1 />
   
    <Interfas2 name=" Jardy Litardo" age=" 17" addres=" Vinces-Ecuador" remote=" Available" ocupation=" FrontEnd" evento={function(){
     alert("El boton funciona")}}/>

<p className="primer-name-menu">ABILITIES</p>

  <div className="container-3">
    
     <Interfas3 pagina="none" 
     alt="HTML" 
     name="HTML" 
     parrafo="Knowledge modeling with the HTML markup language."/>

     <Interfas3 pagina="none" 
     alt="CSS" 
     name="CSS" 
     parrafo="Intermediate-advanced knowledge implementing styles with CSS."/>

     <Interfas3 pagina="none" 
     alt="Js" 
     name="JS" 
     parrafo="Intermediate knowledge implementing functionalities to websites with JavaScritp."/>
     
     <Interfas3 pagina="none" 
     alt="React.js" 
     name="REACT.JS" 
     parrafo="Intermediate-advanced knowledge developing interfaces and web functionalities with React.js."/>
  </div>
  
    </div>
  );
}

export default App;

