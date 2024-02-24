import Link from 'next/link';
import React from 'react'

function Deatil_power() {
  return (
		<div className="w-full bg-[#fff3d7] ">
			<div className="max-w-7xl mx-auto p-10 flex flex-col lg:flex-row items-center justify-between gap-10 ">
				{/* left */}
				<div className="p-2 space-y-5 max-w-2xl">
					<h3 className="text-wrap text-[40px] font-bold">
						Powerful ideas from top nonfiction
					</h3>

					<p className="text-xl max-w-xl">
						Try Blinkist to get the key ideas from 7,000+ bestselling nonfiction
						titles and podcasts. Listen or read in just 15 minutes.
					</p>

					<Link href="/black">
						<button className="bg-green-400 p-3   text-xl rounded-md hover:bg-green-500">
							Start your free 7-day trial
						</button>
					</Link>
				</div>

				{/* right */}
				<img
					src={"https://static.blinkist.com/wcl/phone-mockup/cover_en.webp"}
					alt=""
					className="w-[500px] h-[400px] object-cover"
				/>
			</div>
		</div>
	);
}

export default Deatil_power