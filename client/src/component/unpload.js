import axios from 'axios'

export const uploadcloudnary = async (file)=>{
    // console.log("files "+file);
    const formData = new FormData();
    formData.append("file",file)
    formData.append("upload_preset", "xpwslrvs");
    formData.append("cloud_name", "dniaxreye");
    try{
        // const {data} = await axios.post("https://api.cloudinary.com/v1_1/dbvurfvz8/image/upload", formData)
        const {data} = await axios.post("https://api.cloudinary.com/v1_1/dniaxreye/image/upload", formData)
        console.log(" data "+JSON.stringify(data));
        return {url: data?.secure_url }

    }catch(e){
        console.log("error i on upload :"+e);
    }
  
}

// gmail password
// glabiotech10@gmail.com
// glabiotech@10