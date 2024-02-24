"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaRegPauseCircle, FaStar } from "react-icons/fa";
import { FaRegCirclePlay, FaRegClock } from "react-icons/fa6";
import { IoShareOutline } from "react-icons/io5";
import C_list from "./C_list";
import Link from "next/link";

function Detail_intro() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const audioRef = useRef(null);
  
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
		<div className="w-full bg-white">
			<div className="max-w-7xl mx-auto p-4 flex flex-col gap-10 relative ">
				{/* category */}
				<div className="flex items-center justify-between w-full mt-32 px-10 lg:px-0 absolute lg:relative">
					{/* left */}
					<p className="text-center ">
						<span className="hidden lg:inline text-blue-500">
							{" "}
							Categories {">"} Productivity {">"}{" "}
						</span>
						<span>The 5 AM Club summary</span>
					</p>

					{/* right */}
					<IoShareOutline className="w-8 h-8" />
				</div>

				{/* info */}
				<div className="">
					<div className="flex flex-col-reverse lg:flex-row mt-28 lg:mt-0 gap-10 justify-between">
						{/* left */}
						<div className="flex flex-col gap-5">
							<p>Better than a summary</p>
							<h3 className="text-3xl">The 5 AM Club</h3>
							<p className="font-bold">Robin Sharma</p>

							<p className="text-xl">Own Your Morning. Elevate Your Life.</p>

							<div className="flex items-center gap-5">
								<p className="flex items-center gap-2">
									<FaStar className="text-yellow-500" />
									<span>4.5 (9473 ratings)</span>
								</p>

								<p className="flex items-center gap-2">
									<FaRegClock />
									<span>22 mins</span>
								</p>
							</div>

							<Link href="/black">
								<button className="bg-green-400 p-3 lg:w-[30%]  text-xl rounded-md hover:bg-green-500">
									Start your free 7-day trial
								</button>
							</Link>

							<div className="space-y-5">
								<h3 className="font-bold text-2xl">Brief summary</h3>
								<p>
									The 5 AM Club by Robin Sharma is a self-help book that
									highlights the importance of waking up early to increase
									productivity and creativity. The author provides a framework
									for creating a morning routine that promotes personal growth
									and success.
								</p>
							</div>

							<div className="space-y-5">
								<p className="font-bold">Topics</p>
								<div className="flex items-center gap-5">
									<C_list name={"success"} trust={false} />{" "}
									<C_list name={"success"} trust={false} />{" "}
									<C_list name={"success"} trust={false} />
								</div>
							</div>
						</div>

						{/* right */}
						<div
							className={`w-full h-full hover:scale-110 transition-all duration-100 ease-linear border cursor-pointer`}>
							<Image
								src={
									"https://images.blinkist.io/images/books/5b0c24e0b238e10007ba983a/1_1/470.jpg"
								}
								alt="Image"
								width={300}
								height={300}
								className="h-full w-full object-cover"
							/>
							<div className="bg-black w-[70%] mx-auto  rounded-lg lg:w-full ">
								<audio
									ref={audioRef}
									onTimeUpdate={handleTimeUpdate}
									className="w-full">
									<source
										src="https://static.blinkist.com/content-pages/homepage/audio/atomic-habits-en.m4a"
										type="audio/mp4"
									/>
								</audio>
								<div className="flex  items-center gap-3 justify-between p-2 text-white">
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

									<div className="flex-1">
										<p className="text-center">Listen to the Intro</p>
										<progress
											className="w-full"
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Detail_intro;
