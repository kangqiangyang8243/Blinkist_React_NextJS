import Image from 'next/image';
import React from 'react'

import C_list from './C_list';
import { FiTarget } from "react-icons/fi";

function Details_knowledg() {
  const data = [
		{
			img: "https://static.blinkist.com/wcl/feature-section/key_ideas.svg",
			title: "Book Summaries",
			content:
				"Get the key ideas from nonfiction bestsellers in minutes, not hours.",
		},

		{
			img: "https://static.blinkist.com/wcl/feature-section/key_ideas.svg",
			title: "Book Summaries",
			content:
				"Get the key ideas from nonfiction bestsellers in minutes, not hours.",
		},
		{
			img: "https://static.blinkist.com/wcl/feature-section/key_ideas.svg",
			title: "Book Summaries",
			content:
				"Get the key ideas from nonfiction bestsellers in minutes, not hours.",
		},
	];
  return (
		<div className="w-full bg-white">
			<div className="max-w-7xl mx-auto p-4 flex flex-col gap-10 ">
				<div className="text-center space-y-5 my-10">
					<h3 className="font-bold text-2xl">More knowledge in less time</h3>
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-around gap-10 ">
						{data.map((item, index) => (
							<div
								key={index}
								className="flex lg:flex-col items-center lg:justify-center p-2     gap-3 ">
								<img
									src={item.img}
									alt=""
									className=" w-[200px] object-cover"
								/>
								<div className="flex flex-col items-start text-start">
									<h3 className="text-xl font-bold">{item.title}</h3>
									<p>{item.content}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="space-y-5 px-10 max-w-xl">
					<div className="space-y-5">
						<p className="text-xl">
							<strong>What is </strong>
							<i>The 5 AM Club</i> <strong>about?</strong>
						</p>

						<p className="text-sm">
							<i>The 5 AM Club</i>(2018) shows how embracing a revolutionary
							morning routine can deliver epic results. Through the enchanting
							story of an entrepreneur, an artist, and their eccentric
							billionaire mentor, it explains how you can use the first hour of
							your day to drive personal growth and get the most out of life.
						</p>
					</div>

					<div className="space-y-5">
						<p className="text-xl">
							<i>The 5 AM Club</i> <strong>Review</strong>
						</p>

						<div>
							<p>
								<i>The 5 AM Club</i>(2018) The 5 AM Club (2018) by Robin Sharma
								is a compelling book that offers valuable insights on how waking
								up early can transform our lives. Here{"'"}s why this book is worth
								reading:
							</p>

							<ul className="text-sm list-disc pl-5">
								<li>
									It provides <strong>practical strategies</strong> to help us
									reclaim our mornings and maximize our productivity.
								</li>
								<li>
									<strong>
										Combining personal anecdotes, scientific research,
									</strong>{" "}
									and fictional storytelling, the book presents its ideas in an
									engaging and relatable way.
								</li>
								<li>
									By emphasizing the importance of a morning routine and
									offering actionable steps, the book keeps readers engaged and
									motivated, ensuring that it is definitely not boring.
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="space-y-10 mb-10">
					<p className="text-xl text-center">
						<strong>Best quote from </strong>
						<i>The 5 AM Club</i>
					</p>

					<div className="flex justify-center relative">
						<img
							src="/DK1.png"
							alt=""
							className="lg:w-[200px] w-10 absolute left-0 -top-10 lg:left-12"
						/>
						<div className="flex flex-col lg:flex-row lg:items-center w-[500px] bg-[#feceb4] rounded-md p-3">
							<div className="space-y-3">
								<p className="text-xl">
									<strong>
										5am is the time of least distraction, highest human glory
										and greatest peace.
									</strong>
								</p>

								<p>—ROBIN SHARMA</p>
							</div>

							<img
								src="https://images.blinkist.io/images/books/5c43b2fa6cee07000701bf7a/1_1/470.jpg"
								alt=""
								className="w-32 h-32"
							/>
						</div>
						<img
							src="/DK2.png"
							alt=""
							
							className="lg:w-[200px] w-10 absolute right-0 -bottom-10 lg:right-12"
						/>
					</div>
				</div>

				<div className="px-10 space-y-5">
					<p className="text-xl ">
						<strong>Who should read </strong>
						<i>The 5 AM Club</i>
					</p>

					<ul className="text-sm list-disc pl-5">
						<li>Those who feel they could try and get more out of the day</li>
						<li>People who want to achieve great things in life</li>
						<li>
							Anyone in need of an energizing and positive morning routine
						</li>
					</ul>
				</div>

				<div className="px-10 space-y-5 max-w-xl">
					<p className="text-xl ">
						<strong>About the Author</strong>
					</p>

					<p>
						Robin Sharma is one of the world’s top leadership gurus and the
						best-selling author of The Monk Who Sold His Ferrari. He has helped
						millions of people to become better leaders, improve their
						productivity, and lead better lives.
					</p>
				</div>

				<div className="px-10 space-y-5">
					<p className="text-xl ">
						<strong>Categories with</strong>
						<i>The 5 AM Club</i>
					</p>

					<div className="flex flex-col lg:flex-row items-center gap-5 pb-10">
						<C_list Icon={FiTarget} name={"Productivity"} trust={false} />{" "}
						<C_list Icon={FiTarget} name={"Career & Success"} trust={false} />{" "}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Details_knowledg