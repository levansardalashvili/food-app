import React from 'react';
import Productbox from './Productbox';
import image1 from '../Images/1.jpg';
import image2 from '../Images/2.jpg';
import image3 from '../Images/3.jpg';

function Product() {
    return (
        <div id='products'>
            <h1>CHOOSE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nihil modi facilis
             possimus ea doloremque, quia accusamusmaxime dicta quod harum asperiores debitis ex 
             quasi veritatis, sint consequuntur cupiditate impedit.</p>
             <div className="a-container">
                 <Productbox image={image1} tite="khinkali" />
                 <Productbox image={image2} tite="khinkali" />
                 <Productbox image={image3} tite="khinkali" />
             </div>
        </div>
    );
};

export default Product;
