import React from 'react'

class Post extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            optVisibility:false,
        }
        this.toggleOptions = this.toggleOptions.bind(this);
    }
    toggleOptions(){
        if(!this.state.optVisibility)
        this.setState({optVisibility:true})
        else
        this.setState({optVisibility:false})
    }
    render(){
    return(
        <div className="post-container">
            <div className="user-info">
            <img className="user-img" src = {this.props.postContent.user.profile_image.small} alt = {this.props.postContent.user.first_name}/>
            <h3 className="username" >{this.props.postContent.user.name}</h3>
            </div>
            <p className="photo-desc">{this.props.postContent.cover_photo.alt_description}</p>
            <img className ="photo" src={this.props.postContent.cover_photo.urls.regular} alt="img"/>
            <div className="user-review">
            <button><i className="far fa-thumbs-up"></i></button>
            <button ><i className="far fa-thumbs-down"></i></button>
            <input placeholder="Add your comment" className="comment-section"></input>
            <button onClick={this.toggleOptions}><i className="fas fa-share-square"></i></button>
            </div>
            
            {
            this.state.optVisibility ?
            <div className="share-options-box">
            <button onClick={this.toggleOptions}><i className="fab fa-whatsapp"></i></button>
            <button onClick={this.toggleOptions}><i className="fab fa-facebook"></i></button>
            <button onClick={this.toggleOptions}><i className="fab fa-instagram"></i></button>
            <button onClick={this.toggleOptions}><i className="fab fa-twitter"></i></button>
            <button onClick={this.toggleOptions}><i className="fas fa-clipboard"></i></button>
            </div>
            :
            <div></div>
            }
        </div>
        
    )
        
}
}
export default Post;