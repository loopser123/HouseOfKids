
import React from 'react';
import {Product} from "../model/Product";
import {ProductCard} from "./ProductCard";

export interface Selection {
    products:Product[];
}
interface Props extends Selection {

}


export const ProductsList : React.FC<Props> = (props)=>{

    const products  = props.products.map((p:Product)=><ProductCard
        key={p.id}
        price={p.price}
        name={p.name}
        image={p.image}/>);
    return (
        <>
            {products}
        </>
      );
}
