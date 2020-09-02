import React from 'react';

class DigitalClock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:new Date()
        }
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({
                data:new Date
            })
        })
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return (
            <div className="digital-clock-component jumbotron">
                <h1>{this.state.data.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default DigitalClock;