import React from 'react';
import {Container} from "mdbreact";

//import Footer from './Footer.css'

class Footer1 extends React.Component {
  render() {
    return (
      <footer className="footer text-center">
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright Cloud Gang {" "}
            <p>Mitch Avery, Charles Leon, Anthony Minaise, Joseph Koury </p>
          </Container>
        </div>
      </footer>
    );
  }
}

export default Footer1; 

