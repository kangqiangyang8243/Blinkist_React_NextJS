import React from 'react'
import A_Cards from './A_Cards'
import { FaStar } from "react-icons/fa";
import Link from 'next/link';

function Analysis() {

  const introData = [
		{
			data: "95%",
			content: "of Blinkist members read significantly more than before*",
		},
		{
			data: "91%",
			content:
				"of Blinkist members create better habits*",
		},
		{
			data: "87%",
			content:
				"have made positive changes in their lives thanks to Blinkist*",
		},
	];

  return (
		<div className="w-full bg-blue-600 rounded-[100px] relative mb-20 mt-44">
			<div className="max-w-7xl mx-auto p-4 flex flex-col items-center gap-10">
				{/* cards */}
				<div
					className="absolute -top-40 lg:-top-20
        ">
					<A_Cards />
				</div>

				{/* video,text... */}
				<div className="flex flex-col items-center gap-10 mt-[300px] lg:mt-32">
					{/* text */}
					<div className="flex flex-col items-center gap-2 text-white">
						<p className="text-center w-[60%]">
							“ <strong>Great app</strong>. Addicting. Perfect for wait times,
							morning coffee, evening before bed. Extremely well written,
							thorough, easy to use.”
						</p>

						<div className="flex items-center">
							{Array.from(Array(5), (_, i) => (
								<FaStar key={i} className="w-4 h-4 text-yellow-500" />
							))}
						</div>

						<p>Renee D.</p>
					</div>

					{/* video */}
					<div className="w-full max-w-3xl mx-auto">
						<video controls className="w-full rounded-md">
							<source src="https://static.blinkist.com/content-pages/homepage/video-en.mp4" />
						</video>
					</div>

					{/* intro */}
					<div className="flex flex-col items-center gap-10">
						<Link href="/black">
							<button className="bg-green-400 p-3  text-xl rounded-md hover:bg-green-500">
								Start your free 7-day trial
							</button>
						</Link>

						<div className="flex flex-col md:flex-row justify-center gap-5 text-white ">
							{introData.map((item, i) => (
								<div
									className="flex flex-col items-center text-center p-2 gap-3  w-[200px] my-5"
									key={i}>
									<h3 className="font-semibold text-4xl">{item.data}</h3>
									<p>{item.content}</p>
								</div>
							))}
						</div>

						<p className="text-white text-sm pb-2 text-center">
							* Based on internal study using survey data from general Blinkist
							customers
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Analysis