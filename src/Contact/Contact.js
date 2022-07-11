import React, {useRef, useEffect} from "react";
import Header from "../Header/Header";
import "./Contact.css";
import flower from "../Assets/flower.svg";
import Footer from "../Footer/Footer";
import gsap from "gsap";

function Contact(){
    const timeline_contact = gsap.timeline();
    let text1 = useRef(null);
    useEffect(() => {
        timeline_contact.from(text1, {
            duration : 1,
            y : 500,
            skewY : 10,
            stagger : {
                amount : .4
            },
            opacity : 0
        }, "-=1")
    })

    return (
        <div>
            <Header timeline={timeline_contact} />
            <div className="contact-page">
                <div className="contact-page-container">
                    <h1 ref={el => text1=el}>Let's talk about <br /> the project <img src={flower} alt="" /></h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;