import React from "react"
// import { LinkedinShareButton } from "react-share"
// import {LinkedinIcon,
//     LineShareButton,} from "react-share"
import {SocialIcon} from 'react-social-icons'

function Footer(){
    return(
        <div className = "footer">
            <div className = "container">
                <div className = "row">
                    <div className = "col-lg-4 col-md-6 col-sm-6">
                        {/* Address */}
                        <div className = "d-flex">
                            <p> New York </p>
                        </div>
                        {/* email */}
                        <div className = "d-flex">
                            <p> maitphm@gmail.com</p>
                        </div>
                    </div>
                        <div className = "col-lg-3 col-md-2 col-sm-6">
                            <div className = "row">
                                <div className = "col">
                                    <a className = "footer-nav">Home</a>
                                    <br/>
                                    <a className = "footer-nav">About Me</a>
                                    <br/>
                                    <a className = "footer-nav">Experience</a>
                                </div>
                                <div className = "col">
                                    <a className = "footer-nav"></a>
                                    <br/>
                                    <a className = "footer-nav">Contact</a>
                                </div>
                            </div>
                        </div>
                        <div className= "col-lg-5 col-md-5 col-sm-6 align-items-center">
                            <div className = "d-flex justify-content-center">
                                <div className="contact-linkedin">
                                 <SocialIcon target="_blank" url="https://www.linkedin.com/in/maitphm/" fgColor="white" bgColor="blue"/>
                                 <a className="linkedin-a" href="https://www.linkedin.com/in/maitphm/" target="_blank">LinkedIn</a>
                                </div>
                                <div className="contact-github">
                                 <SocialIcon target="_blank" url="https://github.com/maifam" fgColor="white" bgColor="dark-gray"/>
                                 <a className="linkedin-a" href="https://github.com/maifam" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                        {/* <p className = "pt-3 text-center">
                            Created March 2021
                        </p> */}
                </div>
            </div>
        </div>
    )

}

export default Footer;