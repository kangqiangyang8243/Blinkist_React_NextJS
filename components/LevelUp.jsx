import Link from 'next/link';
import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";

function LevelUp({detail}) {

  const introData = [
		{
			Icon: FaRegCirclePlay,
			data: "29 million",
			content: "Downloads on all platforms",
		},
		{
			Icon: FaRegCirclePlay,
			data: "4.7 stars",
			content: "Average ratings on iOS and Google Play",
		},
		{
			Icon: FaRegCirclePlay,
			data: "10+ years",
			content: "Experience igniting personal growth",
		},
	];
  return (
		<div className="max-w-7xl mx-auto p-4 relative flex justify-center mt-10 lg:mt-0 ">
			\{/* top */}
			<div className="flex flex-col items-center gap-5">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-5  max-w-3xl">
					{introData.map((item, i) => (
						<div
							className="flex flex-col items-center text-center p-2 gap-5 "
							key={i}>
							<item.Icon className="text-blue-600 w-20 h-20" />
							<h3 className="font-semibold text-4xl">{item.data}</h3>
							<p>{item.content}</p>
						</div>
					))}
				</div>

				<Link href="/black">
					<button className="bg-green-400 p-3   text-xl rounded-md hover:bg-green-500">
						Start your free 7-day trial
					</button>
				</Link>
				{!detail && (
					<div className="flex flex-col items-center justify-center text-center gap-5 lg:mt-5">
						<h3 className="font-semibold text-lg lg:text-[50px]">
							{" "}
							How will you level up?
						</h3>
						<p className="">
							Listen, read, or get interactive—however you like to learn, youll
							find it here!
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default LevelUp