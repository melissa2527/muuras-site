import React, {useState, useEffect} from 'react';
import './components/QApage/qa.scss';
import translate from '../i18n/translate';
import './components/QApage/qa.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import greenwall from './img/greenwall2.jpg'
// import greenwall2 from '../../../public/img/greenwall3.jpg'



const QAPage = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);

    useEffect(() => {
        document.title = 'Muuras - Our Team';
        Aos.init({duration: 1500});
        Aos.refresh({duration: 1500});
    }, [])

    return (
        <div className='qapage-container'>
            <h1>Q & A</h1>
            {/* <div>{translate('fandq.items', {returnObjects: true}).map(({question, answer}) => 
                    <div>
                        <h3>{question}</h3>
                        <h4>{answer}</h4>
                    </div>
            )}</div> */}
            <div className='qa-container' data-aos='fade-up'>
                <div className='qa-section'>
                    <div className='section-text'>
                        <div>
                            <p className='question'>{translate('fandq.1.question')}</p>
                            <p>Answer: <KeyboardArrowDownIcon onClick={() => setShow(!show)}/></p>
                            {show && <p>{translate('fandq.1.answer')}</p>}
                        </div>
                        
                        <div>
                            <p className='question'>{translate('fandq.2.question')}</p>
                            <p>Answer: <KeyboardArrowDownIcon onClick={() => setShow2(!show2)}/></p>
                            {show2 && <p>{translate('fandq.2.answer')}</p>}
                        </div>
                    </div>
                    <div className='section-picture'>
                        <img className='qa-picture' src='/img/greenwall3.jpg' alt='Green Wall' />
                    </div>
                </div>

                <div>
                <div className='qa-section'>
                    <div className='section-text'>
                        <div>
                            <p className='question'>{translate('fandq.3.question')}</p>
                            <p>Answer: <KeyboardArrowDownIcon onClick={() => setShow3(!show3)}/></p>
                            {show3 && <><p>{translate('fandq.3.answer')}</p>
                            <p className='bold'>{translate('fandq.3.1.title')}</p>
                            <p>{translate('fandq.3.1.description')}</p>
                            <p className='bold'>{translate('fandq.3.2.title')}</p>
                            <p>{translate('fandq.3.2.description')}</p>
                            <p className='bold'>{translate('fandq.3.3.title')}</p>
                            <p>{translate('fandq.3.3.description')}</p>
                            <p className='bold'>{translate('fandq.3.4.title')}</p>
                            <p>{translate('fandq.3.4.description')}</p>
                            </>}
                        </div>

                        <div>
                            <p className='question'>{translate('fandq.4.question')}</p>
                            <p>Answer: <KeyboardArrowDownIcon onClick={() => setShow4(!show4)}/></p>
                            {show4 && <p>{translate('fandq.4.answer')}</p>}
                        </div>

                        <div>
                            <p className='question'>{translate('fandq.5.question')}</p>
                            <p>Answer: <KeyboardArrowDownIcon onClick={() => setShow5(!show5)}/></p>
                            {show5 && <p>{translate('fandq.5.answer')}</p>}
                        </div>
                    </div>
                    <div className='section-picture'>
                        <img className='qa-picture' src='/img/drawing.png' alt='Drawing of design'/>
                    </div>
                </div>

                <div className='qa-section'>
                    <div className='section-text'>
                        <div>
                            <p className='question'>{translate('fandq.6.question')}</p>
                            <p>Answer: <KeyboardArrowDownIcon onClick={() => setShow6(!show6)}/></p>
                            {show6 && <p>{translate('fandq.6.answer')}</p>}
                        </div>
                        
                        <div>
                            <p className='question'>{translate('fandq.7.question')}</p>
                            <p>Answer: <KeyboardArrowDownIcon onClick={() => setShow7(!show7)}/></p>
                            {show7 && <p>{translate('fandq.7.answer')}</p>}
                        </div>

                        <div>
                            <p className='question'>{translate('fandq.8.question')}</p>
                            <p>Answer: <KeyboardArrowDownIcon onClick={() => setShow8(!show8)}/></p>
                            {show8 && <p>{translate('fandq.8.answer')}</p>}
                        </div>

                        <div>
                            <p className='question'>{translate('fandq.9.question')}</p>
                            <p>Answer: <KeyboardArrowDownIcon onClick={() => setShow9(!show9)}/></p>
                            {show9 && <p>{translate('fandq.9.answer')}</p>}
                        </div>
                    </div>
                    <div className='section-picture'>
                        <img className='qa-picture' src='/img/greenwall2.jpg' alt='Greenwall' />
                    </div>
                </div>

                <div className='qa-section'>
                    <div className='section-text'>
                        <div>
                            <p className='question'>{translate('fandq.10.question')}</p>
                            <p>Answer: <KeyboardArrowDownIcon onClick={() => setShow10(!show10)}/></p>
                            {show10 && <p>{translate('fandq.10.answer')}</p>}
                        </div>

                        <div>
                            <p className='question'>{translate('fandq.11.question')}</p>
                            <p>Answer: <KeyboardArrowDownIcon onClick={() => setShow11(!show11)}/></p>
                            {show11 && <p>{translate('fandq.11.answer')}</p>}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default QAPage

// {translate('menu.qa')}