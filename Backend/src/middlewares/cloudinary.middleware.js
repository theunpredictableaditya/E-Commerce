import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
})

async function uploadOnCloudinary (localFilePath) {
    try {
        if (!localFilePath) return null;
    
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
    
        //unlinking file after adding it to the cloudinary
        fs.unlinkSync(localFilePath);
        console.log("File has been uploaded successfully on cloudinary", response.url)
        return response;        
    } catch (error) {
        console.log(error);
        fs.unlinkSync(localFilePath);  //remove the file saved locally if not uploaded successfully
        return null;
    }
}

export {uploadOnCloudinary}