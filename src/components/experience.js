import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';

class Experience extends Component {
    render () {
        return(
            <div>
                <Grid>
                  <div className="education-container">
                    <Cell col={12}>
                    <h4 className="education-name">{this.props.jobName}</h4>
                    <p className="education-year">{this.props.startYear} - {this.props.endYear}</p>
                    <p className="education-desc">{this.props.jobDescription}</p>
                    </Cell>
                    
                    {/* <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
                    <p>{this.props.jobDescription}</p>
                    </Cell> */}
                  </div>
                </Grid>
            </div>
        )
    }
}

export default Experience;