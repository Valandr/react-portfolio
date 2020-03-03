import React, { Component } from 'react';
import './services.css';

class Services extends Component {
    render(){
        return(
            <div className="services">

                <h3>Services</h3>
                <h2>Skills</h2>
                <div className="row">
                    <div>
                       <span><i class="fas fa-mobile-alt"></i></span> 
                       <h4>Responsive</h4>
                       <p>Best User eXperience.</p>
                    </div>
                    <div>
                        <span><i class="fas fa-pencil-ruler"></i></span>
                        <h4>Design</h4>
                        <p>Choose your Design.</p>
                    </div>
                    <div>
                        <span><i class="fas fa-thumbs-up"></i></span>
                        <h4>Satisfaction</h4>
                        <p>People talks about Me.</p>
                    </div>
                    <div>
                        <span><i class="fas fa-question"></i></span>
                        <h4>Help</h4>
                        <p>Do you have questions?</p>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Services