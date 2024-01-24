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






const VoteCard = ({ id, name, profile_image, description, images, like, comments, updated }) => {

    const [caption, setCaption] = useState("জাপানে অনুষ্ঠিত ৬৪তম আন্তর্জাতিক গণিত অলিম্পিয়াডে ৩টি ব্রোঞ্জ এবং ২টি সম্মানজনক স্বীকৃতি পেয়েছে বাংলাদেশ গণিত দল। এবারের প্রতিযোগিতায় অংশ নেয় মোট ১১২টি দেশের ৬১৮ শিক্ষার্থী৷ এর মধ্যে দলীয় ভাবে প্রথম হয়েছে চীন, এরপরে আছে যথাক্রমে আমেরিকা এবং দক্ষিণ কোরিয়া৷ এছাড়া দক্ষিণ এশিয়ার মধ্যে প্রথম হয়েছে ভারত। বিশ্বে তাদের অবস্থান ৯ম। বিশ্বে ৪৬ তম হওয়ার পাশাপাশি দক্ষিণ এশিয়ার দেশগুলোর মধ্যে দ্বিতীয় অবস্থানে আছে বাংলাদেশ৷");
    const [print, setPrint] = useState(false);
    const [count, setCount] = useState(0);
    const [Vote, setVote] = useState('');
    const [date, setDate] = useState(true);
    const [share, setShare] = useState(false);
    const [showMore, setShowMore] = useState(false);


    const handleShare = () => {
        setShare(!share);
        console.log('clicked');
    }
    const handleVote = () => {
        const like = count + 1;
        setCount(like);
    }
    const handleCross = () => {

    }
    const dateData = () => {
        setDate(true);
    }
    const link = "ksudfh8ewufwef";

    const copyText = () => {
        navigator.clipboard.writeText(link);
    }


    const toggleText = () => {
        setShowMore(!showMore);
    };

    const totalVote = () => {
        if (count === 1) {
            setVote("Like");
        }
        else {
            setVote("Likes");
        }
    }
    const printData = () => {
        if (count === 1) {
            setPrint(true);
        }
    }

    useEffect(() => {
        totalVote();
        printData();
        dateData();
    });



    var settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 10000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,

        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div className='bg-opacity-50 '>
            {/* bg-gradient-to-br shadow-md from-slate-50 to-black lg:to-red-100 */}
            <div className='p-1'>


                <section className='relative w-full sm:w-[80%] md:w-[55%] lg:w-[50%] xl:w-[40%] mx-auto py-1 md:py-4 my-1 shadow-lg rounded-md border bg-white' key={uuidv4()}>
                    <div className='grid grid-cols-12 mx-4 '>
                        <div className='grid col-span-10 py-1'>
                            <div className='flex'>
                                <div><img src={profile_image} alt='flag' className='h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full' /></div>
                                <div>
                                    <NavLink className='md:text-2xl ml-3 font-semibold'>{name}</NavLink>
                                    <h1 className='ml-3 text-xs'>Jan 6 2024</h1>
                                </div>
                            </div>
                        </div>

                        <div className='grid col-span-2 float-right'>
                            <p className='p-2 md:p-3'><button className='float-right ml-4 font-bold md:text-3xl' onClick={handleCross}><FiX className='opacity-75' /></button></p>
                        </div>
                    </div>



                    <div className='mx-4 md:my-1 lg:my-2 relative'>

                        <div className='mb-5 md:mb-8'>

                            <div>
                                {showMore ? (
                                    <p className='text-xs md:text-sm lg:text-md'>{description}</p>
                                ) : (
                                    <p className='text-xs md:text-sm lg:text-md'>{description.slice(0, 100)}...</p>
                                )}
                                <button className='font-bold' onClick={toggleText}>
                                    {showMore ? <p className='text-xs md:text-sm lg:text-md'>hide..</p> : <p className='text-xs md:text-sm lg:text-md'>See more..</p>}
                                </button>
                            </div>

                            <Slider {...settings}>
                                {images.map(({ image }) => (
                                    <div key={id} className="">
                                        <CardContest image={image} />
                                    </div>
                                ))}
                            </Slider>

                        </div>


                    </div>



               
                   <div className='mx-4 grid grid-cols-2'>
                        <div>{ print && <h2 className='font-semibold'>{count} {Vote}</h2>}</div>
                        <div>{ print && <button className='font-semibold float-right'>{count} Coments</button>}</div>
                    </div>

             

                    <div className='grid grid-cols-2 mx-4 mb-1 md:mb-2  py-1 relative'>
                        <div className=''>
                            <div className='flex'>
                                <button className='flex bg-gray-300 px-10 md:px-12 lg:px-16 py-1 rounded text-lg' onClick={handleVote} >
                                    <BiLike className='text-2xl md:text-3xl text-slate-600 hover:text-white m-auto' />
                                </button>
                            </div>
                        </div>

                        <div>
                            <button className='float-right border rounded py-1 font-semibold px-4 block bg-[#D1D5DB]'>Comment</button>
                        </div>

                        {/* <div className='relative'>
                        <button className='rounded text-xl bg-gray-300 px-4 md:px-8 lg:px-10 py-1 flex float-right' onClick={handleShare}><IoMdShareAlt className='text-2xl text-3xl text-slate-500' /> Share</button>
                      </div> */}
                    </div>


                    {/* <div className='mx-auto w-[315px]'>
                  {
                    share && <div className={`absolute bg-white border shadow-xl mx-auto  p-2 z-40 w-[315px] h-[200px] rounded-xl ${share ? "opacity-100" : "opacity-0"}`}>
                      <div className='flex mb-2'>
                        <h3 className='text-black md:text-xl font-bold p-2'>Share</h3>
                        <button className='font-bold md:text-2xl ml-[200px]' onClick={handleShare}><FiX /></button>
                      </div>
                      <ul className='flex gap-4'>
                        <li><NavLink className='text-white'><Icon icon="logos:facebook" className='mt-1 ml-2 w-[50px] h-[50px] lg:h-[50px] lg:w-[50px]' /></NavLink></li>
                        <li><NavLink className='text-white'><Icon icon="skill-icons:instagram" className='mt-1 ml-2 w-[50px] h-[50px] lg:h-[50px] lg:w-[50px]' /></NavLink></li>
                        <li><NavLink className='text-white'><Icon icon="skill-icons:twitter" className='mt-1 ml-2 w-[50px] h-[50px] lg:h-[50px] lg:w-[50px]' /></NavLink></li>
                        <li><NavLink className='text-white'><Icon icon="logos:tiktok-icon" className='mt-1 ml-2 w-[50px] h-[50px] lg:h-[50px] lg:w-[50px]' /></NavLink></li>
                      </ul>
                      <div className='w-[280px] h-[42px] border mx-auto mt-5 rounded flex'>
                        <div className='w-[212px]'><p className='p-2 font-semibold'>Hello World</p> </div>
                        <button onClick={copyText} className='float-right bg-blue-700 text-white font-semibold px-3 h-[32px] mt-1 rounded-xl'>Copy</button>
                      </div>

                    </div>
                  }
                </div> */}
                </section>


            </div>
        </div>
    )
}

export default VoteCard;
