import React from "react";
import Me from "../linkedin.jpg"
function AboutMe(){
    return(
        <div id = "about" className= "container py-5">
            <div className = "row">
                <div className= "col-lg-6 col-xm-12">
                    {/* mb-5 and other vlaues bootstrap values */}
                    <div className = "photo-wrap mb-5">
                        <img className = "profile-img" src = {Me} alt = "author" />
                    </div>
                </div>
                <div className= "col-lg-6 col-xm-12">
                    <h1 className= "about-heading">About Me</h1>
                    <p>
                    Hello, there, my name is Mai (prounouned like 'My').<br/>
                    I am a software engineer dedicated to understanding and helping you. 
                    With an extensive professional background in mental health, 
                    I am experienced in building lasting relationships as well as bridging 
                    the gap between clients' needs and company's visions.<br/> 
                    I have a curious mindset; not only do I enjoy exploring new technologies, 
                    but new places such as restaurants and hiking trails.
                    </p>
                </div>

            </div>

        </div>

    )
}
export default AboutMe;



// import React from "react";
// // import Me from "../linkedin.jpg"
// function AboutMe(){
//     return(
//         <div id = "about" className= "container py-5">
//             <div className = "row">
//                 <div className= "col-lg-6 col-xm-12">
//                     {/* mb-5 and other vlaues bootstrap values */}
//                     <div className = "photo-wrap mb-5">
//                         <img className = "profile-img" src = {Me} alt = "author" />
//                     </div>
//                 </div>
//                 <div className= "col-lg-6 col-xm-12">
//                     <h1 className= "about-heading">About Me</h1>
//                     <p>
//                     Hello, there, my name is Mai (prounouned like 'My').<br/>
//                     I am a software engineer dedicated to understanding and helping you. With an extensive professional background in mental health, 
//                     I am experienced in building lasting relationships as well as bridging the gap between clients' needs and company's visions.<br/> 
//                     I have a curious mindset; not only do I enjoy exploring new technologies, but new places such as restaurants and hiking trails.
//                     </p>
//                 </div>

//             </div>

//         </div>

//     )
// }
// export default AboutMe;







// // import {Button} from '@material-ui/core'

// // function AboutMe() {
// //     return (
// //       <div>
// //           ABOUT ME
// //           <div>
// //             <Button variant="outlined" color="primary" href="https://docs.google.com/document/d/1bBJX8snhfIXZ4pnCLdHEEai4crchHzgTXOIXHYiT-RA/edit?usp=sharing" target='blank'>RESUME</Button>
// //           </div>
// //       </div>
// //     );
// //   }
  
// //   export default AboutMe;


