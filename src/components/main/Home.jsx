// import { Link } from 'react-router-dom';

// export default function Home() {
//   return (
//     <div className='container mt-5 text-center'>
//       <h1>Välkommen till LoanApp</h1>
//       <p>
//         Fyll i vårt låneformulär för att ansöka om ett lån snabbt och enkelt.
//       </p>
//       <Link to='/loan' className='btn btn-primary btn-lg'>
//         Gå till låneformuläret
//       </Link>
//     </div>
//   );
// }

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      {/* Hero Section */}
      <section className='bg-light py-5'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6 text-center text-md-start'>
              <h1 className='display-4 fw-bold mb-3'>
                Välkommen till Vår Bank
              </h1>
              <p className='lead mb-4'>
                Ansök om lån, spara för framtiden eller investera med oss. Vi
                gör din ekonomi enkel och trygg.
              </p>
              <Link to='/loan' className='btn btn-primary btn-lg'>
                Ansök om lån nu
              </Link>
            </div>
            <div className='col-md-6 d-none d-md-block'>
              <img
                src='/img/bank.jpg'
                alt='Bank Services'
                className='img-fluid rounded'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-5'>
        <div className='container'>
          <h2 className='text-center mb-5'>Våra tjänster</h2>
          <div className='row g-4'>
            <div className='col-md-4'>
              <div className='card h-100 shadow-sm text-center'>
                <div className='card-body'>
                  <i className='bi bi-piggy-bank fs-1 mb-3 text-primary'></i>
                  <h5 className='card-title'>Lån</h5>
                  <p className='card-text'>
                    Flexibla lån för dina behov, med konkurrenskraftiga räntor.
                  </p>
                  <Link to='/loan' className='btn btn-outline-primary'>
                    Läs mer
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card h-100 shadow-sm text-center'>
                <div className='card-body'>
                  <i className='bi bi-wallet2 fs-1 mb-3 text-primary'></i>
                  <h5 className='card-title'>Sparande</h5>
                  <p className='card-text'>
                    Spara tryggt och bygg din framtid med våra sparkonton.
                  </p>
                  <a href='#' className='btn btn-outline-primary'>
                    Läs mer
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card h-100 shadow-sm text-center'>
                <div className='card-body'>
                  <i className='bi bi-graph-up fs-1 mb-3 text-primary'></i>
                  <h5 className='card-title'>Investeringar</h5>
                  <p className='card-text'>
                    Investera smart och låt dina pengar växa med oss.
                  </p>
                  <a href='#' className='btn btn-outline-primary'>
                    Läs mer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-dark text-white py-4 mt-auto'>
        <div className='container text-center'>
          <p className='mb-0'>
            &copy; 2025 Vår Bank. Alla rättigheter förbehållna.
          </p>
          <p>
            Kontakta oss:{' '}
            <a href='mailto:info@varbank.se' className='text-white'>
              info@varbank.se
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
