import React from 'react'
import AC1 from '../public/AC1.png'
import AC2 from "../public/AC2.png";
import AC3 from "../public/AC3.png";
import AC4 from "../public/AC4.png";
import Image from 'next/image';


function A_Cards() {

  const data = [
		{
			img: AC1,
			title: "Book Summaries",
		},

		{
			img: AC2,

			title: "Podcast Summaries",
		},

		{
			img: AC3,

			title: "Expert Summaries",
		},

		{
			img: AC4,

			title: "Article soon",
		},
	];
  return (
		<div className="flex items-center justify-center gap-10 flex-wrap ">
			{data.map((item, index) => (
				<div key={index} className="flex flex-col items-center justify-center p-2 bg-[#FFF3D7] w-[200px] h-[200px] rounded-md">
					<Image src={item.img} alt="" className=" h-full object-contain" />
					<h3>{item.title}</h3>
				</div>
			))}
		</div>
	);
}

export default A_Cards