import React from 'react'
import { FaStar } from 'react-icons/fa';
import SP1 from '../public/S_P1.png'
import Image from 'next/image';
import Link from 'next/link';

function Share() {
  return (
		<div className="max-w-7xl mx-auto p-4 flex flex-col items-center  min-h-screen">
			<h3 className="text-center max-w-2xl text-lg lg:text-3xl p-5 font-semibold ">
				Join 29+ million people growing with Blinkist
			</h3>

			<div className=" flex flex-col lg:flex-row lg:items-center gap-10 w-full min-h-screen lg:-mt-20">
				{Array.from(Array(3), (_, i) => (
					<div className="w-full flex flex-col gap-10" key={i}>
						{/* card */}
						<div className="flex flex-col lg:flex-row w-full gap-5">
							{/* left */}
							<div className="flex lg:flex-col  items-center gap-2">
								{/* top */}
								<div className="hidden lg:inline px-2 py-1 bg-blue-200 rounded-lg">
									<p>Leaders</p>
								</div>

								<div className="w-[150px]">
									<img
										src="https://static.blinkist.com/content-pages/homepage/referals/leaders-md@2x.png"
										alt=""
										className="w-full h-full object-cover"
									/>
								</div>

								<div className=" lg:hidden px-2 py-1 bg-blue-200 rounded-lg -ml-5 lg:-ml-0">
									<p>Leaders</p>
								</div>
							</div>

							{/* right */}
							<div className="flex flex-col gap-5 p-2 ">
								<Image src={SP1} alt="" width={30} height={30} />

								<div className="space-y-2">
									<div className="flex items-center">
										{Array.from(Array(5), (_, i) => (
											<FaStar key={i} className="w-4 h-4 text-yellow-500" />
										))}
									</div>

									<p className="text-sm">
										Most CEOs read a book a week. Many use programs like this to
										acquire key concepts that{" "}
										<strong>
											help them keep a fresh perspective helping hone vision,
											strategy and action.
										</strong>
									</p>
								</div>
							</div>
						</div>

						{/* bottom */}
						{i === 1 && (
							<Link href="/black">
								<button className="bg-green-400 p-3   text-xl rounded-md hover:bg-green-500">
									Start your free 7-day trial
								</button>
							</Link>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default Share