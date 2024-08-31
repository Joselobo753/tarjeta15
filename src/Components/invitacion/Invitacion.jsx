import { useLocation } from "react-router-dom";

const Invitacion = () => {
    const query = new URLSearchParams(useLocation().search);
    const familyName = query.get('familyName');
    const guestCount = query.get('guestCount');
    const handleCopycbu = () => {
      const cbu = "gaucho.fuego";
      navigator.clipboard.writeText(cbu)
        
    };
    return (
      <div className="text-center p-2">
        <h1>Te invito <br /> a mis <br />XV<br /> años </h1>
        <p>Familia: {familyName}</p>
        <p>{guestCount} Personas.</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4233.609741892959!2d-65.23839687321681!3d-26.839085397378124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c87e5973a2d%3A0x8ff9ea189b735dcf!2sSal%C3%B3n%20Franchesca!5e0!3m2!1ses!2sar!4v1725038313691!5m2!1ses!2sar" loading="lazy"></iframe>
        <div className="row">
          <div className="col-6">
            <h3>Codigo de vestimenta</h3>
            <h5>Elegante</h5>
          </div>
          <div className="col-6">
            <h3>Sugerir cancion</h3>
            <button>Sugerir cancion<span></span>
    <span></span>
    <span></span>
    <span></span></button>

          </div>
          <div>
            <h3>Confirmar presencia</h3>
            <button>Confirmar<span></span>
    <span></span>
    <span></span>
    <span></span></button>

          </div>
          <div className="container">
            <p>"Tu presencia en este día tan especial es el mejor regalo que podría recibir. Pero si además deseas contribuir con algo más, una pequeña ayuda para mis sueños sería un detalle que agradeceré de todo corazón. ¡Gracias por ser parte de este momento único!"</p>
            <button >Cbu<span></span>
    <span></span>
    <span></span>
    <span></span></button>
          </div>
        </div>
      </div>
    );
  };
  export default Invitacion