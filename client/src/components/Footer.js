import React from 'react';
import { Container } from 'reactstrap';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <p className="text-muted">&copy; 2018 <a href="http://shanefairweather.com">Shane Fairweather</a></p>
            </Container>
        </footer>
    )
}

export default Footer;