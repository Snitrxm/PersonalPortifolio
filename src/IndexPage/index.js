import './style.css'
import ProfilePic from '../images/profile.png'
import CV from '../cv.pdf'
import { Fragment } from 'react'


import { BsGithub, BsLinkedin, BsInstagram, BsDownload, BsWhatsapp, BsMessenger } from 'react-icons/bs'

const Index = () => {
    return (
        <header className='header'>
            <div className='containerHeader'>
                <div className='imgDiv'>
                    <img src={ProfilePic} alt='Profile'></img>
                </div>
                <div className='textsBottomImage'>
                    <h2>André Rocha</h2>
                    <p>Web Developer</p>
                </div>
                <div className='socialIcons'>
                    <a>{<BsGithub/>}</a>
                    <a>{<BsLinkedin/>}</a>
                    <a>{<BsInstagram/>}</a>
                </div>
            </div>
            <div className='container'>
                <div className='personalInfos'>
                        <div className='firstInfo'>
                            <h3>1</h3>
                            <p>Years of<br/> study</p>
                        </div>
                        <div className='secondInfo'>
                            <h3>+14</h3>
                            <p>Personal<br/> Projects</p>
                        </div>
                        <div className='thirdInfo'>
                            <h3>+10</h3>
                            <p>Knowledge of<br/>technologies</p>
                        </div>
                    </div>
                    <div className='cvAndContactButtons'>
                        <a href={CV} download="AndreCV"><button className='cvButton'>Download CV<span><BsDownload/></span></button></a>
                        <div className='contactButtons'>
                            <a href="https://api.whatsapp.com/send?phone=5512988791216"><button>{<BsWhatsapp/>}</button></a>
                            <a href=""><button>{<BsMessenger/>}</button></a>
                        </div>
                    </div>
                    <div className='buttonOfProjects'>
                        <button>Projects</button>
                        <button>Skils</button>
                    </div>
            </div>
        </header>      
    );   
}

export default Index;