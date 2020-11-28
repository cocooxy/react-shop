import React from 'react';
import ToolBox from 'components/ToolBox'
import Product from 'components/Product';


class Products extends React.Component {
    state = {  }
    product=[
    {
        name:'Nike Paul George PG 3',
        tag:'25 Colors',
        image:'images/2.jpg',
        price:0,
    },
    {
        name:'Nike Paul George PG 3',
        tag:'25 Colors',
        image:'images/1.jpg',
        price:0,
    },
   ];
    render() { 
        return ( 
            <div className="products">
                <ToolBox />
                <div className="columns is-multiline is-desktop">
                    {
                        this.product.map(p=>{
                            return(
                                <div className="column is-3">
                                    <Product product={p}></Product>
                                </div>                                
                            )
                        })
                    }

                    </div>
            </div>
         );
    }
}
 
export default Products;