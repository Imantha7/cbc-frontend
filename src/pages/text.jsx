import { createClient } from "@supabase/supabase-js"
import { useState } from "react"
import uploadMediaToSupabase from "../utils/mediaUpload";


export default function FileUploadTest(){
    const [file, setFile] = useState(null)

    async function handleUpload(){
        uploadMediaToSupabase(file).then((url)=>{
            console.log(url)
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
          <h1>File Upload Test</h1>
          <input
            type="file"
            onChange={(e) => {
                setFile(e.target.files[0]); // Use e.target.files[0] to get the file object
            }}
          />
          <button onClick={handleUpload}>Upload</button>
        </div>
      );
}

