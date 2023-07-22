import React from 'react';
import MainTitle from '../../UI/MainTitle';
import f1 from '../../../images/loffy.jpg';
import f11 from '../../../images/loffy_2.png';
import f2 from '../../../images/joy_boy.jpg';
import f22 from '../../../images/joy_boy_2.png';
import f3 from '../../../images/Kilwa.png';
import f33 from '../../../images/kilwa_2.png';
import f4 from '../../../images/naruto f.jpg';
import f44 from '../../../images/naruto f2.jpg';
 import b1 from '../../../images/BTS.jpg';
 import b2 from '../../../images/egy.jpg';
import b3 from '../../../images/attack.jpg';
import b33 from '../../../images/attack2.jpg';
import b4 from '../../../images/naroto.jpg';
import b5 from '../../../images/one_piece_bag.jpg';
import b55 from '../../../images/one_piece_bag2.jpg';
import b6 from '../../../images/tokyo_bag.jpg';
import t1 from'../../../images/naro_t.jpg';
import t11 from '../../../images/naro_t2.jpg';
import t2 from '../../../images/demon_t.jpg';
import t22 from'../../../images/demon_t2.jpg';
import st1 from '../../../images/att_st.jpg';
import st11 from '../../../images/attack_st2.jpg';
import st2 from '../../../images/spy x family_st.jpg';
import st22 from '../../../images/spy x family_st2.jpg';
import one_box from '../../../images/one piece box set.jpg';
import hun_box from '../../../images/hunter box set.jpg';
import att_box from '../../../images/att box set.jpg';
import ProductItem from './ProductItem';

const  DUMMY_PRODUCTS = [
    // figures
    {
        id:'f1',
        name:'Joy Boy',
        price:20,
        src_one:f1,
        src_two:f11,
        new:true
    },
    {
        id:'f2',
        name:'Luffy joy_boy',
        price:35,
        src_one:f2,
        src_two:f22,
        new:false
    },
    {
        id:'f3',
        name:'Kilwa Figure',
        price:24,
        src_one:f3,
        src_two:f33,
        new:false
    },
    {
        id:'f4',
        name:'Death Note',
        price:16,
        src_one:f44,
        src_two:f4,
        new:false
    }, 
  
    // bags
    {
        id:'b1',
        name:'BTS Bag',
        price:15,
        src_one:b1,
        src_two:'',
        new:false
    },
    {
        id:'b2',
        name:'Yogi Bag',
        price:15,
        src_one:b2,
        src_two:'',
        new:true
    },  

    {
        id:'b4',
        name:'Naruto Bag',
        price:10,
        src_one:b4,
        src_two:'',
        new:false
    },
    {
        id:'b5',
        name:'One Piece Bag',
        price:22,
        src_one:b5,
        src_two:b55,
        new:true
    },
    {
        id:'b6',
        name:'Tokyo Bag',
        price:19,
        src_one:b6,
        src_two:'',
        new:true
    },

    // t-shirt
    {
        id:'t1',
        name:'naruto T-Shirt',
        price:39,
        src_one:t1,
        src_two:t11,
        new:false
    },
    {
        id:'t2',
        name:'Demon_slayer T-Shirt',
        price:40,
        src_one:t2,
        src_two:t22,
        new:true
    },

    // stickers

    {
        id:'st1',
        name:'Attack On Titan Stickers',
        price:30,
        src_one:st1,
        src_two:st11,
        new:true
    },
    {
        id:'st2',
        name:'Spy X Family Stickers',
        price:35,
        src_one:st2,
        src_two:st22,
        new:true
    },
   // other

    {
        id:'b3',
        name:'Attack On Titan',
        price:20,
        src_one:b3,
        src_two:b33,
        new:true
    },
    {
        id:'o1',
        name:'one piece box set',
        price:100,
        src_one:one_box,
        src_two:'',
        new:true
    },
    {
        id:'o2',
        name:'Attack On Titan box set',
        price:120,
        src_one:att_box,
        src_two:'',
        new:true
    },
    {
        id:'o3',
        name:'hunter box set',
        price:100,
        src_one:hun_box,
        src_two:'',
        new:false
    },
];

const Items =()=>{

const products =DUMMY_PRODUCTS.map((product)=>
    <ProductItem key={product.id} id={product.id} product={product}/>
    )

return(
    <section>
        <MainTitle name='Discover our products'/>
        <div className='container-fluid'>
            <div className='row'>
                {products}
            </div>
        </div>
    </section>
);


};

export default Items;