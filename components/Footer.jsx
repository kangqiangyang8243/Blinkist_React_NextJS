import React from 'react'
import F1 from "../public/F1.png";
import { FaApple, FaFacebookSquare } from 'react-icons/fa';

function Footer() {
  return (
		<footer className="w-full bg-[#f1f6f4]  mb-20">
			<div className="max-w-7xl mx-auto p-4 flex flex-col gap-10 ">
				{/* top */}
				<div className="flex flex-col  gap-5 px-5 border-b pb-10 border-gray-500">
					<h3 className="text-xl font-bold mb-4">
						Discover the Blinkist catalogue
					</h3>
					{/* Discover the Blinkist catalogue */}
					<div className="flex flex-wrap items-center  px-2 gap-32 ">
							{/* Popular categories */}
							<div>
								<h3 className="text-xl font-bold mb-4">Popular categories</h3>
								<ul className="list-none p-0">
									<li className="mb-2">Personal Development</li>
									<li className="mb-2">Psychology</li>
									<li className="mb-2">Productivity</li>
									<li className="mb-2">Career & Success</li>
									<li className="mb-2">Management & Leadership</li>
									{/* Add more categories here */}
								</ul>
							</div>

							{/* Popular topics */}
							<div>
								<h3 className="text-xl font-bold mb-4">Popular topics</h3>
								<ul className="list-none p-0">
									<li className="mb-2">Best Christianity Books</li>
									<li className="mb-2">Best Memoirs Books</li>
									<li className="mb-2">Best Love Books</li>
									<li className="mb-2">Best Self-Help Books</li>
									<li className="mb-2">Best Leadership Books</li>
									{/* Add more topics here */}
								</ul>
							</div>

							{/* Featured titles */}
							<div>
								<h3 className="text-xl font-bold mb-4">Featured titles</h3>
								<ul className="list-none p-0">
									<li className="mb-2">A Court of Thorns and Roses</li>
									<li className="mb-2">Just Mercy</li>
									<li className="mb-2">Tuesdays with Morrie</li>
									<li className="mb-2">Into the Wild</li>
									<li className="mb-2">The Devil in the White City</li>
									{/* Add more featured titles here */}
								</ul>
							</div>
						

						
							{/* Popular categories */}
							<div>
								<h3 className="text-xl font-bold mb-4">Popular categories</h3>
								<ul className="list-none p-0">
									<li className="mb-2">Personal Development</li>
									<li className="mb-2">Psychology</li>
									<li className="mb-2">Productivity</li>
									<li className="mb-2">Career & Success</li>
									<li className="mb-2">Management & Leadership</li>
									{/* Add more categories here */}
								</ul>
							</div>

						

							{/* Featured titles */}
							<div>
								<h3 className="text-xl font-bold mb-4">Featured titles</h3>
								<ul className="list-none p-0">
									<li className="mb-2">A Court of Thorns and Roses</li>
									<li className="mb-2">Just Mercy</li>
									<li className="mb-2">Tuesdays with Morrie</li>
									<li className="mb-2">Into the Wild</li>
									<li className="mb-2">The Devil in the White City</li>
									{/* Add more featured titles here */}
								</ul>
							</div>
					
					</div>
				</div>

				{/* bottom */}
				<div className="flex flex-col">
					{/* top */}
					<div className="flex flex-col lg:flex-row lg:items-center justify-between p-5">
						{/* left */}
						<div className="space-y-5 pb-5 lg:pb-0">
							{" "}
							<img src="/F1.png" alt="Logo" className="h-20  object-cover" />
							<p className="text-blue-600 font-bold w-full lg:w-36 ml-5 ">
								Powerful ideas — 15 minutes at a time
							</p>
						</div>

						{/* right */}
						<div className="flex flex-col lg:flex-row lg:items-center text-xl gap-5">
							<div>
								<h3 className="font-bold mb-4">Popular categories</h3>
								<ul className="list-none p-0 text-sm">
									<li className="mb-2">Personal Development</li>
									<li className="mb-2">Psychology</li>
									<li className="mb-2">Productivity</li>
									<li className="mb-2">Career & Success</li>
									<li className="mb-2">Management & Leadership</li>
									{/* Add more categories here */}
								</ul>
							</div>
							<div>
								<h3 className="font-bold mb-4">Popular categories</h3>
								<ul className="list-none p-0 text-sm">
									<li className="mb-2">Personal Development</li>
									<li className="mb-2">Psychology</li>
									<li className="mb-2">Productivity</li>
									<li className="mb-2">Career & Success</li>
									<li className="mb-2">Management & Leadership</li>
									{/* Add more categories here */}
								</ul>
							</div>
							<div>
								<h3 className=" font-bold mb-4">Popular categories</h3>
								<ul className="list-none p-0 text-sm">
									<li className="mb-2">Personal Development</li>
									<li className="mb-2">Psychology</li>
									<li className="mb-2">Productivity</li>
									<li className="mb-2">Career & Success</li>
									<li className="mb-2">Management & Leadership</li>
									{/* Add more categories here */}
								</ul>
							</div>
						</div>
					</div>

					{/* bottom */}
					<div className="flex flex-col py-5 px-10 gap-10">
						{/* top */}
						<div className="flex items-center gap-5">
							<div className="flex items-center gap-1 rounded-md bg-black text-white px-2 py-1">
								<FaApple className="w-8 h-8 " />
								<div>
									<p className="text-[10px]">Download on the</p>
									<p className="font-bold text-lg">AppStore</p>
								</div>
							</div>

							<div className="flex items-center gap-1 rounded-md bg-black text-white px-2 py-1">
								<FaApple className="w-8 h-8 " />
								<div>
									<p className="text-[10px]">Download on the</p>
									<p className="font-bold text-lg">AppStore</p>
								</div>
							</div>
						</div>

						{/* bottom */}
						<div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-0 ">
							{/* left */}
							<ul className="flex items-center flex-wrap gap-5 text-gray-500 text-sm">
								<li>© Blinkist 2024</li>
								<li>|</li>
								<li>Sitemap </li>
								<li>|</li>
								<li>© Blinkist 2024</li>
								<li>|</li>
								<li>Sitemap </li>
								<li>|</li>
								<li>© Blinkist 2024</li>
							</ul>

							<div className="flex items-center gap-3">
								<FaFacebookSquare className='w-6 h-6 text-gray-500'/>
								<FaFacebookSquare className='w-6 h-6 text-gray-500'/>
								<FaFacebookSquare className='w-6 h-6 text-gray-500'/>
								<FaFacebookSquare className='w-6 h-6 text-gray-500'/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer