import { createClient } from "@supabase/supabase-js";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlndnFqdHpmdmR6dXNyZXF6Y2NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxMzA5MTIsImV4cCI6MjA1MTcwNjkxMn0.8-4bFNCbwI9dPv_V8LUmzSB6TksN7Q3Dabw1GtLjPOU`;

const url = "https://igvqjtzfvdzusreqzccc.supabase.co"

export default function uploadMediaToSupabase(file) {
    return new Promise((resolve,reject)=>{
        if(file == null){
            reject("File not added")
            return
        }

        let fileName = file.name
        const extension = fileName.split(".")[fileName.split(".").length - 1];

        const supabase = createClient(url, key);

        const timestamp = new Date().getTime();

        fileName = timestamp+file.name+"."+extension

        supabase.storage.from("images").upload(fileName, file, {
            cacheControl: "3600",
            upsert: false,
          }).then(()=>{
            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            resolve(publicUrl)
        }).catch((err)=>{
            reject(err)
        });
    })
}





        

        

        // if (extension !== "jpg" && extension !== "png") {
        //     alert("Please select a jpg or png file.");
        //     return;
        //   }

        

        

      

        

    