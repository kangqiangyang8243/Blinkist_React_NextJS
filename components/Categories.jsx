import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaKickstarter } from "react-icons/fa";
import C_list from './C_list';


function Categories() {
  const data = [
		{ icon: CiStar, name: "Popular" },
		{ icon: FaKickstarter, name: "Carrerr & Business" },
		{ icon: FaKickstarter, name: "Health & Meditation" },
		{ icon: FaKickstarter, name: "Inspriation & Personal Growth" },
		{ icon: FaKickstarter, name: "Relationships & Family" },
		{ icon: FaKickstarter, name: "Culture & Mankind" },
		{ icon: FaKickstarter, name: "Money & Economics" },
		{ icon: FaKickstarter, name: "Science & Technology" },
	];
  return (
		<div className='max-w-7xl mx-auto p-4 flex flex-col items-center gap-10 '>
			<h3 className='font-semibold text-[70px] text-center'>A world of knowledge in your pocket</h3>

      <p>And dozens of categories to explore!</p>
      
      <div className='flex flex-wrap items-center justify-center max-w-5xl gap-5'>
        {data.map((item, index) => (
          <C_list key={index} Icon={item.icon} name={item.name} />
        ))}
      </div>
		</div>
	);
}

export default Categories