import React, { useState} from 'react'
import { BiLike } from "react-icons/bi";

import { FiX } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PostCardOfCard from './PostCardOfCard'


const PostCard = ({ id, name, profile_image, description, images, like, comments, updated }) => {
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

    // useEffect(() => {
    //     totalVote();
    //     printData();
    //     dateData();
    // },[]);



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
            <div className='p-1'>


                <section className=' w-full  mx-auto py-1 md:py-4 my-1 shadow-lg rounded-md border bg-white' key={uuidv4()}>
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



                    <div className='mx-4 md:my-1 lg:my-2'>

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

                            <PostCardOfCard images={images} />

                        </div>


                    </div>




                    <div className='mx-4 grid grid-cols-2'>
                        <div>{print && <h2 className='font-semibold'>{count} {Vote}</h2>}</div>
                        <div>{print && <button className='font-semibold float-right'>{count} Coments</button>}</div>
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
                    </div>



                </section>


            </div>
        </div>
    );
};

export default PostCard;