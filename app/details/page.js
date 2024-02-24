"use client";
import React, { useState } from 'react'
import Detail_intro from '@/components/Detail_intro'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Details_IdeaKey from '@/components/Details_IdeaKey';
import Details_knowledg from '@/components/Details_knowledg';
import Details_bookSum from '@/components/Details_bookSum';
import Details_people from '@/components/Details_people';
import LevelUp from '@/components/LevelUp';
import Deatil_power from '@/components/Deatil_power';
import Questions from '@/components/Questions';
import Detail_inves from '@/components/Detail_inves';

function Details() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);

  };
  return (
    <div className="h-screen w-full bg-gray-300 overflow-y-auto">
      <Header />

      <Detail_intro />

      <div className="w-full bg-white mb-20">
        <div className="max-w-7xl mx-auto p-4 flex flex-col gap-10 pb-20">

          <div className="flex flex-col w-full max-w-3xl gap-10 text-xl ">
            <div
              onClick={toggleDropdown}
              className="flex flex-col gap-2 group cursor-pointer  ">
              <div className="flex items-center  gap-2 group cursor-pointer w-full  ">
                <p className=" font-semibold">Table of Contents</p>
                {isDropdownOpen ? (
                  <IoIosArrowUp className="w-6 h-6 group-hover:text-blue-300" />
                ) : (
                  <IoIosArrowDown className="w-6 h-6 group-hover:text-blue-300" />
                )}
              </div>
              {isDropdownOpen && (
                <div className=" flex flex-col text-sm gap-3 underline underline-offset-2 cursor-pointer">
                  <a href="#1">The 5 AM Club Summary of 6 key ideas</a>
                  <a href="#2">What is The 5 AM Club about?</a>
                  <a href="#3">The 5 AM Club Review</a>
                  <a href="#4">Best quote from The 5 AM Club</a>
                  <a href="#5">Who should read The 5 AM Club?</a>
                  <a href="#6">About the Author</a>
                  <a href="#7">Book summaries like The 5 AM Club</a>
                  <a href="#8">People also liked these summaries</a>

                  <a href="#9">The 5 AM Club FAQs</a>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>

      <div id='1' className='p-4'>
        <Details_IdeaKey />
      </div>

      <div id='2'>
        <Details_knowledg />
      </div>

      <div id='3'>
        <Details_bookSum />
      </div>

      <div id='4'>
        <Details_people />
      </div>

      <div id='5'>
        <Details_bookSum title={"People also liked these summaries"} />
      </div>

      <div id='6'>
        <div className="w-full bg-white mt-10">
          <LevelUp detail={true} />
        </div>


      </div>

      <div id='7'>
        <Deatil_power />


      </div>

      <div id='8'>
        <div className="w-full bg-[#f8faf9] ">
          <Questions page="D" title={"The 5 AM Club FAQs "} />
        </div>



      </div>

      <div id='9'>
        <Detail_inves />
      </div>

      <div className="w-full bg-[#f8faf9] ">
        <div className="max-w-7xl p-5 mx-10 flex flex-col items-center gap-10 ">
          <div className="flex flex-col  gap-5 px-5 pb-10">
            <h3 className="text-xl font-bold mb-4">
              Featured Titles
            </h3>
            {/* Discover the Blinkist catalogue */}
            <div className="flex items-center flex-wrap px-2 gap-32 ">
              {/* Popular categories */}
              <div>
                <ul className="list-none p-0">
                  <li className="mb-2">Personal Development</li>
                  <li className="mb-2">Psychology</li>
                  <li className="mb-2">Productivity</li>
                  <li className="mb-2">Career & Success</li>
                  <li className="mb-2">Management & Leadership</li>
                  {/* Add more categories here */}
                </ul>
              </div>

              {/* Popular topics */}
              <div>
                <ul className="list-none p-0">
                  <li className="mb-2">Best Christianity Books</li>
                  <li className="mb-2">Best Memoirs Books</li>
                  <li className="mb-2">Best Love Books</li>
                  <li className="mb-2">Best Self-Help Books</li>
                  <li className="mb-2">Best Leadership Books</li>
                  {/* Add more topics here */}
                </ul>
              </div>

              {/* Featured titles */}
              <div>
                <ul className="list-none p-0">
                  <li className="mb-2">A Court of Thorns and Roses</li>
                  <li className="mb-2">Just Mercy</li>
                  <li className="mb-2">Tuesdays with Morrie</li>
                  <li className="mb-2">Into the Wild</li>
                  <li className="mb-2">The Devil in the White City</li>
                  {/* Add more featured titles here */}
                </ul>
              </div>








            </div>
          </div>
        </div>

      </div>





      <Footer />
    </div>
  )
}

export default Details