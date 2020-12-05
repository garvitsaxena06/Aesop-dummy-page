import React, { Component } from 'react'
import { withGetScreen } from 'react-getscreen'
import $ from 'jquery'

class Navbar extends Component {
    componentDidMount() {

    }
    render() {
        if(this.props.isMobile()) {
            return (
                <React.Fragment>
                    <section id="banner" className="d-flex align-items-center">
                        <div className="container">
                            <div className="mx-auto">
                                <span>Enjoy complimentary standard shipping on all orders. <i className="fas fa-plus"></i></span>
                            </div>
                        </div>
                    </section>
                   
                    
                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                    <section id="banner" className="d-flex align-items-center">
                        <div className="container">
                            <div className="mx-auto">
                                <span>Enjoy complimentary standard shipping on all orders. <i className="fas fa-plus"></i></span>
                            </div>
                        </div>
                    </section>

                    <nav>
                        <div class="container">
                            <a href="/#" id="brand">Brand</a>
                            <button>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            
                            <ul class="navbar-menu">
                                <li><a href="/#">Home</a></li>
                                <li><a href="/#">page a</a></li>
                                <li><a href="/#">page b</a></li>
                                <li><a href="/#">page c</a></li>
                                <li><a href="/#">page d</a></li>
                            </ul>
                            
                        </div>
                    </nav>
                    
                </React.Fragment>
            )
        }
    }
}

export default withGetScreen(Navbar);
