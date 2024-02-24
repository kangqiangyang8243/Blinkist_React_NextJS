import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { CiStar } from 'react-icons/ci';
import D_Cards from './D_Cards';



function Details_bookSum({title}) {
  const data = [
		{
			title: "How to Talk to Anyone",
			author: "Leil Lowndes",
			content: "92 Little Tricks for Big Success in Relationships",
			Icon: CiStar,
			img: "https://images.blinkist.io/images/books/5b0c24e0b238e10007ba983a/1_1/470.jpg",
			time: "25 min",
			rate: "4.2",
		},

		{
			title: "How to Talk to Anyone",
			author: "Leil Lowndes",
			content: "92 Little Tricks for Big Success in Relationships",
			Icon: CiStar,
			img: "https://images.blinkist.io/images/books/5b0c24e0b238e10007ba983a/1_1/470.jpg",
			time: "25 min",
			rate: "4.2",
		},
		{
			title: "How to Talk to Anyone",
			author: "Leil Lowndes",
			content: "92 Little Tricks for Big Success in Relationships",
			Icon: CiStar,
			img: "https://images.blinkist.io/images/books/5b0c24e0b238e10007ba983a/1_1/470.jpg",
			time: "25 min",
			rate: "4.2",
		},
		{
			title: "How to Talk to Anyone",
			author: "Leil Lowndes",
			content: "92 Little Tricks for Big Success in Relationships",
			Icon: CiStar,
			img: "https://images.blinkist.io/images/books/5b0c24e0b238e10007ba983a/1_1/470.jpg",
			time: "25 min",
			rate: "4.2",
		},
		{
			title: "How to Talk to Anyone",
			author: "Leil Lowndes",
			content: "92 Little Tricks for Big Success in Relationships",
			Icon: CiStar,
			img: "https://images.blinkist.io/images/books/5b0c24e0b238e10007ba983a/1_1/470.jpg",
			time: "25 min",
			rate: "4.2",
		},
		{
			title: "How to Talk to Anyone",
			author: "Leil Lowndes",
			content: "92 Little Tricks for Big Success in Relationships",
			Icon: CiStar,
			img: "https://images.blinkist.io/images/books/5b0c24e0b238e10007ba983a/1_1/470.jpg",
			time: "25 min",
			rate: "4.2",
		},
	];
  return (
		<div className="w-full bg-[#03314b] text-white">
			<div className="max-w-7xl mx-auto p-10 flex flex-col gap-10 ">
				{title ? (
					<h3 className="font-bold text-2xl">
						{title}
					</h3>
				) : (
					<h3 className="font-bold text-2xl">
						<strong>Book summaries like </strong>
						<i>The 5 AM Club</i>
					</h3>
				)}

				<Swiper
					slidesPerView={5}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="w-full flex items-center ">
					{data.map((item, i) => (
						<SwiperSlide key={i}>
							<D_Cards
								title={item.title}
								author={item.author}
								content={item.content}
								img={item.img}
								Icon={item.Icon}
								time={item.time}
								rate={item.rate}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Details_bookSum