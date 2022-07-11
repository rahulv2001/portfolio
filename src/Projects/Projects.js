import React, {useEffect, useRef} from "react";
import Header from "../Header/Header";
import "./Projects.css";
import arrow from "../Assets/arrow.svg";
import GetInTouch from "../GetInTouch/GetInTouch";
import Footer from "../Footer/Footer";
import gsap from "gsap";

function Projects(){
    const timeline_project = gsap.timeline();
    let text1 = useRef(null);
    let itemsProject = useRef(null);
    useEffect(()=>{
        timeline_project.from(text1, {
            duration : 1,
            skewY : 10,
            y : 500,
            // delay : 2,
            delay : 1,
            opacity : 0,
            stagger : {
                amount : .4
            }
        }, "-=1.5");
        timeline_project.from(itemsProject, {
            duration : .5,
            opacity : 0,
            y : 100
        })
    })
    return (
        <div>
            <Header timeline={timeline_project} />
            <div className="project-page">
                <div className="my-projects">
                    <h1 ref={el => text1=el}>
                        My <br />
                        Projects
                    </h1>
                </div>
                <div className="project-page-container" ref={el => itemsProject=el}>
                    <div className="project-page-items">
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>01/06</p>
                            </div>
                            <a rel="noreferrer" href="https://react-keeper-blue.vercel.app/" target='_blank'>
                                <div className="project-page-item-header">
                                    <h1>Keeper App.</h1>
                                    <p>A website that use to make notes. Using React.js.</p>
                                </div>
                                <div className="project-page-item-image project-page-item-image1"></div>
                                <div className="project-page-item-footer">
                                    <p>Click Here.</p>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>02/06</p>
                            </div>
                            <a rel="noreferrer" href="https://rahulv2001.github.io/rv4/" target='_blank'>
                                <div className="project-page-item-header">
                                    <h1>Tindog.</h1>
                                    <p>A website name Tindog using HTML, CSS and JS.</p>
                                </div>
                                <div className="project-page-item-image project-page-item-image2"></div>
                                <div className="project-page-item-footer">
                                    <p>Click Here.</p>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>03/06</p>
                            </div>
                            <a rel="noreferrer" href="https://rahulv2001.github.io/Calculator/" target='_blank'>
                                <div className="project-page-item-header">
                                    <h1>Calculator.</h1>
                                    <p>Website as a project which performs arithmetic operations.</p>
                                </div>
                                <div className="project-page-item-image project-page-item-image3"></div>
                                <div className="project-page-item-footer">
                                    <p>Click Here.</p>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>04/06</p>
                            </div>
                            <a rel="noreferrer" href="https://rahulv2001.github.io/rv1/" target='_blank'>
                                <div className="project-page-item-header">
                                    <h1>A Portfolio.</h1>
                                    <p>A Portfolio web using HTML ans CSS.</p>
                                </div>
                                <div className="project-page-item-image project-page-item-image4"></div>
                                <div className="project-page-item-footer">
                                    <p>Click Here.</p>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>                        
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>05/06</p>
                            </div>
                            <a rel="noreferrer" href="https://rahulv2001.github.io/rv9/" target='_blank'>
                                <div className="project-page-item-header">
                                    <h1>Drum Kit.</h1>
                                    <p>A website name Drum Kit has a kit of a few types of drums with different sounds. using HTML, CSS and JS.</p>
                                </div>
                                <div className="project-page-item-image project-page-item-image5"></div>
                                <div className="project-page-item-footer">
                                    <p>Click Here.</p>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="project-page-item">
                            <div className="project-page-item-number">
                                <p>06/06</p>
                            </div>
                            <a href="/">
                                <div className="project-page-item-header">
                                    <h1>Lorem, ipsum.</h1>
                                    <p>Lorem, ipsum dolor.</p>
                                </div>
                                <div className="project-page-item-image project-page-item-image6"></div>
                                <div className="project-page-item-footer">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <img src={arrow} alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <GetInTouch />
            <Footer />
        </div>
    )
}

export default Projects;