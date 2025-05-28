const Confirmation = ({ onNewApplication }) => {
  return (
    <div className='alert alert-success text-center mt-4' role='alert'>
      <h4 className='alert-heading'>Thank you for your application!</h4>
      <p>We have received your request and will get back to you shortly.</p>
      <button
        type='button'
        className='btn btn-primary mt-3'
        onClick={onNewApplication}
      >
        Start New Application
      </button>
    </div>
  );
};

export default Confirmation;
