import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const InputPodCast = () => {
    const [frontImage, setFrontImage] = useState(null);
    const [audioFile, setAudioFile] = useState(null)
    const [dragging, setDragging] = useState(false);
    const [inputs, setInputs] = useState({
        title:"",
        description:"",
        category:""
    });
    const handleChangeImage=(e)=>{
        e.preventDefault();
        const file =e.target.files[0];
        setFrontImage(file);
    };
    const handleDragEnter=(e)=>{
       e.preventDefault();
       setDragging(true);
    };
    const handleDragOver=(e)=>{
        e.preventDefault();
     };
     const handleDropImage=(e)=>{
        console.log("dropped")
        e.preventDefault();
        setDragging(false);
        const file=e.dataTransfer.files[0];
        setFrontImage(file);





     }
   const handleAudioFile=(e)=>{
    e.preventDefault();
    const file =e.target.files[0];
        setAudioFile(file);
   };
   const onChangeInputs=(e)=>{
    const {name,value}=e.target
    setInputs({...inputs,[name]:value})
   };
   const handleSubmitPodCast=async()=>{
    // console.log(inputs,frontImage,audioFile);
const data= new FormData();
data.append("title",inputs.title);
data.append("description",inputs.description);
data.append("category", inputs.category); //

data.append("frontImage",frontImage);
data.append("audioFile",audioFile);
try {
    const res=await axios.post("http://localhost:1000/api/v1/add-podcast",data,{   headers: {
      "Content-Type": "multipart/form-data",

    },
    withCredentials:true});
    toast.success(res.data.message);
    console.log(res);
} catch (error) {
    toast.error(error.response.data.message);
    console.log(error);

}

finally{
    setInputs({
        title:"",
        description:"",
        category:""
    });
    setFrontImage(null);
    setAudioFile(null);
}

   }
 
  return (
    <div className="mt-0 px-4 lg:px-16">
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
      <h1 className=" py-2 text-3xl font-bold text-zinc-800 mb-8 text-center lg:text-left">
        🎙️ Create Your Podcast
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Thumbnail Upload */}
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <div className="h-[200px] lg:h-[300px] w-full border-2 border-dashed border-zinc-600 rounded-md flex items-center justify-center bg-zinc-50 hover:bg-zinc-300 transition-all duration-300"            
             onDragEnter={handleDragEnter} onDragLeave={handleDragOver} onDrop={handleDropImage}   onDragOver={handleDragOver}>           
            <input
              type="file"
              accept="image/*"
              id="file"
              name="frontImage"
              className="hidden"
              onChange={handleChangeImage}
            />
            {frontImage?(<img src={URL.createObjectURL(frontImage)} alt="thumbnail" className='w-full h-full '/>):<>  <label
              htmlFor="file"
              className={`w-full h-full flex items-center justify-center ${dragging ? "bg-blue-200":""} cursor-pointer text-zinc-600 text-center px-4"`} 

            >
              <span className="font-medium">📁 Drag & drop thumbnail or click to browse</span>
            </label></>}
          
          </div>
        </div>

        {/* Form Inputs */}
        <div className="w-full lg:w-2/3 space-y-5">
          {/* Title */}
          <div className="flex flex-col">
            <label htmlFor="title" className="mb-1 text-zinc-700 font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="e.g. My First Podcast"
              className="px-4 py-2 border border-zinc-300 rounded outline-none focus:ring-2 focus:ring-blue-300"
           value={inputs.title}
           onChange={onChangeInputs}
           />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="mb-1 text-zinc-700 font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Give a brief overview of your podcast..."
              rows={4}
              className="px-4 py-2 border border-zinc-300 rounded outline-none focus:ring-2 focus:ring-blue-300"
              value={inputs.description}
              onChange={onChangeInputs}
              />
          </div>

          {/* Audio and Category */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Audio File */}
            <div className="flex flex-col w-full lg:w-1/2">
              <label htmlFor="audioFile" className="mb-1 text-zinc-700 font-medium">
                Select Audio File
              </label>
              <input
                type="file"
                accept=".mp3,.wav,.m4a,.ogg"
                name="audioFile"
                id="audioFile"
                className="px-4 py-1 border border-zinc-300 rounded outline-none file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                onChange={handleAudioFile}
              />
            </div>

            {/* Category */}
            <div className="flex flex-col w-full lg:w-1/2">
              <label htmlFor="category" className="mb-1 text-zinc-700 font-medium">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="px-4 py-2 border border-zinc-300 rounded outline-none focus:ring-2 focus:ring-blue-300"
                value={inputs.category}
                onChange={onChangeInputs} >
                <option value="" disabled >
                  Select a category
                </option>
                <option value="Comedy">Comedy</option>
                <option value="Business">Business</option>
                <option value="Education">Education</option>
                <option value="Hobbies">Hobbies</option>
                <option value="Government">Government</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button className="w-full bg-purple-600 text-white font-semibold py-2 rounded shadow hover:bg-blue-700 transition-all duration-300" onClick={handleSubmitPodCast}>
              🚀 Create Podcast
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPodCast;
