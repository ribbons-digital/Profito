import { Link } from 'gatsby'
import React from 'react'
import logoWhite from '../img/logo_white.svg'
import twitter from '../img/social/twitter.svg'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logoWhite}
            alt="profito"
            style={{ width: '14em', height: '2.5em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/privacy">
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/support">
                        Support
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
              </div>
              <div className="column is-4 social">
                <a title="twitter" href="https://twitter.com/Profito7">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
            <div style={{ paddingBottom: '1em' }}>
              © 2020 Ribbons Digital Pty Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
