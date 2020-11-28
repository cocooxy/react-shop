import React from 'react';
import {formatePrice} from 'commons/helper'

class Product extends React.Component {
    state = {  }
    render() { 
        const {name , price,tag,image} = this.props.product;
        return ( 
            <div className="product">
                <div className="p-content">
                    <div className="img-wrapper">
                        <figure className="image is-4by3">
                            <img src={image} alt={name} srcset=""/>
                        </figure>
                        <p className="p-tags">{tag}</p>    
                        <p className="p-name">{name}</p>
                    </div>
                </div>
                <div className="p-footer">
                    <p className="price">{formatePrice(price)}</p>
                    <button className="add-cart">
                        <i className="fas fa-shopping-cart"></i>
                        <i className="fas fa-exclamation"></i>
                    </button>

                </div>
            </div>
         );
    }
}
 
export default Product;