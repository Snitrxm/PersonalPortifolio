import './style.css'
import ProfilePic from '../images/profile.png'
import CV from '../cv.pdf'
import FirstProject from '../images/todoapp.png'
import SecondProject from '../images/agendamento.png'
import ThirdProject from '../images/banco.png'
import FourthProject from '../images/advice.png'
import FifthProject from '../images/next.png'
import { useRef } from 'react'


import { BsGithub, BsLinkedin, BsInstagram, BsDownload, BsWhatsapp, BsMessenger} from 'react-icons/bs'
import { AiOutlineCheckCircle,AiOutlineLink } from 'react-icons/ai'


const Index = () => {
    const projectButton = useRef(null);
    const skillsButton = useRef(null);
    const projectsContainer = useRef(null);
    const skillsContainer = useRef(null);


    const clickSkills = () => {
        if(projectButton.current.classList.contains('active')){
            projectButton.current.classList.remove('active');
            projectButton.current.classList.add('disable');
            skillsButton.current.classList.remove('disable');
            skillsButton.current.classList.add('active');
            skillsContainer.current.style.display = 'flex';
            projectsContainer.current.style.display = 'none';

        }
    }

    const clickProject = () => {
        if(skillsButton.current.classList.contains('active')){
            skillsButton.current.classList.remove('active');
            skillsButton.current.classList.add('disable');
            projectButton.current.classList.remove('disable');
            projectButton.current.classList.add('active');
            projectsContainer.current.style.display = 'flex';
            skillsContainer.current.style.display = 'none';
        }
    }
    
    return (
        <div className='app'>
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
                        <a href='https://github.com/Snitrxm' target='_blank' rel="noreferrer">{<BsGithub/>}</a>
                        <a href='https://www.linkedin.com/in/andre-rocha-aba7b7229/' target='_blank' rel="noreferrer">{<BsLinkedin/>}</a>
                        <a href='https://www.instagram.com/andree_olv/' target='_blank' rel="noreferrer">{<BsInstagram/>}</a>
                    </div>
                </div>
                <div className='container'>
                    <div className='personalInfos'>
                            <div className='firstInfo'>
                                <h3>1</h3>
                                <p>Years of<br/> study</p>
                            </div>
                            <div className='secondInfo'>
                                <h3>+ 14</h3>
                                <p>Personal<br/> Projects</p>
                            </div>
                            <div className='thirdInfo'>
                                <h3>+ 10</h3>
                                <p>Knowledge of<br/>technologies</p>
                            </div>
                        </div>
                        <div className='cvAndContactButtons'>
                            <a href={CV} download="AndreCV"><button className='cvButton'>Download CV<span><BsDownload/></span></button></a>
                            <div className='contactButtons'>
                                <a href="https://api.whatsapp.com/send?phone=5512988791216"><button>{<BsWhatsapp/>}</button></a>
                                <a href="https://m.me/andre.rocha.90834776"><button>{<BsMessenger/>}</button></a>
                            </div>
                        </div>
                        <div className='buttonOfProjects'>
                            <button className='active' onClick={() => clickProject()} ref={projectButton}>Projects</button>
                            <button className='disable' onClick={() => clickSkills()} ref={skillsButton}>Skills</button>
                        </div>
                </div>
            </header>
            <main>
                    <div className='projects' ref={projectsContainer}>
                        <div className='firstProject crop'>
                            <img src={FirstProject} alt='' className='imgs'></img>
                            <div className='projectModal'>
                                <div>
                                    <p>Web</p>
                                    <h3>Todo Site with ReactJS</h3>
                                    <a href="https://github.com/Snitrxm/ToDo-List-With-React" target='_blank' rel='noreferrer'><button><AiOutlineLink className='link'/></button></a>
                                </div>
                            </div>
                        </div>
                        <div className='thirdProject crop'>
                            <img src={FifthProject} alt=''></img>
                            <div className='projectModal'>
                                <div>
                                    <p>Web</p>
                                    <h3>A Github Searcher with NextJS</h3>
                                    <a href="https://githubreposfinder.vercel.app/" target='_blank' rel='noreferrer'><button><AiOutlineLink className='link'/></button></a>
                                </div>
                            </div>
                        </div>
                        <div className='secondProject crop'>
                            <img src={SecondProject} alt=''></img>
                            <div className='projectModal'>
                                <div>
                                    <p>Web</p>
                                    <h3>Appointment for BarberShop</h3>
                                    <a href="https://github.com/Snitrxm/Barber-Shop-Schedule" target='_blank' rel='noreferrer'><button><AiOutlineLink className='link'/></button></a>
                                </div>
                            </div>
                        </div>
                        <div className='thirdProject crop'>
                            <img src={ThirdProject} alt=''></img>
                            <div className='projectModal'>
                                <div>
                                    <p>Web</p>
                                    <h3>Bank Site With NodeJS</h3>
                                    <a href="https://github.com/Snitrxm/Banking-App-with-Node" target='_blank' rel='noreferrer'><button><AiOutlineLink className='link'/></button></a>
                                </div>
                            </div>
                        </div>
                        <div className='thirdProject crop'>
                            <img src={FourthProject} alt=''></img>
                            <div className='projectModal'>
                                <div>
                                    <p>Web</p>
                                    <h3>A Advice API with NodeJS</h3>
                                    <a href="https://github.com/Snitrxm/AdviceAPI" target='_blank' rel='noreferrer'><button><AiOutlineLink className='link'/></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='skills' ref={skillsContainer}>
                        <div className='frontend'>
                            <h3>Frontend</h3>
                            <div className='frontendSkills'>
                                <div className='divSkill'>
                                    <span><AiOutlineCheckCircle className='checkIcon'/></span>
                                    <div>
                                        <h4>HTML</h4>
                                        <p>Advanced</p>
                                    </div>
                                </div>
                                <div className='divSkill'>
                                    <span><AiOutlineCheckCircle className='checkIcon'/></span>
                                    <div>
                                        <h4>CSS</h4>
                                        <p>Advanced</p>
                                    </div>
                                </div>
                                <div className='divSkill'>
                                    <span><AiOutlineCheckCircle className='checkIcon'/></span>
                                    <div>
                                        <h4>JS</h4>
                                        <p>Advanced</p>
                                    </div>
                                </div>
                                <div className='divSkill'>
                                    <span><AiOutlineCheckCircle className='checkIcon'/></span>
                                    <div>
                                        <h4>ReactJS</h4>
                                        <p>Advanced</p>
                                    </div>
                                </div>
                                <div className='divSkill'>
                                    <span><AiOutlineCheckCircle className='checkIcon'/></span>
                                    <div>
                                        <h4>Bootstrap</h4>
                                        <p>Intermediate</p>
                                    </div>
                                </div>
                                <div className='divSkill'>
                                    <span><AiOutlineCheckCircle className='checkIcon'/></span>
                                    <div>
                                        <h4>Bulma</h4>
                                        <p>Intermediate</p>
                                    </div>
                                </div>
                                <div className='divSkill'>
                                    <span><AiOutlineCheckCircle className='checkIcon'/></span>
                                    <div>
                                        <h4>GIT</h4>
                                        <p>Advanced</p>
                                    </div>
                                </div>
                                <div className='divSkill'>
                                    <span><AiOutlineCheckCircle className='checkIcon'/></span>
                                    <div>
                                        <h4>GitHub</h4>
                                        <p>Advanced</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='backend'>
                            <h3>Backend</h3>
                                <div className='backendSkills'>
                                    <div className='divSkill'>
                                        <span><AiOutlineCheckCircle className='checkIcon'/></span>
                                        <div>
                                            <h4>NodeJs</h4>
                                            <p>Advanced</p>
                                        </div>
                                    </div>
                                    <div className='divSkill'>
                                        <span><AiOutlineCheckCircle className='checkIcon'/></span>
                                        <div>
                                            <h4>Python</h4>
                                            <p>Basic</p>
                                        </div>
                                    </div>
                                    <div className='divSkill'>
                                        <span><AiOutlineCheckCircle className='checkIcon'/></span>
                                        <div>
                                            <h4>Firebase</h4>
                                            <p>Basic</p>
                                        </div>
                                    </div>
                                    <div className='divSkill'>
                                        <span><AiOutlineCheckCircle className='checkIcon'/></span>
                                        <div>
                                            <h4>MySQL</h4>
                                            <p>Advanced</p>
                                        </div>
                                    </div>
                                    <div className='divSkill'>
                                        <span><AiOutlineCheckCircle className='checkIcon'/></span>
                                        <div>
                                            <h4>MongoDB</h4>
                                            <p>Advanced</p>
                                        </div>
                                    </div>
                                    <div className='divSkill'>
                                        <span><AiOutlineCheckCircle className='checkIcon'/></span>
                                        <div>
                                            <h4>NoSQL</h4>
                                            <p>Advanced</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
            </main>
            <footer>
                <div className='footer'>
                    <p>Developed by <a href='https://twitter.com/Snitrxxm' target='_blank' rel="noreferrer">André Rocha</a></p>
                </div>
            </footer>
        </div>     
    );   
}

export default Index;
