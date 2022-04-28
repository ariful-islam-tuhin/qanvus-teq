import React from 'react';
import { Container } from 'react-bootstrap';

// import Slick from '../../Component/Slick/Slick';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <section>
        <Container fluid className="home-section" id="home">       
            <Banner/>  
            {/* <Particle />                */}
            {/* <Slick></Slick> */}
            <br />
           </Container>
         
        </section>
    );
};

export default Home;