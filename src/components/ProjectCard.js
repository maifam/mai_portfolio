import React from "react"
import Breathe from "../projectImages/Breathe.png"
// FONT AWESOME
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons"
// REACT POP UP BOX
import {PopupboxManager,PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

function Portfolio(){

// Tenant Truths
const openPopupboxTenantTruths = () => {
    const content = (

        <>
        <img className = "portfolio-image-popupbox" src = {alfresko} alt = "Al Fresko" />
        <p className = "popup-desc">
        A react/rails application inspired by Yelp, this application allows users to review, 
        rate restaurants that offer outdoor dining and covid safety precautions
        </p>
        <b className = "link-desc">Netlify:</b><a className = "hyper-link" onClick = {() => window.open("https://alfresko.netlify.app/")}>https://alfresko.netlify.app/</a><br></br>
        <b className = "link-desc">GitHub: Frontend</b> <a className = "hyper-link" onClick = {() => window.open("https://github.com/maifam/al_fresko_backend")} >https://github.com/maifam/al_fresko_backend</a><br></br>
        <b className = "link-desc">GitHub: Backend</b> <a className = "hyper-link"onClick = {() => window.open("https://github.com/maifam/al_fresko_frontend")}>https://github.com/maifam/al_fresko_frontend</a>
        </>

    )
    PopupboxManager.open({content})
}


    const popupboxConfigTenantTruths = {
        titleBar: {
            enable: false,
            text: "Tenant Truths"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }


    // Clothzilla
// const openPopupboxClothzilla = () => {
//     const content = (

//         <>
//         <img className = "portfolio-image-popupbox" src = {Clothzilla} alt = "Clothzilla Application" />
//         <p className = "popup-desc">
//         A clothing retail application built on Ruby on Rails and React
//         </p>
//         {/* <b>Netlify:</b><a className = "hyper-link" onClick = {() => window.open("https://tenanttruths.netlify.app/")}>https://tenanttruths.netlify.app/</a> */}
//         <b className = "link-desc">GitHub: Frontend</b> <a className = "hyper-link" onClick = {() => window.open("https://github.com/cmur11/ecom-app-frontend")}>https://github.com/cmur11/ecom-app-frontend</a><br></br>
//         <b className = "link-desc">GitHub: Backend</b> <a className = "hyper-link"onClick = {() => window.open("https://github.com/cmur11/ecom_app_backend_api")}>https://github.com/cmur11/ecom_app_backend_api</a>
//         </>

//     )
//     PopupboxManager.open({content})
// }


//     const popupboxConfigClothzilla = {
//         titleBar: {
//             enable: false,
//             text: "Clothzilla"
//         },
//         fadeIn: true,
//         fadeInSpeed: 500
//     }


       // Breathe
const openPopupboxBreathe = () => {
    const content = (

        <>
        <img className = "portfolio-image-popupbox" src = {Breathe} alt = "Breathe Application" />
        <p className = "popup-desc">
        A single page meditation application created with Ruby on Rails and vanilla JavaScript that allows users to browse and listen to meditation audios by category
        </p>
        {/* <b>Netlify:</b><a className = "hyper-link" onClick = {() => window.open("https://tenanttruths.netlify.app/")}>https://tenanttruths.netlify.app/</a> */}
        <b className = "link-desc">GitHub: Frontend</b> <a className = "hyper-link" onClick = {() => window.open("https://github.com/maifam/breathe_frontend")}>https://github.com/maifam/breathe_frontend</a><br></br>
        <b className = "link-desc">GitHub: Backend</b> <a className = "hyper-link"onClick = {() => window.open("https://github.com/maifam/breathe_backend/tree/master")}>https://github.com/maifam/breathe_backend/tree/master</a>
        </>

    )
    PopupboxManager.open({content})
}


    const popupboxConfigBreathe = {
        titleBar: {
            enable: true,
            // text: "Breathe"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return(
        <div id = "portfolio" className = "portfolio-wrapper"> 
            <div className ="container">
                <h1 className= "text-uppercase text-center py-5">Portfolio</h1>
                    <div className= "image-box-wrapper row justify-content-center">
                        <div className = "portfolio-image-box" onClick = {alfresko}>
                            <img className= "portfolio-image" src={alfresko alt= "Al Fresko"/>
                            <div className = "overflow"></div>
                            <FontAwesomeIcon className= "portfolio-icon" icon={faSearchPlus} />
                        </div>
              
                            {/* second project */}
                        <div className = "portfolio-image-box" onClick = {openPopupboxClothzilla}>
                            <img className= "portfolio-image" src={Clothzilla} alt= "Clothzilla Project"/>
                            <div className = "overflow"></div>
                            <FontAwesomeIcon className= "portfolio-icon" icon={faSearchPlus} />
                         </div>
                         {/* third project */}

                        <div className = "portfolio-image-box" onClick = {openPopupboxBreathe}>
                            <img className= "portfolio-image" src={Breathe} alt= "Breathe Project"/>
                            <div className = "overflow"></div>
                            <FontAwesomeIcon className= "portfolio-icon" icon={faSearchPlus} />
                        </div>

                   </div>
            </div>
            <PopupboxContainer {...popupboxConfigTenantTruths} />
            <PopupboxContainer {...popupboxConfigClothzilla} />
            <PopupboxContainer {...popupboxConfigBreathe} />
        </div>
    )
}
export default Portfolio;
// function ProjectCard({projCard}) {
//     return (
//       <div>
          
//       </div>
//     );
//   }
  
//   export default ProjectCard;