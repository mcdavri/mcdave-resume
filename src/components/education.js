import React, {Component} from 'react';

class Education extends Component{
    render(){
        return(
            <div class="mdl-grid">
                    <div class="mdl-cell mdl-cell--4-col">
                        <p>{this.props.startYear} - {this.props.endYear}</p>

                    </div>
                    <div class="mdl-cell mdl-cell--8-col">
                        <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                        <p>{this.props.schoolDescription}</p>
                    </div>
            </div>
        );
    }
}

export default Education;
