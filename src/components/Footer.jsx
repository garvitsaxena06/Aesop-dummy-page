import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

class Footer extends Component {
    constructor() {
        super()
        this.state = {
            validated: false,
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            let email = this.state.email
            console.log(email)
        }
        this.setState({
            validated: true
        })
    };

    handleChange = (event) => {
        this.setState({
            email: event.target.value
        })
    };

    render() {
        return (
            <React.Fragment>
                <footer id="footer">
                    <div className="footer-content">
                        <div className="row">

                            <div className="col-lg-5 mt-3">
                                <div className="email-box mt-3">
                                    <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                                        <Form.Row>
                                            <div className="col-sm-11">
                                                <Form.Control type="email" className="input-field" placeholder="Email Address" value={this.state.email} onChange={this.handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter valid email
                                                </Form.Control.Feedback>
                                            </div>
                                            <div className="col-sm-1">
                                                <button type="submit" className="submit-btn"><i className="fas fa-arrow-right"></i></button>
                                            </div>
                                        </Form.Row>
                                    </Form>
                                </div>
                                <p className="mt-3">Subscribe to receive communications about Aesop products, services, stores, events and matters of cultural interest.</p>
                            </div>

                            <div className="col-lg-2 col-md-3 mt-3">
                                <h6 className="heading">Orders and support</h6>
                                <ul>
                                    <li><a href="/#">Contact us <i className="fas fa-external-link-alt"></i></a></li>
                                    <li><a href="/#">FAQs <i className="fas fa-external-link-alt"></i></a></li>
                                    <li><a href="/#">Delivery and returns <i className="fas fa-external-link-alt"></i></a></li>
                                    <li><a href="/#">Terms and conditions</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-3 mt-3">
                                <h6 className="heading">Services</h6>
                                <ul>
                                    <li><a href="/#">Live assistance</a></li>
                                    <li><a href="/#">Corporate gifts</a></li>
                                    <li><a href="/#">Facial appointments</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-3 mt-3">
                                <h6 className="heading">Location preferences</h6>
                                <ul>
                                    <li>Shipping: <a href="/#"><u>Hong Kong (S.A.R)</u></a></li>
                                    <li>Language: <a href="/#"><u>EN</u></a></li>
                                </ul>
                            </div>

                            <div className="col-lg-5 mt-3">
                                <h6 className="heading">Sustainability</h6>
                                <ul>
                                    <li>
                                        All Aesop products are vegan, and we do not test our formulations or ingredients on animals. 
                                        We are Leaping Bunny approved and a Certified B Corporation. 
                                        <a href="/#"> Learn about our rinse and return programme</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-3 mt-3">
                                <h6 className="heading">About</h6>
                                <ul>
                                    <li><a href="/#">Our story</a></li>
                                    <li><a href="/#">Foundation <i className="fas fa-external-link-alt"></i></a></li>
                                    <li><a href="/#">Careers</a></li>
                                    <li><a href="/#">Privacy policy</a></li>
                                    <li><a href="/#">Accessibility</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-3 mt-3">
                                <h6 className="heading">Social media</h6>
                                <ul>
                                    <li><a href="/#">Instagram <i className="fas fa-external-link-alt"></i></a></li>
                                    <li><a href="/#">Twitter <i className="fas fa-external-link-alt"></i></a></li>
                                    <li><a href="/#">LinkedIn <i className="fas fa-external-link-alt"></i></a></li>
                                    <li><a href="/#">WeChat</a></li>
                                    <li><a href="/#">Weibo</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <hr style={{ background: '#fffef2', height: '1px', width: '100%' }}/>
                    
                    <div className="footer-content pt-1 pb-4">
                        <h5>© Aesop</h5>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;
