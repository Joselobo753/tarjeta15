import { useLocation } from "react-router-dom";

const Invitacion = () => {
    const query = new URLSearchParams(useLocation().search);
    const familyName = query.get('familyName');
    const guestCount = query.get('guestCount');
  
    return (
      <div className="guest-card">
        <h2>¡Estás Invitado!</h2>
        <p>Familia: {familyName}</p>
        <p>Cantidad de Invitados: {guestCount}</p>
      </div>
    );
  };
  export default Invitacion