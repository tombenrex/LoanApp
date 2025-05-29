import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PersonalInfo from './PersonalInfo';
import EmploymentInfo from './EmploymentInfo';
import LoanDetails from './LoanDetails';
import Comments from './Comments';
import Confirmation from './Confirmation';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^\+?\d{10,15}$/, 'Phone number must be 10-15 digits'),
  age: yup
    .number()
    .typeError('Age must be a number')
    .required('Age is required')
    .positive()
    .integer()
    .min(18, 'Must be at least 18')
    .max(100, 'Age cannot exceed 100'),
  salary: yup.string().required('Salary selection is required'),
  amount: yup
    .number()
    .typeError('Loan amount must be a number')
    .required('Loan amount is required')
    .positive('Loan amount must be positive')
    .max(1000000, 'Loan amount cannot exceed $1,000,000'),
  purpose: yup.string().required('Loan purpose is required'),
  years: yup
    .number()
    .typeError('Repayment time must be a number')
    .required('Repayment time is required')
    .positive('Repayment time must be positive')
    .integer('Repayment time must be an integer')
    .min(1, 'Repayment time must be at least 1 year')
    .max(30, 'Repayment time cannot exceed 30 years'),
});

const LoanForm = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      name: '',
      phone: '',
      age: '',
      employed: false,
      salary: '',
      amount: '',
      purpose: '',
      years: '',
      comments: '',
    },
  });

  const {
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitSuccessful },
  } = methods;

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('loanForm');
      if (saved) {
        reset(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Failed to load saved form data:', error);
      localStorage.removeItem('loanForm');
    }
  }, [reset]);

  useEffect(() => {
    let timeout;
    const subscription = watch((values) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        try {
          localStorage.setItem('loanForm', JSON.stringify(values));
        } catch (error) {
          console.error('Failed to save form data:', error);
        }
      }, 500);
    });
    return () => {
      clearTimeout(timeout);
      subscription.unsubscribe();
    };
  }, [watch]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Application submitted:', data);
      setSubmitted(true);
      localStorage.removeItem('loanForm');
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit application. Please try again.');
      console.log('Application submitted:', data);
    } finally {
      setLoading(false);
    }
  };

  const handleNewApplication = () => {
    setSubmitted(false);
    reset({
      name: '',
      phone: '',
      age: '',
      employed: false,
      salary: '',
      amount: '',
      purpose: '',
      years: '',
      comments: '',
    });
    localStorage.removeItem('loanForm');
  };

  if (submitted && isSubmitSuccessful) {
    return <Confirmation onNewApplication={handleNewApplication} />;
  }

  return (
    <div className='container mt-5 mb-5'>
      <div className='card shadow-lg p-4'>
        <div className='text-start'>
          <Link to='/' type='button' className='btn btn-primary'>
            Back
          </Link>
        </div>
        <h2 className='text-center mb-4'>Loan Application</h2>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PersonalInfo />
            <EmploymentInfo />
            <LoanDetails />
            <Comments />

            <div className='d-grid'>
              <button
                type='submit'
                className='btn btn-primary mb-2'
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className='spinner-border spinner-border-sm me-2'
                      role='status'
                      aria-hidden='true'
                    ></span>
                    Sending...
                  </>
                ) : (
                  'Send Application'
                )}
              </button>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={() => {
                  reset();
                  localStorage.removeItem('loanForm');
                }}
                disabled={loading}
              >
                Clear Form
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default LoanForm;
