import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';
import SP1 from "../public/S_P1.png";

function Jobs_choose() {
  return (
		<div className="max-w-7xl mx-auto p-4 flex flex-col items-center  min-h-screen">
			<div className="flex flex-col items-center justify-center gap-5">
				<h3 className="font-semibold text-2xl lg:text-[50px] text-center">
					Grow wherever you are
				</h3>
				<p className="text-center max-w-3xl">
					Forget carving out time. Slip in a little learning in the car, waiting
					in line, over lunch, before bed, or whenever you’ve got a moment.
				</p>
			</div>

			<div className=" flex items-center gap-10 w-full min-h-screen lg:mt-10 overflow-x-scroll lg:overflow-visible">
				{Array.from(Array(4), (_, i) => (
					<div
						className={`w-full min-w-[400px] lg:min-w-[200px]  flex flex-col gap-5  ${
							i % 2 !== 0 && i !== 1 ? "lg:-mt-32" : ""
						}`}
						key={i}>
						{/* card */}
						<div className="flex w-full gap-5">
							{/* left */}
							<div className="flex flex-col items-center gap-2 relative">
								{/* top */}
								<div className="px-2 py-1 bg-blue-200 rounded-lg absolute -top-5">
									<p>Leaders</p>
								</div>

								<img
									src="https://static.blinkist.com/content-pages/homepage/referals/leaders-md@2x.png"
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
						</div>

						{/* bottom */}
						{i === 1 && (
							<div className="hidden lg:inline-flex flex-col items-center gap-2  ">
								<p className="border-2 p-2  w-full text-center rounded-md hover:bg-green-500">
									Appl Carplay
								</p>

								<p className="border-2 p-2 w-full text-center rounded-md hover:bg-green-500">
									androidAuto
								</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default Jobs_choose