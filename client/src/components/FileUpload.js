import React,{Fragment,useState,useEffect} from 'react';
import axios from 'axios';

const FileUpload = ({hideUploadBox,handlePost}) =>{
    const [file,setFile] = useState({
        img:"",
        desc:"",
    });
    const [previewImg,setPreviewImg] = useState('');
    const [uploadedImg,setUploadedImg] = useState("");
    const [uploadedDesc,setUploadedDesc] = useState("");

    function onChange(e){
        setFile({img:e.target.files[0],desc:document.getElementById("about-image").value})
        setPreviewImg(URL.createObjectURL(e.target.files[0]))
    }


const onSubmit = async e =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('img',file.img);
    formData.append('desc',file.desc);
    try{
        const res = await axios.post('http://localhost:5000/upload',formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
        setUploadedImg(res.data.filePath)
        setUploadedDesc(res.data.imgDesc)
        hideUploadBox()
            

    }catch(err){
        console.log(err)
        }
}
        useEffect(()=>{
            
            handlePost(uploadedImg,uploadedDesc)
            // eslint-disable-next-line
        },[uploadedImg,uploadedDesc])
    
    return(
        <Fragment>
            <form id="addPostForm" onSubmit={onSubmit}>
                <div id="main-container">
                <div className ="file-upload-container">
                    
                    <div id="button-user-info">
                        <span id="user-info">
                            <i className="fab fa-wolf-pack-battalion"></i>
                            Prabhjot
                        </span>
                        <i className="far fa-times-circle" onClick={hideUploadBox}></i>
                    </div>
                    <select name="scope" id="visibility">
                        <option value="public">Public</option>
                        <option value="friends">Friends</option>
                        <option value="only-you">Only you</option>
                    </select>
                    
                    <textarea type="text" placeholder="Want to say something..." id="about-image"></textarea>
                    {previewImg !== "" &&
                <img src={previewImg} height="200" width="270" alt="uploaded file" />
                
                }
                   <div>
                        <label>
                            <input type='file' id="file-input" onChange={onChange}/>
                            <i className="far fa-images" ></i>
                        </label>
                        <i className=" fas fa-video"></i>
                    </div>
    
                <input type="submit" value="Add post" className="file-submit-button"/>
                </div>
                </div>
            </form>
        </Fragment>
    )
}
export default FileUpload;