import { useFormContext } from 'react-hook-form';

const LoanDetails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='mb-4'>
      <h4 className='mb-3'>Loan Details</h4>

      <div className='mb-3'>
        <label htmlFor='amount' className='form-label'>
          Loan Amount ($)
        </label>
        <input
          id='amount'
          type='number'
          className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
          {...register('amount')}
        />
        {errors.amount && (
          <div className='invalid-feedback'>{errors.amount.message}</div>
        )}
      </div>

      <div className='mb-3'>
        <label htmlFor='purpose' className='form-label'>
          Purpose of the Loan
        </label>
        <input
          id='purpose'
          type='text'
          className={`form-control ${errors.purpose ? 'is-invalid' : ''}`}
          {...register('purpose')}
        />
        {errors.purpose && (
          <div className='invalid-feedback'>{errors.purpose.message}</div>
        )}
      </div>

      <div className='mb-3'>
        <label htmlFor='years' className='form-label'>
          Repayment Time (years)
        </label>
        <input
          id='years'
          type='number'
          className={`form-control ${errors.years ? 'is-invalid' : ''}`}
          {...register('years')}
        />
        {errors.years && (
          <div className='invalid-feedback'>{errors.years.message}</div>
        )}
      </div>
    </div>
  );
};

export default LoanDetails;
