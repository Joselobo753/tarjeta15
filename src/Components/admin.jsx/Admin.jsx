import { useForm } from "react-hook-form";
import Input from "../Commons/Input";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
      const [guests, setGuests] = useState([]);
      useEffect(() => {
        const storedGuests = JSON.parse(localStorage.getItem("guests")) || [];
        setGuests(storedGuests);
      }, []);
    
      const handleSubmitForm = (data) => {
        const newGuest = {
          nameInformal: data.name,
          familyName: data["name-formal"],
          guestCount: data.number
        };
    
        // Actualizar el estado y localStorage
        const updatedGuests = [...guests, newGuest];
        setGuests(updatedGuests);
        localStorage.setItem("guests", JSON.stringify(updatedGuests));
    
        reset();
      };
      const encodeFamilyName = (familyName) => {
        return encodeURIComponent(familyName.trim());
      };
        // Función para eliminar un invitado
  const handleDeleteGuest = (index) => {
    const updatedGuests = guests.filter((_, i) => i !== index);
    setGuests(updatedGuests);
    localStorage.setItem("guests", JSON.stringify(updatedGuests));
  };

  // Función para copiar el link de invitación
  const handleCopyLink = (guest) => {
    const encodedName = encodeFamilyName(guest.familyName);
    const link = `${window.location.origin}/invitacion?familyName=${encodedName}&guestCount=${guest.guestCount}`;
  
    // Mensaje personalizado con saltos de línea usando plantillas de JavaScript
    const message = `¡Hola, ${guest.familyName}! 🎉\n\nEstamos muy emocionados de invitarles a celebrar los 15 años de Sofía Micaela Lobo. Nos encantaría contar con su presencia en este día tan especial. En el siguiente enlace encontrarán todos los detalles de la misa, la fiesta, y podrán confirmar su asistencia:\n\n${link}\n\nEsperamos verlos y compartir juntos esta ocasión inolvidable. ¡No olviden confirmar su asistencia! 😊\n\n¡Gracias y nos vemos pronto!`;
  
    // Copiar el mensaje con el link al portapapeles
    navigator.clipboard.writeText(message)
      .then(() => alert(`¡Mensaje de invitación para la familia ${guest.familyName} copiado al portapapeles!`))
      .catch(() => alert('Error al copiar el mensaje de invitación.'));
  };
  return (
    <div className="section text-center">
      <h4 className="titulo">Cargar invitados</h4>
      <div className="form-group">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Input
            error={errors.name}
            label="Nombre informal"
            name="name"
            options={{
              required: { value: true, message: "Este campo es requerido" },
              minLength: 3,
              maxLength: 30,
            }}
            register={register}
            placeholder="Nombre informal"
            icon="uil uil-user"
          />
          <Input
            error={errors.name}
            label="Nombre"
            name="name-formal"
            options={{
              required: { value: true, message: "Este campo es requerido" },
              minLength: 3,
              maxLength: 30,
            }}
            register={register}
            placeholder="Nombre Formal"
            icon="uil uil-user"
          />
          <Input
            error={errors.email}
            label="Numero"
            name="number"
            options={{
              required: { value: true, message: "Este campo es requerido" },
              pattern: {
                min: 1,
                max: 15,
              },
            }}
            type="number"
            register={register}
            placeholder="Numero de invitaciones"
            icon="uil uil-at"
          />
          

          <button className="button-submit" type="submit">
            Cargar
          </button>
        </form>
        <table>
        <thead>
          <tr>
            <th>Cantidad</th>
            <td>Nombre informal</td>
            <th>Nombre de Familia</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest, index) => (
            <tr key={index}>
              <td>{guest.guestCount}</td>
              <td>{guest.nameInformal} </td>
              <td>{guest.familyName}</td>
              <td>
                <Link to={`/invitacion?familyName=${guest.familyName}&guestCount=${guest.guestCount}`}>
                  Ver Tarjeta
                </Link>
                <button onClick={() => handleCopyLink(guest)}>Copiar Link</button>
                <button onClick={() => handleDeleteGuest(index)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}
export default Admin