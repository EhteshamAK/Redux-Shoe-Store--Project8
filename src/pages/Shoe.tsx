import React from 'react';
import { useDispatch } from 'react-redux';
import './Shoe.css';
// import photo from '../images/2000.jpg'
// import black from '../images/black.jpg'
// import red from '../images/red.jpg'
// import loffers from '../images/loffers.jpg'
// import brown from '../images/brown.jpg'
// import nike from '../images/nike.jpg'
// import yellow from '../images/yellow.jpg'
import { products } from '../products';
import { addProductToCart } from '../actions/cartActions';

const Shoe = () => {
   const dispatch = useDispatch();
   const addToCart = (product: any) => {
      dispatch(addProductToCart(product));
   }

   return (
      <section className="shoe">
         {products.map((product: any) => {
            const { id, name, price, image } = product;
            return (
               <article key={id} id="article">
                  <img src={image} alt="" id="photo" />
                  <div className="article__details">
                     <h2>{name}</h2>
                     <h5>{price}</h5>
                     <button onClick={() => addToCart(product)}>Add to Cart </button>
                  </div>

               </article>
            );
         })
         }

      </section>
   )
}

export default Shoe
