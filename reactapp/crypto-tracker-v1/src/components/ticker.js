import React, { Component } from 'react'
import axios from 'axios'


export class getTicker extends Component {
    constructor(props){
        super(props)

        this.state = {
            
            
        };

    }

    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "https://www.livecoinwatch.com/static/lcw-widget.js";
        script.async = true;
    
        document.body.appendChild(script);
    }

    render() {
        
        return (
            
            <div >
                    
                    <div className="livecoinwatch-widget-5" lcw-base="USD" lcw-color-tx="#ff6900" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="20" ></div>
            </div>
            
        );
        
    }
    
}


export default getTicker
