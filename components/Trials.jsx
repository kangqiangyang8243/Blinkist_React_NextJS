import Link from 'next/link';
import React from 'react'
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoIosCheckbox } from "react-icons/io";
function Trials() {

  return (
		<div className="w-full bg-[#FFF3D7] rounded-[50px] relative mb-20 py-10">
			<div className="max-w-7xl mx-auto p-4 flex flex-col items-center justify-center">
				<h3 className="text-center font-semibold text-[50px] mb-4">
					Get Blinkist <br />
					Start with a 7-day free trial!
				</h3>

				<p className="text-xl mb-10">
					Learn all you want for 7 days, no commitment.
				</p>

				<div className="flex flex-col items-center gap-5 mb-5">
					<p className="px-2 py-1 bg-red-400 text-white rounded-md">
						-55% Annual Discount
					</p>

					<p className="text-2xl font-semibold">€0.00 due today,</p>

					<p className="text-2xl">
						then <s>$9.06</s> $4.09 / month
					</p>

					<div className="flex items-center gap-2 text-blue-600">
						<AiOutlineSafetyCertificate />

						<p>Cancel anytime during your trial</p>
					</div>
				</div>

				<Link href="/black">
					<button className="bg-green-400 p-3   text-xl rounded-md hover:bg-green-500">
						Start your free 7-day trial
					</button>
				</Link>

				<div className="flex flex-col gap-3">
					<p className="font-semibold">How your free trial works:</p>

					<div className="flex flex-col gap-2">
						<div className="flex gap-2">
							{/* left */}
							<div className="flex flex-col items-center gap-2">
								<IoIosCheckbox className="w-5 h-5 text-green-500 " />
								<p className="w-2 h-10 bg-green-300"></p>
							</div>

							{/* right */}
							<div className="flex flex-col  gap-2">
								<p className="font-semibold">Today: trial starts</p>

								<p>Enjoy the entire library, free for 7 days.</p>
							</div>
						</div>

						<div className="flex gap-2">
							{/* left */}
							<div className="flex flex-col items-center gap-2">
								<IoIosCheckbox className="w-5 h-5 text-gray-500 " />
								<p className="w-2 h-10 bg-gray-300"></p>
							</div>

							{/* right */}
							<div className="flex flex-col  gap-2">
								<p className="font-semibold">Today: trial starts</p>

								<p>Enjoy the entire library, free for 7 days.</p>
							</div>
						</div>

						<div className="flex gap-2">
							{/* left */}
							<div className="flex flex-col items-center gap-2">
								<IoIosCheckbox className="w-5 h-5 text-gray-500 " />
							</div>

							{/* right */}
							<div className="flex flex-col  gap-2">
								<p className="font-semibold">Today: trial starts</p>

								<p>Enjoy the entire library, free for 7 days.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Trials