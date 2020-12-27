const Header=({showUploadBox})=>{
    
    return(
        <div className ="header" style={headerStyle}>
            <span style={logo}>PicSmart</span>
            <input placeholder="Search Here.." className="search-bar"/>
            <button className="addPost" onClick={showUploadBox}>Add new post +</button>
            <div>
            <span href="#" className="authLink">Sign in</span>
            <span href="#" className="authLink">Sign up</span>
            </div>
        </div>
        
    )
}
const logo = {
    padding:"0 10px",
    color:" rgb(189, 9, 39)",
    border:"3px solid rgb(189, 9, 39)",
    outline: "3px solid orange"
}


const headerStyle = {
    background:"white",
    color:"white",
    height:"10vh",
    margin:"auto",
    fontSize:"25px",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center"

}


export default Header;
