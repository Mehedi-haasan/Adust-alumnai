import React, { useState, useEffect } from 'react'
import { IoMdShareAlt } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { Icon } from "@iconify/react";

import { FiX } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "react-slick";
import CardContest from '../Card/CardContest'
import VoteCard from './VoteCard';






const Vote = () => {



  const filterData = [
    {
      id: 1,
      name: "Mehedi hasan",
      profile_image:"https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
      description: "জাপানে অনুষ্ঠিত ৬৪তম আন্তর্জাতিক গণিত অলিম্পিয়াডে ৩টি ব্রোঞ্জ এবং ২টি সম্মানজনক স্বীকৃতি পেয়েছে বাংলাদেশ গণিত দল। এবারের প্রতিযোগিতায় অংশ নেয় মোট ১১২টি দেশের ৬১৮ শিক্ষার্থী৷ এর মধ্যে দলীয় ভাবে প্রথম হয়েছে চীন, এরপরে আছে যথাক্রমে আমেরিকা এবং দক্ষিণ কোরিয়া৷ এছাড়া দক্ষিণ এশিয়ার মধ্যে প্রথম হয়েছে ভারত। বিশ্বে তাদের অবস্থান ৯ম। বিশ্বে ৪৬ তম হওয়ার পাশাপাশি দক্ষিণ এশিয়ার দেশগুলোর মধ্যে দ্বিতীয় অবস্থানে আছে বাংলাদেশ৷",
      images: [
        {
          id:1,
          image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
        { id:2,
          image: "https://img.freepik.com/free-photo/man-wearing-headphones-sits-computer-with-computer-screen-that-says-call-it_1340-37825.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
        { id:2,
          image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
      ],
      like: 90,
      comments: [
        {
          prifile_image:"",
          comment: "Beautifull",
          coment_date:""
        },
        {
          prifile_image:"",
          comment: "Nice",
          coment_date:""
        },
        {
          prifile_image:"",
          comment: "Wow",
          coment_date:""
        },
      ],
      updated:"10/1/2024",
    },




    {
      id: 2,
      name: "Mehedi hasan",
      profile_image:"https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
      description: "জাপানে অনুষ্ঠিত ৬৪তম আন্তর্জাতিক গণিত অলিম্পিয়াডে ৩টি ব্রোঞ্জ এবং ২টি সম্মানজনক স্বীকৃতি পেয়েছে বাংলাদেশ গণিত দল। এবারের প্রতিযোগিতায় অংশ নেয় মোট ১১২টি দেশের ৬১৮ শিক্ষার্থী৷ এর মধ্যে দলীয় ভাবে প্রথম হয়েছে চীন, এরপরে আছে যথাক্রমে আমেরিকা এবং দক্ষিণ কোরিয়া৷ এছাড়া দক্ষিণ এশিয়ার মধ্যে প্রথম হয়েছে ভারত। বিশ্বে তাদের অবস্থান ৯ম। বিশ্বে ৪৬ তম হওয়ার পাশাপাশি দক্ষিণ এশিয়ার দেশগুলোর মধ্যে দ্বিতীয় অবস্থানে আছে বাংলাদেশ৷",
      images: [
        {
          id:2,
          image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
        {
          id:2,
          image: "https://img.freepik.com/free-photo/man-wearing-headphones-sits-computer-with-computer-screen-that-says-call-it_1340-37825.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
        {
          id:2,
          image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
      ],
      like: 90,
      comments: [
        {
          prifile_image:"",
          comment: "Beautifull",
          coment_date:""
        },
        {
          prifile_image:"",
          comment: "Nice",
          coment_date:""
        },
        {
          prifile_image:"",
          comment: "Wow",
          coment_date:""
        },
      ],
      updated:"10/1/2024",
    },
    {
      id: 3,
      name: "Mehedi hasan",
      profile_image:"https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
      description: "জাপানে অনুষ্ঠিত ৬৪তম আন্তর্জাতিক গণিত অলিম্পিয়াডে ৩টি ব্রোঞ্জ এবং ২টি সম্মানজনক স্বীকৃতি পেয়েছে বাংলাদেশ গণিত দল। এবারের প্রতিযোগিতায় অংশ নেয় মোট ১১২টি দেশের ৬১৮ শিক্ষার্থী৷ এর মধ্যে দলীয় ভাবে প্রথম হয়েছে চীন, এরপরে আছে যথাক্রমে আমেরিকা এবং দক্ষিণ কোরিয়া৷ এছাড়া দক্ষিণ এশিয়ার মধ্যে প্রথম হয়েছে ভারত। বিশ্বে তাদের অবস্থান ৯ম। বিশ্বে ৪৬ তম হওয়ার পাশাপাশি দক্ষিণ এশিয়ার দেশগুলোর মধ্যে দ্বিতীয় অবস্থানে আছে বাংলাদেশ৷",
      images: [
        {
          id:2,
          image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
        {
          id:2,
          image: "https://img.freepik.com/free-photo/man-wearing-headphones-sits-computer-with-computer-screen-that-says-call-it_1340-37825.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
        {
          id:2,
          image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
      ],
      like: 90,
      comments: [
        {
          prifile_image:"",
          comment: "Beautifull",
          coment_date:""
        },
        {
          prifile_image:"",
          comment: "Nice",
          coment_date:""
        },
        {
          prifile_image:"",
          comment: "Wow",
          coment_date:""
        },
      ],
      updated:"10/1/2024",
    },
    {
      id: 4,
      name: "Mehedi hasan",
      profile_image:"https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
      description: "জাপানে অনুষ্ঠিত ৬৪তম আন্তর্জাতিক গণিত অলিম্পিয়াডে ৩টি ব্রোঞ্জ এবং ২টি সম্মানজনক স্বীকৃতি পেয়েছে বাংলাদেশ গণিত দল। এবারের প্রতিযোগিতায় অংশ নেয় মোট ১১২টি দেশের ৬১৮ শিক্ষার্থী৷ এর মধ্যে দলীয় ভাবে প্রথম হয়েছে চীন, এরপরে আছে যথাক্রমে আমেরিকা এবং দক্ষিণ কোরিয়া৷ এছাড়া দক্ষিণ এশিয়ার মধ্যে প্রথম হয়েছে ভারত। বিশ্বে তাদের অবস্থান ৯ম। বিশ্বে ৪৬ তম হওয়ার পাশাপাশি দক্ষিণ এশিয়ার দেশগুলোর মধ্যে দ্বিতীয় অবস্থানে আছে বাংলাদেশ৷",
      images: [
        {
          id:2,
          image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
        {
          id:2,
          image: "https://img.freepik.com/free-photo/man-wearing-headphones-sits-computer-with-computer-screen-that-says-call-it_1340-37825.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
        {
          id:2,
          image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
      ],
      like: 90,
      comments: [
        {
          prifile_image:"",
          comment: "Beautifull",
          coment_date:""
        },
        {
          prifile_image:"",
          comment: "Nice",
          coment_date:""
        },
        {
          prifile_image:"",
          comment: "Wow",
          coment_date:""
        },
      ],
      updated:"10/1/2024",
    }
  ]


  return (
    <div className='bg-opacity-50 bg-gradient-to-br from-slate-50 to-black lg:to-red-100'>
      <div className='p-1'>
        {
          filterData.map(({id,name,profile_image,description,images,like,comments,updated}) => {
            return <VoteCard id={id} name={name} profile_image={profile_image} description={description} images={images} like={like} comments={comments} updated={updated}/>
          })
        }
      </div>
    </div>
  )
}

export default Vote;
