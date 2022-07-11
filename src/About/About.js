import React, {useRef, useEffect} from "react";
import Footer from "../Footer/Footer";
import GetInTouch from "../GetInTouch/GetInTouch";
import Header from "../Header/Header";
import "./About.css";
import gsap from "gsap";
import flower from "../Assets/flower.svg";

function About(){
    let text1 = useRef(null);
    let text2 = useRef(null);
    let image = useRef(null);
    let p1 = useRef(null);
    const timeline_about = gsap.timeline();
    useEffect(() => {
        timeline_about.from([text1, text2], {
            duration: .8,
            // duration: .5,
            y : 500,
            // y : 100,
            skewY : 10,
            stagger : {
                amount : .4
                // amount : 1
            }
        }, "-=1.5")
        // it is given as -=.5 but i do change
        timeline_about.from(image, {
            duration: 1.5,
            y : 300,
            delay: .2,
            opacity : 0
        }, "-=.5")
        timeline_about.from(p1, {
            duration: .5,
            x : 200,
            skewX : 10,
            opacity: 0
        })
    })
    return (
        <>
        <div>
            <div className="about">
                <Header timeline = {timeline_about} />
                <div className="about-container">
                    <div className="container-text">
                        <div className="container-inner-text1">
                            <p ref={el => text1=el}>Rahul</p>
                        </div>
                        <div className="container-inner-text2">
                            <p ref={el => text2=el}>Vishwakarma</p>
                        </div>
                    </div>
                    <div ref={el => p1=el} className="container-quote container-quote1">
                        I create sites and <br /> applications that cause <br /> pleasant emotions.
                    </div>
                    <div className="container-quote container-quote2">
                        I developed full stack web <br /> projects, experiences Website <br /> and applications.
                    </div>
                    <div className="container-image" ref={el => image=el}></div>
                </div>
                <div className="about-container2">
                    <div className="about-container2-heading">
                        {/* <div className="about-text-lower">
                            <p>Web Developer</p>
                        </div>
                        <div className="about-text-lower">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Front-End</p>
                        </div> */}
                        {/* <div className="about-text-lower">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web Developer</p>
                        </div>
                        <div className="about-text-lower">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&</p>
                        </div>
                        <div className="about-text-lower">
                            <p>&nbsp;&nbsp;&nbsp;Competitive Programmer. </p>
                        </div> */}
                        <div className="about-text-lower">
                            <p>Web Developer</p>
                        </div>
                        <div className="about-text-lower">
                            <p>&</p>
                        </div>
                        <div id="a1" className="about-text-lower">
                            <p>Competitive Programmer.</p>
                        </div>
                        {/* <div className="about-text-lower">
                            <p>Programmer.</p>
                        </div> */}
                    </div>
                    <div className="about-container2-p">
                        <p>I do both web development and competitive programming. <br /> In web the final result always turns out <br /> the way i intended it.</p>
                        <p>I believe that every site or service should be created <br /> should be created aesthetically pleasing and have extra value for users.</p>
                        {/* <p className="about-container2-p-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Similique nihil vitae eligendi ex sequi libero dolorum suscipit dignissimos blanditiis esse ipsam, <br /> quod at aspernatur voluptas dicta aut eius modi eaque.</p>
                        <p>Lorem ipsum dolor sit amet. <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, quibusdam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, distinctio.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, provident. <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, enim?</p> */}
                    </div>
                    <div className="about-container2-heading2">
                        <div className="about-text-lower">
                            <p>What is my feature?</p>
                        </div>
                    </div>
                    <div className="about-container2-p">
                        <p className="about-container2-p-right">
                        I am a student at Harcourt Butler Technical University, Kanpur <br /> Persuing a b.tech in computer scient and engineering 2024 batch.
                        </p>
                        <p>I am a motivated and personable student from my work <br /> & I am curious about learning.</p>
                        <p>I do web development as well as <br /> competitive programming.</p>
                    </div>
                    <div className="about-container-flower">
                        <img src={flower} alt="" />
                    </div>
                </div>
                <div className="about-footer">
                    <GetInTouch />
                    <Footer />
                </div>
            </div>
        </div>
        </>
    )
}

export default About;