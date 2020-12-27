import React from 'react'
import './App.css';

import Header from './components/Header'
import PostRender from './components/PostRender'
import FollowSection from './components/FollowSection'
import FileUpload from './components/FileUpload';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      posts:[],
      show:false,
      uImg :"",
      uDesc:"",
    }
    this.showUploadBox = this.showUploadBox.bind(this)
    this.hideUploadBox = this.hideUploadBox.bind(this)
    this.handlePost = this.handlePost.bind(this)
  }

  async componentDidMount() {
    const response = await fetch("https://api.unsplash.com/search/collections?page=3&client_id=x5tAMuJ1grnbxlEiT5wVwF0Dz59FLB4XeseksVxJRnw&query=office&per_page=9")
    const json = await response.json();
    this.setState({posts:json.results})
  }

  showUploadBox(){
    this.setState({
      show:true
    })
  }

  hideUploadBox(){
    this.setState({
      show:false
    })
  }

  handlePost(uploadedImg,uploadedDesc){
    this.setState({
      uImg:uploadedImg,
      uDesc:uploadedDesc,
    })
  }

  render(){
  return (

    <div className="App">
      <Header showUploadBox = {this.showUploadBox}/>
      {this.state.show ? <FileUpload hideUploadBox={this.hideUploadBox} handlePost={this.handlePost}/> : <div></div> }
      <div id="section">
      <PostRender posts ={this.state.posts} uImg = {this.state.uImg} uDesc = {this.state.uDesc}/>
      <FollowSection posts={this.state.posts}/>
      </div>
    </div>
  );
  }
}

export default App;
