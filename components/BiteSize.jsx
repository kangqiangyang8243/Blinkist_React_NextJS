"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

function BiteSize() {
	return (
		<div className="max-w-7xl mx-auto p-4 mt-10">
			{" "}
			<>
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					navigation={true}
					loop={true}
					pagination={{
						type: "progressbar",
					}}
					modules={[Pagination, Navigation]}>
					{Array.from(Array(5), (_, i) => (
						<SwiperSlide key={i} className=" px-12 py-5 ">
							<div className="w-full  bg-blue-300 max-h-screen rounded-lg px-10 py-5 flex flex-col lg:flex-row items-center justify-between gap-10">
								{/* left */}
								<div className="p-2 space-y-2">
									<h3 className="text-wrap text-lg lg:text-[40px]">
										<strong className="text-blue-600">
											Bite-sized bestsellers
										</strong>{" "}
										with book summaries
									</h3>

									<p className=" lg:text-xl">
										Get powerful ideas in minutes—not hours or days with our
										summaries of today’s most transformative books.
									</p>
								</div>

								{/* right */}
								<img
									src={
										"https://static.blinkist.com/content-pages/homepage/features/blinks-md@2x.png"
									}
									alt=""
									className="w-[200px] h-[200px] lg:w-[500px] lg:h-[400px] object-cover"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</>
		</div>
	);
}

export default BiteSize;
