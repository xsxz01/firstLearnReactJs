import React from 'react';

class CommentBox extends React.Component{
    constructor(props){
        super(props)
        this.handlSubmit = this.handlSubmit.bind(this)
    }

    handlSubmit(event){
        this.props.onAddComments(this.textInput.value)
        event.preventDefault()
    }
    render(){
        return (
            <form className="p-5" onSubmit={this.handlSubmit}>
                <div className='form-group'>
                    <label>留言内容</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="请输入内容"
                        ref={(textInput) => {this.textInput = textInput}}
                    ></input>
                    <button type='submit' className='btn btn-primary'>留言</button>
                    <p>已有{this.props.commentsLength}条留言</p>
                </div>
            </form>
        )
    }
}

export default CommentBox;