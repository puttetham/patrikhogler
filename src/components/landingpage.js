import React, { Component } from 'react';
import './landingpage.css';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import Amsterdam from '../assets/test.png'
import PatrikHogler from '../assets/patrikhogler.png';
import HeaderImg from '../assets/wallpaper.jpg';

class Landing extends Component {
    render(){
        return(
            <div className="landingcontainer">
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <h2 className="banner-text">Hello, I'm a <span className="frontend">Frontend</span> Developer</h2>
                    </Cell>
                </Grid>

                    <Grid className="landing-grid2">
                        <Cell col={6} id="left-cell">
                        <img 
                        src={Amsterdam} 
                        alt="Patrik Hogler - Front End Developer"
                        className="avatar-img"
                        />
                      

                        </Cell>
                        <Cell col={6} id="right-cell">
                        <h1 className="cellText2">PATRIK HOGLER</h1>
                        <p className="cellText">Jag heter Patrik Hogler och är 30 år gammal . Nu i Juni så tog jag min Front End Utvecklare examen på KYH Stockholm, som var en två årig yrkesutbildning. Under min utbildning så har jag fått lära mig om HTML,CSS, JavaScript, CMS(Wordpress) och UX. Jag har även genomfört en 5 månaders lång praktik period på ett företag, där jag fått bidra samt att utveckla mina kunskaper. Efter min examen så hoppade jag på en utbildning där jag fått lära mig lite mer om SEO. Då jag är nyexaminerad och väldigt fräsch i branschen så letar jag nu efter ett jobb. Jag ser mig själv fortfarande som väldigt ny inom webbutveckling men är väldigt driven och nyfiken på att lära mig ännu mer.</p>
                        <p className="cellText3">
                        <span className="html">HTML/CSS</span> -
                        <span className="bootstrap"> Bootstrap</span> -
                        <span className="js"> JavaScript</span> -
                        <span className="wordpress">WordPress</span> -
                        <span className="react">ReactJs</span>
                        </p>
                        </Cell>
                    </Grid>
                       
                    <Grid className="landing-grid3">
                    <Cell col={12}>
       
                            <div className="social-links">
            
                            <a href="https://se.linkedin.com/in/patrik-hogler-1377b0129" target="_blank">
                                <i class="fab fa-linkedin"></i>
                            </a>

                           
                             <a href="https://github.com/puttetham" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>

                            
                            <a href="https://www.facebook.com/people/Patrik-Thammavit/753827673" target="_blank">
                                <i class="fab fa-facebook"></i>
                            </a>

                           
                            <a href="https://www.instagram.com/puttetham/" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>

                            </div>
                        </Cell>
                  </Grid> 
                    
                
            </div>
        )
    }
}

export default Landing;