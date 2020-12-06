import React, { Component } from 'react'
import { withGetScreen } from 'react-getscreen'
import classnames from "classnames";
import logo from '../assets/img/Aesop.webp'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true
        };
        // this.closeNav = this.closeNav.bind(this)
        // this.openNav = this.openNav.bind(this)
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
    
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
    };

    
    closeNav = () => {
        var close = document.getElementById('sidebar')
        close.style.width = '0'
    }

    openNav = () => {
        var open = document.getElementById('sidebar')
        open.style.width = '100%'
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
                   
                    <header id="headerMobile">
                        <div id="sidebar" className="sidenav">
                            <div className="d-flex">
                                <div className="mr-auto">
                                    <img src={logo} alt="Aesop logo"/>
                                </div>
                                <div className="mr-3">
                                    <a href="/#">Cart</a>
                                </div>
                                <div className="">
                                    <button className="" onClick={this.closeNav}><i className="fas fa-times fa-xs"></i></button>
                                </div>
                            </div>
                            <a href="/#">Skin</a>
                            <a href="/#">Hair</a>
                            <a href="/#">Body & Hand</a>
                            <a href="/#">Fragnance</a>
                            <a href="/#">Home</a>
                            <a href="/#">Kids & Travel</a>
                            <a href="/#">Gifts</a>

                            <div className="sub-links mt-4">
                                <a href="/#">Read</a>
                                <a href="/#">Stores</a>
                                <a href="/#" className="mt-4">Live Assistance <i className="fas fa-arrow-right"></i></a>
                            </div>

                            <div className="footer-links">
                                <div className="d-flex">
                                    <div className="mr-auto">
                                        <a href="/#">Login</a>
                                    </div>
                                    <div className="">
                                        <a href="/#">Search</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                        {
                            window.scrollY < 100 ? 
                            <nav
                                className={classnames("navbar", {
                                    "navbar--hidden": !this.state.visible
                                })}
                                >
                                <div>
                                    <a href="/#"><img src={logo} alt="Aesop logo"/></a>
                                </div>
                                <div className="ml-auto">
                                    <a href="/#">Cart</a>
                                    <button onClick={this.openNav} className="mr-2"><i className="fas fa-bars"></i></button>
                                </div>
                            </nav> :
                            <nav
                                className={classnames("navbarScroll", {
                                    "navbar--hidden": !this.state.visible
                                })}
                                >
                                <div>
                                    <a href="/#"><img src={logo} alt="Aesop logo"/></a>
                                </div>
                                <div className="ml-auto">
                                    <a href="/#cart">Cart</a>
                                    <button onClick={this.openNav} className="mr-2"><i className="fas fa-bars"></i></button>
                                </div>
                            </nav>
                        }
                        </div>
                    </header>
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
                    
                    <header id="header">
                        <div className="">
                        {
                            window.scrollY < 100 ? 
                            <nav
                                className={classnames("navbar", {
                                    "navbar--hidden": !this.state.visible
                                })}
                                >
                                <div>
                                    <a href="/#" className="underline">Shop</a>
                                    <a href="/#" className="underline">Read</a>
                                    <a href="/#" className="underline">Stores</a>
                                    <a href="/#" className="underline">Search</a>
                                </div>
                                <div className="ml-auto">
                                    <a href="/#" className="underline">Login</a>
                                    <a href="/#" className="underline">Cart</a>
                                </div>
                            </nav> :
                            <nav
                                className={classnames("navbarScroll", {
                                    "navbar--hidden": !this.state.visible
                                })}
                                >
                                <div>
                                    <a href="/#" className="underline">Shop</a>
                                    <a href="/#" className="underline">Read</a>
                                    <a href="/#" className="underline">Stores</a>
                                    <a href="/#" className="underline">Search</a>
                                </div>
                                <div className="ml-auto">
                                    <a href="/#" className="underline">Login</a>
                                    <a href="/#" className="underline">Cart</a>
                                </div>
                            </nav>
                        }
                        </div>
                    </header>
                </React.Fragment>
            )
        }
    }
}

export default withGetScreen(Navbar);
