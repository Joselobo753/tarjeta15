import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";
import foto from "../../../public/fondo.jpeg"
const Invitacion = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const query = new URLSearchParams(useLocation().search);
  const familyName = query.get("familyName");
  const guestCount = query.get("guestCount");
  const confirmLink = `/confirm?familyName=${familyName}&guestCount=${guestCount}`;
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const cbu = "gaucho.fuego";
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
                <h1 className="titulo">Invitación Especial</h1>
                <div className="row ">
                  <div className="col-6">
                    <h5>
                      Te espero para compartir la de esta noche que para mí será
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
                    <h5>!5 años de <br /> mira-culos</h5>
                  </div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/11064/11064490.png"
                    onClick={handleFlip}
                    alt="clickme"
                    className="w-100"
                  />
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
                <h5 className="titulo-sec">Familia {familyName}</h5>
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
                    <h3>Codigo de vestimenta</h3>
                    <h5>Elegante</h5>
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
                      MI MEJOR REGALO ES TU PRESENCIA ESTA NOCHE , PERO SI
                      DESEAS OBSEQUIARME ALGO PODES <br /> LLEVARLO EN UN SOBRE O
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
