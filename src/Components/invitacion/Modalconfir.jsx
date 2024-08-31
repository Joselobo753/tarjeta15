import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

const Modalconfir = () => {
  const location = useLocation(); // Hook para obtener la ubicación actual
  const query = new URLSearchParams(location.search); // Parámetros de consulta de la URL
  const familyName = query.get('familyName'); // Obtener el nombre de la familia desde los parámetros de la URL
  const guestCountFromQuery = parseInt(query.get('guestCount'), 10) || 1; // Obtener el número de invitados desde los parámetros de la URL o 1 por defecto

  // Configuración de react-hook-form
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      guestCount: guestCountFromQuery, // Valor predeterminado basado en la URL
      specialRequest: '',
    }
  });

  const guestCount = watch('guestCount'); // Observa el valor de guestCount

  // Función para manejar el envío de WhatsApp
  const onSubmit = (data) => {
    const { guestCount, specialRequest } = data;

    // Mensaje predeterminado basado en la cantidad de personas
    let message = `Confirmo la invitación para la familia ${familyName} para la cantidad ${guestCount} persona(s).`;

    // Añadir información adicional si se necesita comida especial
    if (specialRequest) {
      message += ` Necesitamos una comida especial: ${specialRequest}.`;
    }

    // Construimos la URL de WhatsApp API
    const whatsappURL = `https://wa.me/3814546513?text=${encodeURIComponent(message)}`;

    // Abrimos la URL en una nueva pestaña
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className='text-center'>
      <h5 className='titulo'>Confirmar Invitación para familia{familyName}</h5>
      {/* Formulario manejado por react-hook-form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Input para seleccionar la cantidad de invitados */}
        <select
          {...register('guestCount')}
          className='form-style py-2'
        >
          {/* Opciones solo hasta el número máximo de invitados */}
          {[...Array(guestCountFromQuery).keys()].map(i => (
            <option key={i + 1} value={i + 1}>
              Confirmo invitación para {i + 1} persona(s)
            </option>
          ))}
        </select>
        
          <div className='py-2'>

        <textarea
          {...register('specialRequest')}
          placeholder="¿Alguna persona necesita comida especial?"
          className='form-text'
          ></textarea>
          </div>
        
      
        <button 
          type="submit"
          style={{ width: '100%', padding: '10px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Enviar WhatsApp
        </button>
      </form>
    </div>
  );
};

export default Modalconfir;