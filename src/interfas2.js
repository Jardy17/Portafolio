import './styles-2.css';

export default function Interfas2(props){
    return(
        <>
        
        <div className="container-two">

            <div className="descripcion-trabajo">
             <h3 className="titel-one">discover</h3>
             <h2  className="titel-two">About me</h2>
             <p className="parrafo-descripcion">My name is Jardy Litardo. I am an independent FrontEnd developer based in Ecuador. I enjoy what I do and that makes me very passionate, dedicated and eager to continue learning. I currently have no experience in the field. I am looking for a company where I can start my professional career as a FrontEnd developer. Throughout my studies I have developed some projects as proof of my skills and performance in the area, you can see them <a href="#">Here</a></p>
            
             <div className="dates">
              <p className="date-item">Name:<spam className="item"> {props.name}</spam></p>  <p className="date-item">Age:<spam className="item"> {props.age}</spam></p> 
              
              <p className="date-item">Address:<spam className="item"> {props.addres}</spam></p> <p className="date-item">Remote:<spam className="item"> {props.remote} </spam></p> 
             
              <p className="date-item">Occupation:<spam className="item"> {props.ocupation}</spam></p> 
              <button onClick={props.evento} className="date-boton">Download cv</button>
             </div>
            
             </div>
             
             

        </div>
        
        
        </>
    );
}