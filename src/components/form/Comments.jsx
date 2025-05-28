import { useFormContext } from 'react-hook-form';

const Comments = () => {
  const { register } = useFormContext();

  return (
    <div className='mb-4'>
      <h4 className='mb-3'>Additional Comments</h4>

      <div className='mb-3'>
        <label htmlFor='comments' className='form-label'>
          Message
        </label>
        <textarea
          id='comments'
          className='form-control'
          rows='4'
          placeholder="Write anything else you'd like us to know..."
          {...register('comments')}
        />
      </div>
    </div>
  );
};

export default Comments;
