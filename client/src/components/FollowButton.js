import React from 'react'
class FollowButton extends React.Component{

    constructor(props){
        super(props)
        this.state = {text:"Follow"}
        
        this.toggleFollow = this.toggleFollow.bind(this)
        this.removeFollower = this.removeFollower.bind(this)
    }

    toggleFollow(e){
       
       if(this.state.text==="Follow"){
       this.setState({
        text:"following"
        
        })
        e.target.style.color="rgb(189,9,39)";
        }
        else{
        this.setState({
            text:"Follow",
            
        })
        e.target.style.color="rgb(0,0,0)";
        }
    }

    removeFollower(e){
        e.target.parentElement.remove();
        if(!document.getElementById("followers").hasChildNodes()){
            const msg = document.createElement("p");
            msg.id = "no-more"
            const msgText = document.createTextNode("No more suggestions to show");
            msg.appendChild(msgText)
           document.getElementById("followers").appendChild(msg)

            
        }
    }
    render(){
        return(
        <div className="follow-tile">
           <img className="user-img" src={this.props.userInfo.profile_image.medium} alt="a"/>
           <div style={buttonStyles}>
            <p> {this.props.userInfo.name}</p>
            
            <input type="button" className="follow-button" onClick={this.toggleFollow} value={this.state.text}/>
            </div>
            <i className="remove-follower fas fa-times" onClick={this.removeFollower}></i>
        </div>)
        }
        }
    
const buttonStyles ={
    margin:"0 20px",
    width:"30%",
}
export default FollowButton;