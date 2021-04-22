import React, {useState} from 'react';
// import {Button} from '../../../Button';
import './navbar.scss';
// import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom'
import {useContext, useCallback} from 'react';
import {LOCALES} from '../../../i18n/constants';
import {AppContext} from '../../../Context';
import translate from '../../../i18n/translate';

const Header = () => {
    const {state, dispatch} = useContext(AppContext);

    const setLanguage = useCallback((locale) => {
        dispatch({
            type: 'setLocale',
            locale
        })
    }, [dispatch])

    const [clicked, setClicked] = useState(false);
    // const [button, setButton] = useState(true);

    const handleClick = () => {setClicked(!clicked)};
    const closeMenuMobile = () => setClicked(false);

    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false)
    //     } else {
    //         setButton(true)
    //     }
    // }

    // useEffect(() => {
    //     showButton();
    // }, []);

    // window.addEventListener('resize', showButton);

    const menu = {
        'home': 'https://muuras-test.netlify.app/',
        'about': 'https://muuras-test.netlify.app/about',
        'team': 'https://muuras-test.netlify.app/team',
        'contact': 'https://muuras-test.netlify.app/contact'
    }

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='logo-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMenuMobile}>
                        <img src='img/muuras.png' alt='' height={50}/>
                    </Link>
                </div>

                <div className='menu-icon' onClick={handleClick}>
                    <i id='bars-hover' className={clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link' onClick={closeMenuMobile}>
                            {translate('menu.home')}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-link' onClick={closeMenuMobile}>
                            {translate('menu.about')}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/team' className='nav-link' onClick={closeMenuMobile}>
                            {translate('menu.team')}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-link' onClick={closeMenuMobile}>
                            {translate('menu.contact')}
                        </Link>
                    </li>
                    {/* <div className='nav-flags'> */}
                    <li className='nav-flag'>
                        {state.locale === LOCALES.DUTCH ? <img src='./img/uk-flag.jpg' alt='english' className='flag' onClick={() => setLanguage(LOCALES.ENGLISH)} /> : null}
                        {state.locale === LOCALES.ENGLISH ?<img className='flag' src='./img/netherlands-flag.jpg' alt='dutch'  onClick={() => setLanguage(LOCALES.DUTCH)}/> : null}
                    
                      {/* <img src='./img/uk-flag.jpg' alt='english' className='flag' onClick={() => setLanguage(LOCALES.ENGLISH)} disabled={state.locale === LOCALES.ENGLISH} /> */}
                    {/* <img className='flag' src='./img/netherlands-flag.jpg' alt='dutch' disabled={state.locale === LOCALES.DUTCH} onClick={() => setLanguage(LOCALES.DUTCH)}/> */}
                    </li>
                    {/* </div> */}
                </ul>             
            </div>
        </nav>
    )
}

export default Header;
