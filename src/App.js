import React,{Component} from 'react';
import logo from './logo.svg';
// import NameCard from './components/NameCard'
// import LikesButton from './components/LikesButton'
import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'
import './App.css';
const tags = ['苹果','香蕉'];
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      comments:['this is first comment!']
    }
    this.addComments = this.addComments.bind(this)
  }
  addComments(comment){
    this.setState({
      comments:[...this.state.comments,comment]
    })
  }
  render(){
    const {comments} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* <NameCard name="张三" number={1234567890} tags={tags} isHuman /> */}
        {/* <LikesButton /> */}
        <DigitalClock />
        <CommentBox commentsLength={comments.length} onAddComments={this.addComments} />
        <CommentList comments={comments} />
      </div>
    );
  }
}

export default App;
