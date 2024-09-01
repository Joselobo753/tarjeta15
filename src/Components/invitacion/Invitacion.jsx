import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";
import foto from "../../../public/Fondo.jpg"
import catedral from "../../../public/catedral.svg"
import CountdownTimer from "./ContarDias";
const Invitacion = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const query = new URLSearchParams(useLocation().search);
  const familyName = query.get("familyName");
  const familia = decodeURIComponent(familyName);
  const guestCount = query.get("guestCount");
  const confirmLink = `/confirm?familyName=${familyName}&guestCount=${guestCount}`;
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const cbu = "0110481730048125255047";
  const handleCopycbu = () => {
    navigator.clipboard.writeText(cbu);
    toast.success("Alias copiado", { duration: 1000 });
  };
  return (
    <>
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-inner ">
          <div className="flip-card-front">
            <div className="bodyinvitacion text-center">
              <div className="secundary-card p-3">
              <h1 className="titulo">
                  Te invito a mis <br />
                  XV años
                </h1>
                <p>Sofia Micaela Lobo</p>
                <div className="row ">
                  <div className="col-6">
                    <h5>
                      Te espero para compartir esta noche que para mí será
                      magica, inolvidable y única. Que solo estará completa
                      cuando llegues vos
                    </h5>
                  </div>
                  <div className="col-6 foto-presentacion-div">
                    <img
                      src={foto}
                      alt="Sofia"
                      className="w-100 foto-presentacion"

                    />
                    
                  </div>
                  <div className="p-2">

                  <button className="btn-invi" onClick={handleFlip}>Invitacion ala fiesta</button>
                  </div>
                </div>
                <div>
                  <img src={catedral} alt="iglesia" className="w-25"/>
                  <h2 className="titulo resaltar">Mi misa se celebrara el dia</h2>
                  <p className="resaltar">8 de septiembre a horas 20:00</p>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314.67455090579284!2d-65.22017669537024!3d-26.83562185325365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225dafba2b52cf%3A0xdf5b7059b17ca3f!2sIglesia%20San%20Gerardo!5e0!3m2!1ses!2sar!4v1725160319789!5m2!1ses!2sar" loading="lazy" className="border-map"></iframe>
                  <p>Av. Alem 552 San Miguel de Tucumán</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="bodyinvitacion text-center">
              <div className="secundary-card p-3">
                <h1 className="titulo">
                  Te invito a mis <br />
                  XV años{" "}
                </h1>
                <h5 className="titulo-sec">Familia {familia}</h5>
                <h4>{guestCount} Personas.</h4>
                <h1>
                  21 de septiembre <br /> 22:30hrs
                </h1>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4233.609741892959!2d-65.23839687321681!3d-26.839085397378124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c87e5973a2d%3A0x8ff9ea189b735dcf!2sSal%C3%B3n%20Franchesca!5e0!3m2!1ses!2sar!4v1725038313691!5m2!1ses!2sar"
                  loading="lazy"
                  className="border-map"
                ></iframe>
                <p>La Plata 2463, San Miguel de Tucumán</p>
                <div >
                  <div >
                  <CountdownTimer targetDate="2024-09-21T22:00:00" />
                  </div>
                  
                  <div>
                    <h3 className="resaltar">Confirmar presencia</h3>
                    <p className="resaltar">hasta el dia 10 de septiembre</p>
                    <Link to={confirmLink}>
                      <button>Confirmar</button>
                    </Link>
                  </div>
                  <div className="container">
                    <p>
                    El mejor regalo para mí es que compartas este momento tan especial conmigo. Si deseas acompañarlo con un detalle, puedes hacerlo con un sobre o mediante una transferencia.
                    </p>
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
