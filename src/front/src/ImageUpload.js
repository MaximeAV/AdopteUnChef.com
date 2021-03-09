import { Button } from '@material-ui/core'
import React, { useState } from 'react'

function ImageUpload() {
    const [image, setImage] = useState(null);
    const [progress, setProgressn] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };
    
    const handleUpload = () => {
       /* const uploadTask = storage.ref(`image/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // progress function
            }
        )*/
    }

    return (
        <div>
            {/* I want to have a  */}
            {/* caption input  */}
            {/* file picker  */}
            {/* post button  */}

            <input type="text" placeholder='Enter a caption' onChange={event => setCaption(event.target.value )} value ={caption}/>
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload;