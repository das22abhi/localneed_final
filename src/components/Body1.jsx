import React from 'react'
import Group2 from '../assets/Group 2.png'
import Phoneview from './Phoneview';
import relaxed from '../assets/doodle-5 1.png'
import compressed from '../assets/doodle-4 1.png'
import medicine_page from '../assets/medicine_page.jpeg'

function Body1() {
    return (
        <div className='w-full md:justify-end justify-center flex mt-[100px]' id='about'>
            <div className='w-[90%]'>
                <div className='flex justify-between items-center md:flex-row flex-col parent-container w-full'>
                    <div className='sub-parent-container-1 md:pl-[5%] md:w-[45%] md:min-w-[350px] w-fit'>
                        <Phoneview>
                            <div className='relative w-[200px] flex justify-center flex-col rounded-3xl bg-indigo-700 overflow-hidden'>
                                {/* <p className='text-[30px] pl-6 font-bold text-white'>Find Your Gadget</p> */}
                                <img src={medicine_page} alt="" className='h-[433px] w-[200px] object-cover' />
                                
                                <img src={relaxed} className='absolute h-[70px] bottom-5 left-[250px] rotate-3' alt="" />
                                <img src={compressed} className='absolute h-[70px] top-5 left-[-70px] rotate-[-30deg]' alt="" />
                            </div>
                        </Phoneview>
                    </div>
                    <div className='sub-parent-container-2 w-[50%] min-w-[350px] flex flex-col md:items-start md:text-left text-center items-center py-[10%]'>
                        <p className='text-[15px] font-bold text-indigo-700 mb-10'>
                            <a href='https://api.whatsapp.com/send?phone=9362159991' className='px-10 py-4 bg-violet-600 text-white rounded-lg'>Buy Now</a>
                        </p>
                        <p className='text-[34px] font-extrabold mb-4 leading-[45px]'>Get Discount upto 15%</p>
                        <p className='text-[15px] text-slate-500 w-[60%] font-medium leading-7'>Your Health, Our Priority! 💊🩺 Your trusted online pharmacy for all your healthcare needs. Quality medications. Expert advice. Fast delivery. 🌟 Shop now for a healthier you!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body1;