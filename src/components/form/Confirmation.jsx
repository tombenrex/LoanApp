import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = ({ onNewApplication }) => {
  const [secondsLeft, setSecondsLeft] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      onNewApplication();
      navigate('/');
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate, onNewApplication]);

  const handleClick = () => {
    onNewApplication();
    navigate('/');
  };

  return (
    <div className='container'>
      <div className='alert alert-success text-center mt-4' role='alert'>
        <h4 className='alert-heading'>Thank you for your application!</h4>
        <p>We have received your request and will get back to you shortly.</p>
        <button
          type='button'
          className='btn btn-primary mt-3'
          onClick={handleClick}
        >
          Back to homepage
        </button>
        <p className='mt-2'>
          Redirecting to homepage in {secondsLeft} seconds...
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
