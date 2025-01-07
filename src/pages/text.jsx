import { createClient } from "@supabase/supabase-js"
import { useState } from "react"
const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlndnFqdHpmdmR6dXNyZXF6Y2NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxMzA5MTIsImV4cCI6MjA1MTcwNjkxMn0.8-4bFNCbwI9dPv_V8LUmzSB6TksN7Q3Dabw1GtLjPOU`;

const url = "https://igvqjtzfvdzusreqzccc.supabase.co"

export default function FileUploadTest(){
    const [file, setFile] = useState(null)

    async function handleUpload(){
        if(file == null){
            alert("Please select a file")
            return
        }
        console.log(file)

        let fileName = file.name
        const extension = fileName.split(".")[fileName.split(".").length - 1];

        if (extension !== "jpg" && extension !== "png") {
            alert("Please select a jpg or png file.");
            return;
          }

        const supabase = createClient(url, key);

        // const  timestamp = new Data().getTime();

        // fileName = timestamp+"."+extension

          const timestamp = new Date().getTime();
          fileName = timestamp + "." + extension;

        console.log(fileName)

        await supabase.storage.from("images").upload(fileName, file, {
            cacheControl: "3600",
            upsert: false,
          }).then((res)=>{
            console.log((res));
        })

        const url2 = supabase.storage.from("images").getPublicUrl(fileName)

        console.log(url2)
    
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

