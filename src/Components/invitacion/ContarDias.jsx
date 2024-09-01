import  { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div>
      <h1>Conta los dias conmigo</h1>
      <div style={styles.countdownContainer} className='mb-3'>
        <span style={styles.countdownItem}>{formatTime(timeLeft.days || 0)}</span>
        <span style={styles.separator}> : </span>
        <span style={styles.countdownItem}>{formatTime(timeLeft.hours || 0)}</span>
        <span style={styles.separator}> : </span>
        <span style={styles.countdownItem}>{formatTime(timeLeft.minutes || 0)}</span>
        <span style={styles.separator}> : </span>
        <span style={styles.countdownItem}>{formatTime(timeLeft.seconds || 0)}</span>
      </div>
    </div>
  );
};

const styles = {
    countdownContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2.5rem',
        color: '#c32c71',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
        marginTop: '20px',
        
        border: '2px solid #c32c71', // Borde sólido con el color destacado
        borderRadius: '15px', // Radio de borde para esquinas redondeadas
       
       
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  countdownItem: {
    padding: '0 10px', // Espacio a los lados de cada número
  },
  separator: {
    color: '#555', // Color más suave para los separadores
    padding: '0 5px',
  },
};

export default CountdownTimer;