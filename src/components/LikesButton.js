import React from 'react';

class LikesButton extends React.Component{
    constructor(props){
        super(props)
        this.state={
            likes:0
        }
        this.increseLikes = this.increseLikes.bind(this);
    }
    increseLikes(){
        this.setState({
            likes:++this.state.likes
        })
    }
    render(){
        return (
            <div className="likes-button-component">
                <button
                    type="button"
                    className="btn btn-outline-primary btn-lg"
                    onClick={this.increseLikes}
                >👍{this.state.likes}</button>
            </div>
        )
    }
}

export default LikesButton;