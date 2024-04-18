import React, { useEffect, useState } from 'react';

//components
import MerchantNavbar from '../component/MerchantNavbar';
import { useParams } from 'react-router-dom';
import ToggleSwitch from '../component/ToggleSwitch';
import MenuCard from '../component/MenuCard';

//icons
import { MdOutlineShare } from "react-icons/md";
import { FaAnglesRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";

//image
import Instagram from '../assets/Instagram.png';
import groupImage from '../assets/groupImage.png';
import eventnofound from '../assets/eventnofound.png'
import Restaurantmenu from '../assets/Restaurantmenu.png'
import Menucomment from '../component/Menucomment';

//dummydata
const restaurants = [
    {
        id: 1,
        name: "Cafe Riviera",
        quote: "Where taste meets tradition.",
        logo: "https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?t=st=1713279453~exp=1713283053~hmac=d5b70780de9da35de490a400a61713937ea89a7f46be51b92b5f3f30b3d98de3&w=740",
        Recommendation: 400,
    },
    {
        id: 2,
        name: "Bella Italia",
        quote: "Experience the flavors of Italy.",
        logo: "https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg?t=st=1713279482~exp=1713283082~hmac=36f585af39a60c2a2dca7e367379198fe45cf08c8354dae2d3799035d07d58a7&w=826",
        Recommendation: 700,
    },
    {
        id: 3,
        name: "Sushi Haven",
        quote: "Freshness served daily.",
        logo: "https://img.freepik.com/free-vector/flat-design-antojitos-logo-design-template_23-2149599172.jpg?t=st=1713279508~exp=1713283108~hmac=dd6e5b495fcfd8b2148ebf026b2c3dcde2670d39be3da9a2ee506d52a593ca92&w=740",
        Recommendation: 300,
    },
];


const MerchantProfile = () => {
    const { id } = useParams();
    const [dummyData, setDummyData] = useState(null);

    const fetchDummyData = () => {
        const foundData = restaurants.find(data => data.id == id);
        if (foundData) {
            setDummyData(foundData);
        }
    }
    useEffect(() => {
        fetchDummyData();
    }, []);

    //searchbar
    const [search, setSearch] = useState('');
    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }

    const handleRecommand = () => {
        let recommand = document.getElementById('recommand');
        // Check if the current background color is '#FFD628'
        if (recommand.style.backgroundColor === 'rgb(255, 214, 40)') {
            // If it's already '#FFD628', revert to the default color
            recommand.style.backgroundColor = '';
        } else {
            // If it's not '#FFD628', set it to '#FFD628'
            recommand.style.backgroundColor = '#FFD628';
        }
    }

    const [menus, setMenus] = useState(true);
    const [events, setEvents] = useState(false);
    const [offers, setoffers] = useState(false);
    const [filter, setFilter] = useState(false);

    const scrollToElement = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className='w-full h-fit'>
            <MerchantNavbar />

            {/* hero section */}
            <div className='relative  w-full h-fit pb-[15vh]'>
                <div className='bg-[#FFD628] w-full h-[25vh] rounded-b-3xl absolute z-[-1]'></div>
                <div className='bg-[#FFFFFF] w-[95%] md:w-[80%] h-fit mx-auto relative top-[10vh] shadow-md rounded-xl p-[1rem] md:p-[2rem] flex flex-row  justify-between items-center gap-[1rem]'>
                    <div className='sm:w-[70%] flex flex-col gap-[1.3rem]'>
                        <div className=' flex items-center  justify-evenly sm:justify-start'>
                            <img src={dummyData?.logo} alt='logo' className='w-[50px] md:w-[150px] aspect-square object-contain mix-blend-multiply' />
                            <div>
                                <p className='font-Roboto font-[600] text-[1.2rem] leading-[1.2rem] md:text-[2.4rem] md:leading-[2.4rem]'>{dummyData?.name}</p>
                                <p className=' text-[#0f172aca] font-Roboto font-[500] text-[.9rem] md:text-[1.2rem] md:leading-[1.8rem]'>{dummyData?.quote}</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-wrap gap-[.5rem] md:gap-[1rem] items-center justify-center sm:justify-start'>
                            <button
                                onClick={handleRecommand} id='recommand' className=' px-[.5rem] py-[.2rem] sm:px-[1rem] sm:py-[.85rem] border-[2.5px] border-[#FFD628] rounded-lg font-inter font-[600] sm:text-[1rem] text-[.8rem] '>Recommend</button>
                            <button className='p-[.3rem] sm:p-[1rem] border-[2.5px] border-[#FFD628] rounded-lg font-inter font-[600] '>
                                <MdOutlineShare className='sm:text-[1.2rem]' />
                            </button>
                            <button className='p-[.3rem] sm:p-[.6rem] border-[2.5px] border-[#FFD628] rounded-lg font-inter font-[600] '>
                                <img src={Instagram} alt='Instagram' className='w-[15px] sm:w-[30px] aspect-square' />
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[1rem] sm:gap-[2rem] '>
                        <div className='p-[.5rem] sm:p-[1rem] bg-[#0000001A] w-fit h-fit rounded-lg'>
                            <div className='w-fit flex gap-[1rem] items-center'>
                                <img src={groupImage} alt="groupImage" className='h-[20px] sm:h-[30px] lg:h-[40px] aspect-auto' />
                                <p className='block font-Roboto font-[600] md:text-[1.4rem] leading-[1.5rem]'>{dummyData?.Recommendation}</p>
                            </div>
                            <p className='block  font-Roboto font-[400] text-[.9rem] sm:text-[1.1rem] leading-[1.5rem]  mt-[.5rem] text-center'>Recommendation</p>
                        </div>
                        <button className='bg-[#004AAD] rounded-lg flex gap-[1rem] items-center justify-center sm:px-[1rem] text-white sm:py-[.5rem] px-[.5rem] py-[.3rem]'>
                            <p className=' font-sans font-[600] sm:text-[1.2rem] '>Pay Bill</p>
                            <FaAnglesRight className='sm:text-[1.2rem]' />
                        </button>
                    </div>
                </div>
            </div>

            <div className=' sticky top-0 pt-[3rem] w-[95%] md:w-[80%] mx-auto bg-white z-[100] '>
                <div className=' relative  '>
                    <div className='flex border-b-[2px] gap-[1.5rem]  px-[1rem]'>
                        <button
                            onClick={() => {
                                setMenus(!menus);
                                setEvents(false);
                                setoffers(false);
                            }} className={` font-inter font-[600] text-[1rem] leading-[1.6rem] ${menus ? ('text-[#004AAD] border-b-[5px] border-[#004AAD]') : ('text-black')}`}>Menu</button>
                        <button
                            onClick={() => {
                                setMenus(false);
                                setEvents(!events);
                                setoffers(false);
                            }} className={` font-inter font-[600] text-[1rem] leading-[1.6rem] ${events ? ('text-[#004AAD] border-b-[5px] border-[#004AAD]') : ('text-black')}`}>Events</button>
                        <button
                            onClick={() => {
                                setMenus(false);
                                setEvents(false);
                                setoffers(!offers);
                            }}
                            className={` font-inter font-[600] text-[1rem] leading-[1.6rem] ${offers ? ('text-[#004AAD] border-b-[5px] border-[#004AAD]') : ('text-black')} `}>Offers</button>
                    </div>

                    <div className=' flex sm:flex-row flex-col gap-[1rem] justify-between items-center py-[2rem] overflow-hidden border-b-2'>
                        <div className='relative w-fit  shadow-xl rounded-md border-2 '>
                            <input
                                className=' w-[260px] sm:w-[400px] focus:outline-none h-[3rem] px-[1rem]'
                                type="text"
                                placeholder='Search for dish'
                                value={search}
                                onChange={handleSearch} />
                            <CiSearch className=' absolute right-[1rem] top-[50%] translate-y-[-50%] text-[1.3rem]' />
                        </div>
                        <div className='flex gap-[1rem] relative left-[50%] sm:left-0 sm:translate-x-0 translate-x-[-50%] items-center w-fit'>
                            <div className='p-[.5rem] rounded-md border-2 flex items-center justify-start w-fit h-fit '>
                                <div className='bg-[#67CE67] rounded-full w-[10px] aspect-square'></div>
                            </div>
                            <ToggleSwitch />
                        </div>
                    </div>
                </div>
            </div>



            {/* menufilter */}
            <div className={`${filter ? ('max-w-[260px]') : ('hidden')}  bg-white shadow-lg py-[1rem] px-[1.5rem] rounded-md text-center fixed bottom-[5rem] left-[50%] translate-x-[-50%] z-[100]`}>
                <div className='text-[#5E5E5E] font-inter font-[700] text-[1.1rem] sm:text-[1.2rem] flex justify-around items-center border-b-2 py-[.5rem] gap-[1rem] '>
                    <p>Browse Menu</p>
                    <IoIosCloseCircleOutline
                        onClick={() => {
                            setFilter(!filter);
                        }}
                        className='text-[2rem] cursor-pointer' /></div>
                <p
                    onClick={() => {
                        setFilter(!filter);
                        scrollToElement('MostRecomended');
                    }} className='py-[.5rem] font-inter font-[400] sm:text-[1.1rem] cursor-pointer'>Most Recomended</p>
                <p onClick={() => {
                    setFilter(!filter);
                    scrollToElement('paneerProduct');
                }}
                    className='py-[.5rem] font-inter font-[400] sm:text-[1.1rem] cursor-pointer'>paneer Product</p>
                <p
                    onClick={() => {
                        setFilter(!filter);
                        scrollToElement('nonvegProduct');
                    }}
                    className='py-[.5rem] font-inter font-[400] sm:text-[1.1rem] cursor-pointer'>nonveg Product</p>
                <p onClick={() => {
                    setFilter(!filter);
                    scrollToElement('bread');
                }} className='py-[.5rem] font-inter font-[400] sm:text-[1.1rem] cursor-pointer'>bread</p>
            </div>


            {/* menucomment */}
            <Menucomment />

            {/* menu */}
            {
                menus &&
                <div>
                    {/* Restaurantmenu */}
                    <button
                        onClick={() => {
                            setFilter(!filter);
                        }}
                        className='px-[1rem] py-[.5rem] bg-[#FFD628] flex justify-around gap-[.5rem] items-center rounded-lg fixed bottom-[2rem] left-[50%] translate-x-[-50%] z-[100]'>
                        <img src={Restaurantmenu} alt="Restaurantmenu" />
                        <p className='font-inter font-[400] text-[1rem] leading-[1.5rem]'>Browse Menu</p>
                    </button>
                    <div className='w-[95%] md:w-[80%] mx-auto'>
                        {/* Most Recomended */}
                        <div id='MostRecomended' className='w-full h-fit py-[1rem]'>
                            <div className='w-full flex justify-between items-center my-[1rem]'>
                                <p className='font-Roboto font-[500] text-[1.4rem] leading-[3rem]'>Most Recomended</p>
                                <FaAngleDown className={`text-[1.4rem]`} />
                            </div>
                            <div className='flex flex-wrap items-center justify-center gap-[.5rem]'>
                                <MenuCard />
                                <MenuCard />
                                <MenuCard />
                                <MenuCard />
                            </div>
                        </div>
                        {/* Paneer Product */}
                        <div id='paneerProduct' className='w-full h-fit py-[1rem]'>
                            <div className='w-full flex justify-between items-center my-[1rem]'>
                                <p className='font-Roboto font-[500] text-[1.4rem] leading-[3rem]'>Paneer Product</p>
                                <FaAngleDown className={`text-[1.4rem]`} />
                            </div>
                            <div className='flex flex-wrap items-center justify-center gap-[.5rem]'>
                                <MenuCard />
                                <MenuCard />
                                <MenuCard />
                                <MenuCard />
                            </div>
                        </div>
                        {/* Nonveg Product */}
                        <div id='nonvegProduct' className='w-full h-fit py-[1rem]'>
                            <div className='w-full flex justify-between items-center my-[1rem]'>
                                <p className='font-Roboto font-[500] text-[1.4rem] leading-[3rem]'>NonVeg Product</p>
                                <FaAngleDown className={`text-[1.4rem]`} />
                            </div>
                            <div className='flex flex-wrap items-center justify-center gap-[.5rem]'>
                                <MenuCard />
                                <MenuCard />
                                <MenuCard />
                                <MenuCard />
                            </div>
                        </div>
                        {/* Bread */}
                        <div id='bread' className='w-full h-fit py-[1rem]'>
                            <div className='w-full flex justify-between items-center my-[1rem]'>
                                <p className='font-Roboto font-[500] text-[1.4rem] leading-[3rem]'>Bread</p>
                                <FaAngleDown className={`text-[1.4rem]`} />
                            </div>
                            <div className='flex flex-wrap items-center justify-center gap-[.5rem]'>
                                <MenuCard />
                                <MenuCard />
                                <MenuCard />
                                <MenuCard />
                            </div>
                        </div>
                    </div>
                </div>

            }

            {/* events  */}
            {
                events &&
                <div className='w-full flex flex-col items-center p-[2rem] pb-[6rem]'>
                    <img src={eventnofound} alt="eventnofound" className='max-w-[260px] aspect-auto' />
                    <p className=' font-Sen font-[700] text-[1.6rem] md:text-[2.4rem] leading-[3rem] text-center'>Opps ! no event found</p>
                    <p className=' font-Sen font-[400] md:text-[1.6rem] md:leading-[2rem] text-[#525C67] text-center'>Restaurant dont have any upcomming event </p>
                </div>
            }

            {/* offers  */}
            {
                offers &&
                <div className='w-full flex flex-col items-center p-[2rem] pb-[6rem]'>
                    <img src={eventnofound} alt="eventnofound" className='w-[200px] md:w-[260px] aspect-auto' />
                    <p className=' font-Sen font-[700] text-[1.6rem] md:text-[2.4rem] leading-[3rem] text-center'>Opps ! no offers found</p>
                    <p className=' font-Sen font-[400] md:text-[1.6rem] md:leading-[2rem] text-[#525C67] text-center'>Restaurant dont have any active offers</p>
                </div>
            }
        </div>
    )
}

export default MerchantProfile