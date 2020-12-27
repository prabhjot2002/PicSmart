import FollowButton from './FollowButton'

function FollowSection({posts}){
    return(
        <div id="follow-section">
        <h3 className="follow-section-heading">People you can follow</h3>
        <div id="followers">
        {posts.map((post,index)=>
            <FollowButton userInfo={post.user} key={index}/>
            )}
            </div>
        </div>
    )
}

export default FollowSection;