import React from 'react'
import nav1 from '../public/nav1.png'
import nav2 from "../public/nav2.png";
import nav3 from "../public/nav3.png";
import Image from 'next/image';
import Link from 'next/link';

function Nav() {
  return (
		<div className="max-w-7xl mx-auto max-h-full  ">
			<div className="flex flex-col items-center mt-32 mb-52 lg:my-32 w-full gap-10">
				{/* big title */}
				<div className="text-[60px] text-center flex-col flex items-center">
					<div className="flex items-center gap-5">
						<strong>Learn</strong>
						<p className="hidden lg:inline">
							<i>something new</i>
						</p>
						<Image src={nav1} alt="" className="w-20 h-20 object-contain" />
					</div>

					<p className="lg:hidden">
						{" "}
						<i>something new</i>
					</p>

					<div className="flex items-center gap-5">
						<Image src={nav2} alt="" className="w-20 h-20 object-contain" />
						<strong> every day</strong>
						<Image src={nav3} alt="" className="w-20 h-20 object-contain" />
					</div>
				</div>

				{/* Paragraph 2 */}
				<p className="text-2xl text-center">
					The best bits from the world’s top books, podcasts, articles, and
					experts.
				</p>
				<Link href="/black">
					<button className="bg-green-400 p-3 lg:w-[30%]  text-xl rounded-md hover:bg-green-500">
						Start your free 7-day trial
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Nav