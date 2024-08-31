import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Invitacion = () => {
  const [isFlipped, setIsFlipped] = useState(false);
 
  const query = new URLSearchParams(useLocation().search);
  const familyName = query.get('familyName');
  const guestCount = query.get('guestCount');
  const confirmLink = `/confirm?familyName=${familyName}&guestCount=${guestCount}`
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCopycbu = () => {
    const cbu = "gaucho.fuego";
    navigator.clipboard.writeText(cbu);
  };

  return (
            <>
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
    <div className="flip-card-inner ">
      <div className="flip-card-front" >
        <div className="bodyinvitacion text-center">
          <div className="secundary-card p-3">
            <h1 className="titulo">Invitación Especial</h1>
            <button onClick={handleFlip}>Ver detalles</button>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="bodyinvitacion text-center">
            <div className="secundary-card p-3">
            <h1 className='titulo'>Te invito a mis <br />XV años </h1>
            <h5 className='titulo-sec'>Familia: {familyName}</h5>
            <h4>{guestCount} Personas.</h4>
            <h1>21 de septiembre <br/> 22:30hrs</h1>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4233.609741892959!2d-65.23839687321681!3d-26.839085397378124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c87e5973a2d%3A0x8ff9ea189b735dcf!2sSal%C3%B3n%20Franchesca!5e0!3m2!1ses!2sar!4v1725038313691!5m2!1ses!2sar"
              loading="lazy"
              className='border-map'
            ></iframe>
            <p>La Plata 2463, San Miguel de Tucumán</p>
            <div className="row">
              <div className="col-6">
                <h3>Codigo de vestimenta</h3>
                <h5>Elegante</h5>
              </div>
              <div className="col-6">
                <h3>Sugerir cancion</h3>
                <button>Sugerir cancion</button>
              </div>
              <div>
                <h3>Confirmar presencia</h3>
                <p>hasta el dia 10 de septiembre</p>
                <Link to={confirmLink} >
                <button >Confirmar</button>
                </Link>
              </div>
              <div className="container">
                <p>"No sabes que regalarme pone ACA tu plata"</p>
                <button onClick={handleCopycbu}>Cbu</button>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
    </div>
          
      </>
  );
};

export default Invitacion;