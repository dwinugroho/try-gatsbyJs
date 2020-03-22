import { Link } from "gatsby";
import React, { Component } from "react";

export default class Navigation extends Component {

  state = {
    scrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  render() {
    return (
      <nav className={this.state.scrolled ? 'nav nav--scrolled' : 'nav'}>
        <section className="container">
          <h1 className="brand">
            <Link to="/">
              <span className="brand__blue">Dwi </span>
              <span className="brand__dark">Nugroho</span>
            </Link>
          </h1>
        </section>
      </nav>
    );
  };
};
