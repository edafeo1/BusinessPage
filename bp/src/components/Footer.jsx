import React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
//import { useContext } from "react";
//import { DataContext } from "../context";
//import {extractProperty} from "../util/objectutils";

function Footer() {

    //const context = useContext(DataContext);

    //Test Context
    //const { Main } = context;    
 
   // let social = extractProperty(Main, 'social');
   // const social1 = (social !== undefined && social.length > 0) ? social[0].url : social;
   // const social2 = (social !== undefined && social.length > 0) ? social[1].url : social
    
         
    return (
        
        <footer className="footer-bg" >
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="/"><i className="icon-up-open"><ExpandLessIcon/></i></a></div>
       <div id="footer-wrapper">
       
       
           <div id="footer-section">
   
            <h4>About</h4>
               <p> <p>24/7 and providing prompt service <p>coupled with a competitive affordable <p>Developer in Sydney rates makes your <p>choice easy.</p></p></p></p></p>
              
   
              <ul className="copyright">
                 <li>&copy; Hope You Get in Contact  </li>
                 <li>Design by <a title="Styleshout" href="https://ofegoedafe.netlify.app/">edafe</a></li>
                 <li>Created With Love ♥️</li>
              </ul>
   
           </div>

           <div id="footer-section">
   
            
               <h4>Contact Us</h4>
              <p>Name: Ofego Edafe Oreva <br/> Phone: 0429152527  <br/> Email: edafeo1@gmail.com</p>
   
           </div>

           <div id="footer-section">
   
            <h4>Social</h4>
           </div>

           </div>
         

       
        
     </footer>
    )
}

export default Footer