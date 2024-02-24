"use client";
import React, { useEffect, useRef, useState } from 'react'
import nav1 from "../public/nav1.png";


import Image from 'next/image';
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegPauseCircle } from "react-icons/fa";


const images = [
	{
		img: "https://images.blinkist.io/images/books/5b0c24e0b238e10007ba983a/1_1/470.jpg",
		title: "1",
	},
	{ 		img: "https://images.blinkist.io/images/books/5b0c24e0b238e10007ba983a/1_1/470.jpg",
 title: "2" },
	{		img: "https://images.blinkist.io/images/books/5b0c24e0b238e10007ba983a/1_1/470.jpg",title: "3" },
	{ 		img: "https://images.blinkist.io/images/books/5b0c24e0b238e10007ba983a/1_1/470.jpg",
 title: "4" },
	{ 		img: "https://images.blinkist.io/images/books/5b0c24e0b238e10007ba983a/1_1/470.jpg",
 title: "5" },
	{ 		img: "https://images.blinkist.io/images/books/5b0c24e0b238e10007ba983a/1_1/470.jpg",
title: "6" },
];

function Intro() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [hoverIndex, setHoverIndex] = useState(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const audioRef = useRef(null);
	const containerRef = useRef(null);
	const [numVisibleBoxes, setNumVisibleBoxes] = useState(1); // Default to 1 box visible on small screens

	useEffect(() => {
		const handleResize = () => {
			const screenWidth = window.innerWidth;
			if (screenWidth >= 1280) {
				setNumVisibleBoxes(5);
			} else {
				setNumVisibleBoxes(1);
			}
		};

		// Set initial number of visible boxes based on screen width
		handleResize();

		// Update number of visible boxes when the window is resized
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const previousImage = () => {
		setCurrentImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
		scrollContainer();
	};

	const nextImage = () => {
		setCurrentImageIndex((prevIndex) =>
			Math.min(prevIndex + 1, images.length - numVisibleBoxes)
		);
		scrollContainer();
	};

	const scrollContainer = () => {
		const containerWidth = containerRef.current.clientWidth;
		const scrollAmount = currentImageIndex * containerWidth;
		containerRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
	};

	const handlePlayPause = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	const handleTimeUpdate = () => {
		setCurrentTime(audioRef.current.currentTime);
	};

	return (
		<div className="max-w-7xl mx-auto p-4 min-h-screen h-screen relative flex justify-center items-center mt-10">
			{/* swiper */}
			<div
				ref={containerRef}
				className="flex items-center gap-10 px-10 md:max-w-3xl  lg:max-w-7xl overflow-x-scroll">
				{images.map((image, index) => (
					<div
						key={index}
						onMouseEnter={() => setHoverIndex(index)}
						className={`min-w-[300px]  hover:scale-110 transition-all duration-100 ease-linear border cursor-pointer`}
						style={{ flex: `0 0 ${100 / numVisibleBoxes}%` }}>
						<Image
							src={image.img}
							alt="Image"
							width={300}
							height={300}
							className=" object-cover"
						/>
						{hoverIndex === index && (
							<div className="bg-black">
								<audio
									ref={audioRef}
									onTimeUpdate={handleTimeUpdate}
									className="w-full">
									<source
										src="https://static.blinkist.com/content-pages/homepage/audio/atomic-habits-en.m4a"
										type="audio/mp4"
									/>
								</audio>
								<div className="flex items-center gap-3 justify-between p-2 text-white">
									<>
										{isPlaying ? (
											<FaRegPauseCircle
												onClick={handlePlayPause}
												className="w-10 h-10 text-white"
											/>
										) : (
											<FaRegCirclePlay
												onClick={handlePlayPause}
												className="w-10 h-10 text-black bg-white rounded-full hover:bg-green-300"
											/>
										)}
									</>

									<div>
										<p>Listen to the Intro</p>
										<progress
											value={currentTime}
											max={audioRef.current?.duration || 0}
										/>
									</div>

									<div>
										{Math.floor(currentTime / 60)}:
										{("0" + Math.floor(currentTime % 60)).slice(-2)}
									</div>
								</div>
							</div>
						)}
					</div>
				))}
			</div>
			<button
				onClick={previousImage}
				className="absolute top-1/2 left-0 transform -translate-y-1/2 px-3 py-2 text-blue-500 hover:text-blue-400">
				<MdArrowBackIosNew className="w-10 h-10" />
			</button>
			<button
				onClick={nextImage}
				className="absolute top-1/2 right-0 transform -translate-y-1/2 px-3 py-2 text-blue-500 hover:text-blue-400">
				<MdArrowForwardIos className="w-10 h-10" />
			</button>
		</div>
	);
}

export default Intro