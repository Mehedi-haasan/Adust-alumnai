import React, { useState, useEffect } from "react";
import VoteCard from '../Blog/VoteCard'
import PostCard from "../Card/PostCard";
import Carousel from "../Slider/Carousel";
import MyBlog from "./MyBlog";
import { Icon } from "@iconify/react";


const Profile = () => {
  const jamai = "Jamai"
  const [data, setData] = useState([])
  const Alldata = [
    {
      data: "Studied at Atish Dipankar University of Science & Technology-ADUST",
    },
    {
      data: "Studied at Nabakumar Institution and Dr. Shahidullah College",
    },
    {
      data: "Went to Ghonar chala high school",
    },
  ]

  // const filterData = [
  //   {
  //     id: 1,
  //     name: "Mehedi hasan",
  //     profile_image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //     description: "জাপানে অনুষ্ঠিত ৬৪তম আন্তর্জাতিক গণিত অলিম্পিয়াডে ৩টি ব্রোঞ্জ এবং ২টি সম্মানজনক স্বীকৃতি পেয়েছে বাংলাদেশ গণিত দল। এবারের প্রতিযোগিতায় অংশ নেয় মোট ১১২টি দেশের ৬১৮ শিক্ষার্থী৷ এর মধ্যে দলীয় ভাবে প্রথম হয়েছে চীন, এরপরে আছে যথাক্রমে আমেরিকা এবং দক্ষিণ কোরিয়া৷ এছাড়া দক্ষিণ এশিয়ার মধ্যে প্রথম হয়েছে ভারত। বিশ্বে তাদের অবস্থান ৯ম। বিশ্বে ৪৬ তম হওয়ার পাশাপাশি দক্ষিণ এশিয়ার দেশগুলোর মধ্যে দ্বিতীয় অবস্থানে আছে বাংলাদেশ৷",
  //     images: [
  //       {
  //         id: 1,
  //         image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //       },
  //       {
  //         id: 2,
  //         image: "https://img.freepik.com/free-photo/man-wearing-headphones-sits-computer-with-computer-screen-that-says-call-it_1340-37825.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //       },
  //       {
  //         id: 2,
  //         image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //       },
  //       {
  //         id: 4,
  //         image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //       },
  //       {
  //         id: 5,
  //         image: "https://img.freepik.com/free-photo/man-wearing-headphones-sits-computer-with-computer-screen-that-says-call-it_1340-37825.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //       },
  //       {
  //         id: 6,
  //         image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //       },
  //     ],
  //     like: 90,
  //     comments: [
  //       {
  //         prifile_image: "",
  //         comment: "Beautifull",
  //         coment_date: ""
  //       },
  //       {
  //         prifile_image: "",
  //         comment: "Nice",
  //         coment_date: ""
  //       },
  //       {
  //         prifile_image: "",
  //         comment: "Wow",
  //         coment_date: ""
  //       },
  //     ],
  //     updated: "10/1/2024",
  //   },
  //   {
  //     id: 2,
  //     name: "Mehedi hasan",
  //     profile_image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //     description: "জাপানে অনুষ্ঠিত ৬৪তম আন্তর্জাতিক গণিত অলিম্পিয়াডে ৩টি ব্রোঞ্জ এবং ২টি সম্মানজনক স্বীকৃতি পেয়েছে বাংলাদেশ গণিত দল। এবারের প্রতিযোগিতায় অংশ নেয় মোট ১১২টি দেশের ৬১৮ শিক্ষার্থী৷ এর মধ্যে দলীয় ভাবে প্রথম হয়েছে চীন, এরপরে আছে যথাক্রমে আমেরিকা এবং দক্ষিণ কোরিয়া৷ এছাড়া দক্ষিণ এশিয়ার মধ্যে প্রথম হয়েছে ভারত। বিশ্বে তাদের অবস্থান ৯ম। বিশ্বে ৪৬ তম হওয়ার পাশাপাশি দক্ষিণ এশিয়ার দেশগুলোর মধ্যে দ্বিতীয় অবস্থানে আছে বাংলাদেশ৷",
  //     images: [
  //       {
  //         id: 2,
  //         image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //       },
  //       {
  //         id: 2,
  //         image: "https://img.freepik.com/free-photo/man-wearing-headphones-sits-computer-with-computer-screen-that-says-call-it_1340-37825.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //       },
  //       {
  //         id: 2,
  //         image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //       },
  //     ],
  //     like: 90,
  //     comments: [
  //       {
  //         prifile_image: "",
  //         comment: "Beautifull",
  //         coment_date: ""
  //       },
  //       {
  //         prifile_image: "",
  //         comment: "Nice",
  //         coment_date: ""
  //       },
  //       {
  //         prifile_image: "",
  //         comment: "Wow",
  //         coment_date: ""
  //       },
  //     ],
  //     updated: "10/1/2024",
  //   },
  //   {
  //     id: 3,
  //     name: "Mehedi hasan",
  //     profile_image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //     description: "জাপানে অনুষ্ঠিত ৬৪তম আন্তর্জাতিক গণিত অলিম্পিয়াডে ৩টি ব্রোঞ্জ এবং ২টি সম্মানজনক স্বীকৃতি পেয়েছে বাংলাদেশ গণিত দল। এবারের প্রতিযোগিতায় অংশ নেয় মোট ১১২টি দেশের ৬১৮ শিক্ষার্থী৷ এর মধ্যে দলীয় ভাবে প্রথম হয়েছে চীন, এরপরে আছে যথাক্রমে আমেরিকা এবং দক্ষিণ কোরিয়া৷ এছাড়া দক্ষিণ এশিয়ার মধ্যে প্রথম হয়েছে ভারত। বিশ্বে তাদের অবস্থান ৯ম। বিশ্বে ৪৬ তম হওয়ার পাশাপাশি দক্ষিণ এশিয়ার দেশগুলোর মধ্যে দ্বিতীয় অবস্থানে আছে বাংলাদেশ৷",
  //     images: [
  //       {
  //         id: 2,
  //         image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //       },
  //       {
  //         id: 2,
  //         image: "https://img.freepik.com/free-photo/man-wearing-headphones-sits-computer-with-computer-screen-that-says-call-it_1340-37825.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //       },
  //       {
  //         id: 2,
  //         image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //       },
  //     ],
  //     like: 90,
  //     comments: [
  //       {
  //         prifile_image: "",
  //         comment: "Beautifull",
  //         coment_date: ""
  //       },
  //       {
  //         prifile_image: "",
  //         comment: "Nice",
  //         coment_date: ""
  //       },
  //       {
  //         prifile_image: "",
  //         comment: "Wow",
  //         coment_date: ""
  //       },
  //     ],
  //     updated: "10/1/2024",
  //   },
  //   {
  //     id: 4,
  //     name: "Mehedi hasan",
  //     profile_image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //     description: "জাপানে অনুষ্ঠিত ৬৪তম আন্তর্জাতিক গণিত অলিম্পিয়াডে ৩টি ব্রোঞ্জ এবং ২টি সম্মানজনক স্বীকৃতি পেয়েছে বাংলাদেশ গণিত দল। এবারের প্রতিযোগিতায় অংশ নেয় মোট ১১২টি দেশের ৬১৮ শিক্ষার্থী৷ এর মধ্যে দলীয় ভাবে প্রথম হয়েছে চীন, এরপরে আছে যথাক্রমে আমেরিকা এবং দক্ষিণ কোরিয়া৷ এছাড়া দক্ষিণ এশিয়ার মধ্যে প্রথম হয়েছে ভারত। বিশ্বে তাদের অবস্থান ৯ম। বিশ্বে ৪৬ তম হওয়ার পাশাপাশি দক্ষিণ এশিয়ার দেশগুলোর মধ্যে দ্বিতীয় অবস্থানে আছে বাংলাদেশ৷",
  //     images: [
  //       {
  //         id: 2,
  //         image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //       },
  //       {
  //         id: 2,
  //         image: "https://img.freepik.com/free-photo/man-wearing-headphones-sits-computer-with-computer-screen-that-says-call-it_1340-37825.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //       },
  //       {
  //         id: 2,
  //         image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
  //       },
  //     ],
  //     like: 90,
  //     comments: [
  //       {
  //         prifile_image: "",
  //         comment: "Beautifull",
  //         coment_date: ""
  //       },
  //       {
  //         prifile_image: "",
  //         comment: "Nice",
  //         coment_date: ""
  //       },
  //       {
  //         prifile_image: "",
  //         comment: "Wow",
  //         coment_date: ""
  //       },
  //     ],
  //     updated: "10/1/2024",
  //   }
  // ]

  const fetchData = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch(`http://localhost:8050/api/get/user/blogs`, {
      method: 'GET',
      headers: {
        'authorization': token,
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const data = await response.json()
    setData(data.items)
  }

  useEffect(() => {
    fetchData();
  }, [])



  return (
    <div className="w-full">
      <div className="shadow-lg">
        <div className="w-full md:w-[80%] lg:w-[70%]  mx-auto">
          <div className="pb-[6%]">
            <div className="">
              <div className="relative">
                <div className="absolute ml-[3%] bottom-[-15%]">
                  <Icon className="h-8 w-8 p-1 rounded-full absolute right-1 bg-gray-300 lg:right-2 border-2 shadow-lg bottom-1 lg:bottom-2" icon="bi:camera-fill"/>
                  {/* <img className="h-8 w-8 rounded-full absolute right-1 lg:right-2 border-2 shadow-lg bottom-1 lg:bottom-2" src="https://img.freepik.com/premium-photo/man-wearing-pair-glasses-with-brand-na_670382-25510.jpg?size=626&ext=jpg&uid=R129270920&ga=GA1.1.739182794.1705853040&semt=ais_ai_generated" alt="" /> */}
                  <img className="h-[110px] lg:h-[150px] w-[110px] lg:w-[150px]  border-4 shadow-lg rounded-full " src="https://img.freepik.com/free-photo/fashion-man-photography_1409-5585.jpg?size=626&ext=jpg&uid=R129270920&ga=GA1.1.739182794.1705853040&semt=ais_ai_generated" alt="" />
                </div>
                <div className="">
                  <img className="w-full rounded h-[200px] md:h-[300px] lg:h-[500px]" src="https://img.freepik.com/free-photo/fashion-man-photography_1409-5585.jpg?size=626&ext=jpg&uid=R129270920&ga=GA1.1.739182794.1705853040&semt=ais_ai_generated" alt="" />
                </div>

              </div>
            </div>

          </div>
          <h1 className="ml-[3%] p-3 text-2xl lg:text-3xl font-semibold">Mehedi hasan <span>({jamai})</span></h1>
        </div>
      </div>


      <div className="w-full md:w-[80%] lg:w-[70%] mt-10 mx-auto">

        <div className="grid grid-cols-12 gap-4">
          <div className="grid col-span-12 md:col-span-5  rounded-md ">
            <div>
              <div className="pb-2 rounded bg-white shadow-lg">
                <h1 className="p-3 font-semibold text-xl">Intro</h1>
                {
                  Alldata.map((data) => (
                    <h1 className="pt-1 px-3">{data.data}</h1>
                  ))
                }

                <button className="p-1 my-2 bg-[#F0F2F5] w-[96%] block mx-auto rounded-md border">Edit Details</button>
                <button className="p-1 my-2 bg-[#F0F2F5] w-[96%] block mx-auto rounded-md border">Add Feature</button>
              </div>

              <div className="pb-2 shadow-lg mt-3 bg-white rounded">
                <h1 className="p-3 font-semibold text-xl">Images</h1>

              </div>

            </div>
          </div>

          <div className="grid col-span-12 md:col-span-7 rounded-md">
            <div className="flex p-3 bg-white shadow-lg rounded-md">
              <img className="h-10 w-10 rounded-full right-1 lg:right-2 border-2 bottom-1 lg:bottom-2" src="https://img.freepik.com/premium-photo/man-wearing-pair-glasses-with-brand-na_670382-25510.jpg?size=626&ext=jpg&uid=R129270920&ga=GA1.1.739182794.1705853040&semt=ais_ai_generated" alt="" />
              <div><input className="ml-3 focus:outline-none border p-1.5 rounded-lg" placeholder="Whats on your mind" /></div>
            </div>
            <div className=" my-2 bg-white rounded-md">
              <div className="shadow-lg px-2 py-1 rounded-md"><h1 className="p-3 font-semibold text-xl">Posts</h1></div>
              <div className='py-1'>
                {
                  data.map(({ id, name, image_url, user, title, message, images, like, comments, updated }) => {
                    return <MyBlog key={id} id={id} name={name} user={user} title={title} image_url={image_url} message={message} images={images} like={like} comments={comments} updated={updated} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Profile;
