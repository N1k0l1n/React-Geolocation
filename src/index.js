import React from "react";
import ReactDOM from 'react-dom/client';
import HemisphereDisplay from "./HemisphereDisplay";
import Hemisphere from "./HemisphereDisplay"


class App extends React.Component{
    
       state={ latitude : null, errorMessage: '' }

       componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
               
            this.setState( { latitude: position.coords.latitude } )
            console.log(this.setState)
        },
            (error)=>{
                this.setState( { errorMessage : error.message } )
            }
        );
    }

    render() { 
        if (this.state.errorMessage && ! this.state.latitude){
            return <div>{this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.latitude){
            return <div> <HemisphereDisplay latitude={this.state.latitude} /> </div>
        }
        else {
            return <div>Loading...</div>
            }

        }
    }

    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(<App />);