import React, { Component } from 'react';
import './contact.css';
import { Grid, Cell } from 'react-mdl';
import {List,ListItem,ListItemContent} from 'react-mdl';
import Footer from './footer';

class Contact extends Component {
    render(){
        return(
            <div className="contact-container">

                <Grid className="contact-grid">

                    {/* <Cell id="contact-left"col={6}>
                       <h2>Patrik Hogler</h2>
                       <img src={PatrikContact} 
                            alt="Photo of Patrik Hogler"
                            style={{ height: '250px', borderRadius: '50%'}}
                       
                       ></img>
                       <p style={{width:'75%', margin:'auto', paddingTop: '2em', paddingBottom: '2em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Cell> */}

                    <Cell col={12}>
                    <div className="contact-list">
                        <h2 className="project-head">Need to <span className="frontend">Contact</span> me?</h2>
                        <hr className="project-linebreak"></hr>
                        <p className="contact-text">Do you have a new project in mind? Let's do something amazing. Feel free to send me a message and i will get back to you as soon as possible.</p>
                        {/* <hr className="contact-breakline"></hr> */}
                        <List>
                        <ListItem>
                            <ListItemContent style={{fontFamily: 'Special Elite', fontSize: '1em', width: '70%'}}>
                            <a href="mailto:patrikhogler@hotmail.com.com" rel="noopener noreferrer" target="_top"><i className="fas fa-envelope-square" aria-hidden="true"></i>patrikhogler@hotmail.com</a>   
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontFamily: 'Special Elite', fontSize: '1em'}}>
                            <a href="tel:0765576319" rel="noopener noreferrer" target="_top"><i className="fas fa-phone-square" aria-hidden="true"></i>076-5576319</a>
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontFamily: 'Special Elite', fontSize: '1em'}}>
                            <a href="https://se.linkedin.com/in/patrik-hogler-1377b0129" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin" aria-hidden="true"></i>Patrik Hogler</a>
                            </ListItemContent>
                        </ListItem>
                        </List>
                    </div>
                    </Cell>
                </Grid>

                <Footer />
             
            </div>
        )
    }
}

export default Contact;