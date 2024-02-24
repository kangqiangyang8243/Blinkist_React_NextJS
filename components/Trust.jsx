import React from 'react'
import { FaTiktok } from "react-icons/fa";

function Trust() {

  const data = [
		"https://static.blinkist.com/content-pages/homepage/logos/tiktok.svg",
		"https://static.blinkist.com/content-pages/homepage/logos/babbel.svg",
		"https://static.blinkist.com/content-pages/homepage/logos/booking.svg",
		"https://static.blinkist.com/content-pages/homepage/logos/microsoft.svg",
		"https://static.blinkist.com/content-pages/homepage/logos/tier.svg",
		"https://static.blinkist.com/content-pages/homepage/logos/linkedin.svg",
		"https://static.blinkist.com/content-pages/homepage/logos/zalando.svg",
	];
  return (
		<div className="w-full bg-[#D7E9FF]  relative mb-20 py-10">
			<div className="max-w-7xl mx-auto p-4 flex flex-col items-center justify-center gap-5">
				<h3 className="font-semibold">Trusted by the worlds leading brands</h3>

				<div className="flex items-center gap-5">
					{data.map((r, i) => (
						<img key={i} src={r} alt="" />
					))}
				</div>
			</div>
		</div>
	);
}

export default Trust