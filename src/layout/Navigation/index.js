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
        <section className="container navbar">
          <h5 className="brand">
            <Link to="/">
              <span role="img" aria-label="New Moon Face">🌚</span>
              <span className="brand__blue"> Dwi </span>
              <span className="brand__dark">Nugroho</span>
            </Link>
          </h5>
          <section className="menu">
            <Link className="menu__item" to="/">
              <span role="img" aria-label="Page with Curl">📃</span> Articles
            </Link>
            <Link className="menu__item" to="/">
              <span role="img" aria-label="Cat Face">🐱</span> About Me
            </Link>
            <Link className="menu__item" to="/">
              <span role="img" aria-label="Card Index">📇</span> Contact
            </Link>
          </section>
        </section>
      </nav>
    );
  };
};
