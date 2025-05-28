import { useFormContext, useWatch } from 'react-hook-form';

const EmploymentInfo = () => {
  const { register, control } = useFormContext();

  const salary = useWatch({ control, name: 'salary' });

  return (
    <div className='mb-4'>
      <h4 className='mb-3'>Employment Information</h4>

      <div className='form-check mb-3'>
        <input
          type='checkbox'
          id='employed'
          className='form-check-input'
          {...register('employed')}
        />
        <label htmlFor='employed' className='form-check-label'>
          Are you employed?
        </label>
      </div>

      <div className='mb-3'>
        <label htmlFor='salary' className='form-label'>
          Your Salary
        </label>
        <select id='salary' className='form-select' {...register('salary')}>
          <option value=''>Select your salary range</option>
          <option value='under500'>Less than $500</option>
          <option value='500-1000'>$500 - $1000</option>
          <option value='1000-2000'>$1000 - $2000</option>
          <option value='over2000'>Over $2000</option>
        </select>
      </div>

      {salary === 'under500' && (
        <div className='alert alert-warning' role='alert'>
          Note: Lower income may affect your loan approval.
        </div>
      )}
    </div>
  );
};

export default EmploymentInfo;
