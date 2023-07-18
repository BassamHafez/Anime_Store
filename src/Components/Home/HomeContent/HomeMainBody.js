import React ,{Fragment} from 'react'
import style from './HomeMainBody.module.css';
import Button from '../../UI/Button.js';
import DBZ from '../../../images/original-DB-091211.webp';
import attack_on_titans from '../../../images/original-attack_on_titans-091308.webp';
import avatar from '../../../images/original-avatar-092709.webp';
import demonslayer from '../../../images/original-demonslayer-091843.webp';
import evan from '../../../images/original-evan-093828.webp';
import fullmetal from '../../../images/original-fullmetal-091505.webp';
import my_hero_acedm from '../../../images/original-my_hero_acedm-092946.webp';
import naruto from '../../../images/original-naruto-091603.webp';
import pokemon from '../../../images/original-pokemon-091739.webp';
import sailormoon from '../../../images/original-sailormoon-092804.webp';
import yugioh from '../../../images/original-yugioh-092427.webp';
import shopall from '../../../images/original-shopall-094210.webp';
import mystery_bronze from '../../../images/mystery-box-bronze-771.webp';
import mystery_silver from '../../../images/mystery-box-silver-570.webp';
import mystery_gold from '../../../images/mystery-box-gold-185.webp';
import mystery_platinum from '../../../images/mystery-box-platinum-670.webp';

const HomeMainBody = () => {
  return (
    <Fragment>
        <section className='my-5'>
            <div className='container-fluid'>
                <div className='row'>
                    <div  className={`${style.categort_type} col-md-2`}>
                        <img src={DBZ} className='w-100' alt='category_type'/>
                    </div>
                    <div  className={`${style.categort_type} col-md-2`}>
                        <img src={attack_on_titans} className='w-100' alt='category_type'/>
                    </div>
                    <div  className={`${style.categort_type} col-md-2`}>
                        <img src={demonslayer} className='w-100' alt='category_type'/>
                    </div>
                    <div  className={`${style.categort_type} col-md-2`}>
                        <img src={avatar} className='w-100' alt='category_type'/>
                    </div>
                    <div  className={`${style.categort_type} col-md-2`}>
                        <img src={evan} className='w-100' alt='category_type'/>
                    </div>
                    <div  className={`${style.categort_type} col-md-2`}>
                        <img src={fullmetal} className='w-100' alt='category_type'/>
                    </div>
                    <div  className={`${style.categort_type} col-md-2`}>
                        <img src={my_hero_acedm} className='w-100' alt='category_type'/>
                    </div>
                    <div  className={`${style.categort_type} col-md-2`}>
                        <img src={naruto} className='w-100' alt='category_type'/>
                    </div>
                    <div  className={`${style.categort_type} col-md-2`}>
                        <img src={sailormoon} className='w-100' alt='category_type'/>
                    </div>
                    <div  className={`${style.categort_type} col-md-2`}>
                        <img src={pokemon} className='w-100' alt='category_type'/>
                    </div>
                    <div  className={`${style.categort_type} col-md-2`}>
                        <img src={yugioh} className='w-100' alt='category_type'/>
                    </div>
                    <div  className={`${style.categort_type} col-md-2`}>
                        <img src={shopall} className='w-100' alt='category_type'/>
                    </div>
                </div>
            </div>
        </section>

        <section className='my-5'>
            <h2 className={`${style.home_title} my-5 ms-2`}>DISCOVER OUR MYSTERY BOX</h2>
            <div className='container'>
                <div className='row'>
                    <div className={`${style.mystery_box} col-md-3`}>
                        <img src={mystery_bronze} className='w-100' alt='mystery-box'/>
                    </div>
                    <div className={`${style.mystery_box} col-md-3`}>
                        <img src={mystery_silver} className='w-100' alt='mystery-box'/>
                    </div>
                    <div className={`${style.mystery_box} col-md-3`}>
                        <img src={mystery_gold} className='w-100' alt='mystery-box'/>
                    </div>
                    <div className={`${style.mystery_box} col-md-3`}>
                        <img src={mystery_platinum} className='w-100' alt='mystery-box'/>
                    </div>
                </div>
            </div>
            <div className='text-center my-5'>
                <Button name='View All'/>
            </div>
        </section>
    </Fragment>
  )
}

export default HomeMainBody
