import React, {useEffect} from 'react';
import './swamp-section.scss';
import {Button} from '../../Button';
import {Link} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import translate from '../../i18n/translate';

export const SwampSection = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
        Aos.refresh({duration: 1500});
    }, []) 

    return (
        <div className='swamp-container'>
            <h2 data-aos='fade-left'>{translate('swamp.title')}</h2>
            
            <div className='swamp-info'>
                <div className='swamp-text'>
                    <p>{translate('swamp.description')}</p>
                    <div className='btn-container'>
                        <Link to='/vertical-swamp'>
                        <Button
                            className='btn'
                            buttonStyle='btn--outline'
                            buttonSize='btn--lge'>
                            Learn More
                        </Button>
                        </Link>
                    </div>
                </div>
                <div className='swamp-img'>
                    <img src='./img/muuras-building.jpg' alt='Muuras building'/>
                </div>
            </div>
        </div>
    )
}