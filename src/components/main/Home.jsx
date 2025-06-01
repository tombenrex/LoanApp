import { Link } from 'react-router-dom';
import bankImg from '../../img/bank.jpg';

export default function Home() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <section className='py-5 bg-info-subtle'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6 text-center text-md-start'>
              <h1 className='display-4 fw-bold mb-3'>Welcome to our bank</h1>
              <p className='lead mb-4'>
                Apply for a loan, save for the future, or invest with us. We
                make your finances simple and secure.
              </p>
              <Link to='/loan' className='btn btn-primary btn-lg'>
                Apply for a loan
              </Link>
            </div>
            <div className='col-md-6 d-none d-md-block'>
              <img
                src={bankImg}
                alt='Bank Services'
                className='rounded img-fluid w-75'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-5'>
        <div className='container'>
          <h2 className='text-center mb-5'>Our Services</h2>
          <div className='row g-4'>
            <div className='col-md-4'>
              <div className='card h-100 shadow-sm text-center'>
                <div className='card-body d-flex justify-content-between flex-column'>
                  <h5 className='card-title'>Loan</h5>
                  <p className='card-text'>
                    Flexible loans tailored to your needs, with competitive
                    interest rates.
                  </p>
                  <Link to='/loan' className='btn btn-outline-primary'>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card h-100 shadow-sm text-center'>
                <div className='card-body d-flex justify-content-between flex-column'>
                  <h5 className='card-title'>Savings</h5>
                  <p className='card-text'>
                    Save securely and build your future with our savings
                    accounts.
                  </p>
                  <Link to='/loan' className='btn btn-outline-primary'>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card h-100 shadow-sm text-center'>
                <div className='card-body d-flex justify-content-between flex-column'>
                  <h5 className='card-title'>Investments</h5>
                  <p className='card-text'>
                    Invest smart and let your money grow with us.
                  </p>
                  <Link to='/loan' className='btn btn-outline-primary'>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className='bg-dark text-white py-4 mt-auto'>
        <div className='container text-center'>
          <p className='mb-0'>&copy; 2025 Our Bank | Do not apply to this</p>
          <p>
            Contact Us:{' '}
            <a href='mailto:info@varbank.se' className='text-white'>
              info@ourbank.se
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
