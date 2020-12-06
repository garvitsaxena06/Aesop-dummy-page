import React, { Component } from 'react'
import Navbar from './components/Navbar'
import logo from './assets/img/Aesop.webp'
import product1 from './assets/img/product1.webp'
import product2 from './assets/img/product2.webp'
import product3 from './assets/img/product3.webp'
import product4 from './assets/img/product4.webp'
import quoteImg from './assets/img/quote.webp'
import Footer from './components/Footer'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ChatBtn from './components/ChatBtn'
import AOS from 'aos';
import "aos/dist/aos.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    }
  }

  componentDidMount() {
    AOS.init({
      duration : 2000
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
      
        <main>
          <section id="product-desc" className="section">
            <div className="container-fluid">
              <div className="row">
                
                <div className="col-lg-8" data-aos="fade-left">
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
                  <div className="product-info" data-aos="fade-down">
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
  
          <section data-aos="zoom-in-up" data-aos-duration="1000" id="consultation" className="section">
            <div className="container-fluid text-center">
              <a href="/#">
                <h6 className="underline">Book a video consultation</h6>
                <p>For assistance selecting the perfect gift, speak to one of our trained consultant</p>
              </a>
            </div>
          </section>
  
          <section id="howtouse" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="250" data-aos-offset="0" className="section">
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

          <section id="carousel-section" data-aos="zoom-in" data-aos-duration="3500" className="section">
            <div className="container-fluid">
              <div className="row">

                <OwlCarousel
                  className="owl-theme"
                  autoplay={false}
                  autoplayTimeout={3000}
                  center={false}
                  items={2}
                  responsive={this.state.responsive}
                  nav
                >
                
                  <div className="item d-flex">
                    <div className="mx-auto">
                      <h5 className="mb-3">Accompany with</h5>
                      <p>Polish skin twice weekly with Geranium Leaf Body Scrub. To replenish moisture and deeply nourish skin, blend Geranium Leaf Hydrating Body Treatment with Geranium Leaf Body Balm. Geranium Leaf Body Cleanser and Balm are available paired in Geranium Leaf Duet.</p>
                    </div>
                  </div>
                  
                  <div className="item d-flex">
                    <div className="mx-auto">
                      <a href="/#">
                        <div className="d-flex align-items-end">
                          <img src={product2} alt="Product second"/>
                        </div>
                        <h6>Geranium Leaf Body Srub</h6>
                        <p className="text-center">Leaves skin feeling fresh, smooth and soft</p>
                      </a>
                    </div>
                  </div>

                  <div className="item d-flex">
                    <div className="mx-auto">
                      <a href="/#">
                        <div className="d-flex align-items-end">
                          <img src={product3} alt="Product third"/>
                        </div>
                        <h6>Geranium Leaf Body Balm</h6>
                        <p className="text-center">Refreshingly aromatic, fresh and green</p>
                      </a>
                    </div>
                  </div>

                  <div className="item d-flex">
                    <div className="mx-auto">
                      <a href="/#">
                        <div className="d-flex align-items-end">
                          <img src={product1} alt="Product fourth"/>
                        </div>
                        <h6>Geranium Leaf Body Cleanser</h6>
                        <p className="text-center">A gentle, invigorating gel cleanser</p>
                      </a>
                    </div>
                  </div>

                  <div className="item d-flex">
                    <div className="mx-auto">
                      <a href="/#">
                        <div className="d-flex align-items-end">
                          <img src={product4} alt="Product second"/>
                        </div>
                        <h6>Geranium Leaf Duet</h6>
                        <p className="text-center">A gentle cleanser and aromatic balm</p>
                      </a>
                    </div>
                  </div>
                
                </OwlCarousel>

              </div>
            </div>
          </section>
  
          <Footer />
        </main>

        <ChatBtn />
      </React.Fragment>
    );
  }
}

export default App;
