import { useFormContext } from 'react-hook-form';

const PersonalInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='mb-4'>
      <h4 className='mb-3'>Personal Information</h4>

      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Full Name
        </label>
        <input
          id='name'
          type='text'
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          {...register('name')}
        />
        {errors.name && (
          <div className='invalid-feedback'>{errors.name.message}</div>
        )}
      </div>

      <div className='mb-3'>
        <label htmlFor='phone' className='form-label'>
          Phone Number
        </label>
        <input
          id='phone'
          type='text'
          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
          {...register('phone')}
        />
        {errors.phone && (
          <div className='invalid-feedback'>{errors.phone.message}</div>
        )}
      </div>

      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input
          id='age'
          type='number'
          className={`form-control ${errors.age ? 'is-invalid' : ''}`}
          {...register('age')}
        />
        {errors.age && (
          <div className='invalid-feedback'>{errors.age.message}</div>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
