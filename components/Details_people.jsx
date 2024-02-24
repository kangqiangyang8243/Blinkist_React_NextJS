import Link from 'next/link';
import React from 'react'
import { FaHeart, FaStar } from 'react-icons/fa';
import Popup from "reactjs-popup";

function Details_people() {
  return (
		<div className="w-full bg-white ">
			<div className="max-w-7xl mx-auto p-10 flex flex-col gap-10 ">
				<div className="flex items-center justify-center gap-5">
					<h3 className="font-bold flex items-center justify-center gap-5 text-3xl ">
						<p>People</p>
						<FaHeart className="w-10 h-10 text-red-500" /> <p>Blinkist</p>
					</h3>

					<Popup
						trigger={(open) => (
							<div className="p-1 w-5 h-5 rounded-full border-2 flex items-center justify-center text-gray-500 -mt-5 ">
								<p>i</p>
							</div>
						)}
						position="top right"
						closeOnDocumentClick>
						<p className="bg-[#03314b] text-white p-2 text-sm font-bold max-w-[200px]">
							{" "}
							The following reviews are sourced from the Apple App Store or the
							Google Play Store, and as such Blinkist has no possibility of its
							own to technically verify them. Both Apple and Google state that
							they ensure that only users who have actually downloaded the app
							can submit a review. Please refer to the respective guidelines of
							the two providers for more information.{" "}
						</p>
					</Popup>
				</div>
			</div>

			<div className="mx-auto max-w-2xl flex flex-col gap-10">
				{Array.from(Array(3), (_, i) => (
					<div key={i} className="rounded-md bg-[#fff3d7] p-5 space-y-5">
						{/* top */}
						<div className="flex items-center gap-5">
							<h3>Sven O.</h3>
							<div className="flex items-center">
								{Array.from(Array(5), (_, i) => (
									<FaStar key={i} className="w-4 h-4 text-blue-500" />
								))}
							</div>
						</div>

						<p>
							It's <strong>highly addictive</strong> to get core insights on
							personally relevant topics without repetition or triviality. Added
							to that the apps ability to suggest kindred interests opens up a
							foundation of knowledge.
						</p>
					</div>
				))}
			</div>
			<Link href="/black">
				<div className="flex items-center justify-center pb-10">
					<button className="bg-green-400 p-3 px-7 mt-10 font-bold max-w-lg w-full rounded-md hover:bg-green-500">
						Start your free 7-day trial
					</button>
				</div>
			</Link>
		</div>
	);
}

export default Details_people