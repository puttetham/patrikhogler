import React, { Component } from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                <div className="skills-container">
                    <h2 className="about-head">Skills</h2>
                    {/* {this.props.skill}
                    <ProgressBar style={{margin:'auto', width: '75%'}} progress={this.props.progress}/> */}
                    <p>HTML/CSS <ProgressBar progress={90} /></p>
                    <p>JavaScript <ProgressBar progress={40} /></p>
                    <p>ReactJS <ProgressBar progress={25} /></p>
                    <p>Bootstrap <ProgressBar progress={80} /></p>
                    <p>PHP <ProgressBar progress={25} /></p>
                    <p>WordPress <ProgressBar progress={50} /></p>
                    
                </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;