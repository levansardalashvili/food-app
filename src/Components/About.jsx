import React from 'react';
import aboutimage from '../Images/about.jpg';

function About() {
    return (
        <div id='about'>
            <div className="about-text">
                <h1>KHINKALI</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tenetur officiis modi,
                 voluptatibus incidunt possimus, facilis provident optio eos temporibus vitae neque, natus
                 quibusdam. Libero amet rerum laborum tempore doloremque.</p>
                 <button> Read More </button>
            </div>

            <div className="about-image">
                <img src={aboutimage} alt='' />
            </div>
            
        </div>
    );
};

export default About;