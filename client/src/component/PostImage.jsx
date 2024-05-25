import React, { useState, useEffect } from "react";
import { uploadcloudnary } from "./unpload.js";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function PostImage() {
  const notify1 = (info) => toast.success(info);
  const notify2 = (info) => toast.info(info);
  const notify4 = (msg) => toast.error(msg);

  const [name, setName] = useState("");
  const navigate = useNavigate();

  const [links, setLinks] = useState([]);
  const [ImageChange, setImageChange] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const handleImageSubmit = async (e) => {
    e.preventDefault();
    notify2("Image are in Progress..\nPlease wait until it show preview");
    try {
      let arr = [];
      const totalFiles = ImageChange.length;
      let uploadedFiles = 0;

      for (let i = 0; i < ImageChange.length; i++) {
        await uploadcloudnary(ImageChange[i], (progressEvent) => {
          // Calculate and update upload progress
          const percentage = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentage);
        })
          .then((data) => {
            arr.push(data);
            uploadedFiles++;
          })
          .finally(() => {
            // Check if all files have been uploaded
            if (uploadedFiles === totalFiles) {
              setLinks(arr);
              setUploadProgress(0); // Reset upload progress
            }
          });
      }
    } catch (err) {
      console.log("err in PosterEvent.jsx in HandleImage: " + err);
      setUploadProgress(0); // Reset upload progress on error
    }
  };

  useEffect(() => {
    console.log("done");
  }, [name, links, uploadProgress]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const post = {
        event: name,
        imageUrl: links.map((link) => link.url), // Use the links state instead of imageUrl state
      };

      console.log("post " + JSON.stringify(post));
      const response = await axios
        .post("http://localhost:8080/saveImage", post)
        .then((res) => {
          console.log(res.data);
          notify1(res.data.message);
        })
        .then(() => navigate("/gallery"))
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("An error occurred:", error);
      notify4(error);
    }
  };

  return (
    <section className="h-screen bg-white">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="w-full"
              alt="Phone image"
            />
          </div>

          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <div className="flex flex-row items-center justify-center lg:justify-start">
              <p className="mb-5 font-bold underline mr-4 text-2xl">
                Gallery Post
              </p>
            </div>

            <div className="mb-6">
              <label className="pointer-events-none  mr-2 text-black">
                Event Name:
              </label>
              <div>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="underline-offset-1 mt-1"
                  placeholder="Event Name...."
                />
              </div>
            </div>

            <div>
              <div className="mb-6">
                <label className="pointer-events-none mr-2 text-black">
                  Upload:
                </label>
                <input
                  type="file"
                  className="mx-2 rounded-md p-1"
                  multiple
                  onChange={(e) => setImageChange(e.target.files)}
                />
                <div className="flex gap-x-1.5 m-3">
                  {links &&
                    links.length > 0 &&
                    links.map((link, indx) => {
                      return (
                        <div key={indx} className="">
                          <img
                            width={100}
                            height={200}
                            src={link?.url}
                            alt=""
                          />
                        </div>
                      );
                    })}
                </div>
                <button
                  onClick={handleImageSubmit}
                  className="h-[35px] p-1 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Upload
                </button>
                {uploadProgress > 0 && <div>{uploadProgress}% uploaded</div>}
              </div>
            </div>

            <button
              onClick={(e) => handleSubmit(e)}
              className='className="h-[35px] p-1 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            '
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
