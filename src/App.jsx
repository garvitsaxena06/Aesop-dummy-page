import React from 'react'
import Navbar from './components/Navbar'
import logo from './assets/img/Aesop.webp'
import product1 from './assets/img/product1.webp'
import quoteImg from './assets/img/quote.webp'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <Navbar />
    
      <main>
        <section id="product-desc" className="section">
          <div className="container-fluid">
            <div className="row">
              
              <div className="col-lg-8">
                <div className="d-flex flex-column">
                  <div className="">
                    <img width="100" className="main-logo" src={logo} alt="Aesop logo"/>
                  </div>
                  <div className="ml-auto">
                    <img src={product1} alt="Product"/>
                    <p>100mL</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="product-info">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/#" className="underline">Body & Hand</a></li>
                      <li className="breadcrumb-item"><a href="/#" className="underline">Body</a></li>
                    </ol>
                  </nav>
                  <h5>Geranium Leaf Hydrating Body Treatment</h5>
                  <p className="mt-4">A concentrated, invigorating blend of botanicals boosted with Vitamin E and skin-softening nut oils to nourish and revive dry skin.</p>
                  <hr style={{ background: '#333333', height: '1px', margin: '24px 0' }}/>
                  <div className="content">
                    <h6>Skin feel</h6>
                    <p>Hydrated, fresh, supple</p>
                    <hr/>
                    <h6>Aroma</h6>
                    <p>Green, citrus, fresh</p>
                    <hr/>
                    <h6>Key ingredients</h6>
                    <p>Geranium Leaf, Mandarin Rind, Bergamot Rind</p>
                  </div>
                  <button className="btn btn-block btn-secondary" disabled>Out of Stock - $240.00</button>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="consultation" className="section">
          <div className="container-fluid text-center">
            <a href="/#">
              <h6 className="underline">Book a video consultation</h6>
              <p>For assistance selecting the perfect gift, speak to one of our trained consultant</p>
            </a>
          </div>
        </section>

        <section id="howtouse" className="section">
          <div className="">
            <div className="row">

              <div className="col-lg-6 quote-img">
                <img src={quoteImg} alt="Quote background"/>
              </div>

              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <div className="description">
                    <h6>How to use</h6>
                    <h5>Massage into freshly cleansed skin, concentrating on dry areas such as elbows and knees. Blend with a preferred Aesop Body Balm for enriched hydration.</h5>
                    <hr style={{ background: '#333333', height: '1px', margin: '24px 0' }}/>
                    <div className="content">
                      <h6>Dosage</h6>
                      <p>One teaspoon</p>
                      <hr/>
                      <h6>Texture</h6>
                      <p>Medium-weight oil</p>
                      <hr/>
                      <h6>Blend with</h6>
                      <p>To intensify hydration, blend three to five drops with preferred Aesop hydrating balm.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </React.Fragment>
  );
}

export default App;
