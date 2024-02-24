import React from 'react'

function Detail_inves() {
  return (
		<div className="w-full bg-white">
			<div className="max-w-7xl mx-auto p-4 flex flex-col items-center gap-10 ">
				<div className="flex flex-col items-center justify-center gap-5 text-center max-w-lg">
					<h3 className="font-semibold text-2xl">
						{" "}
						A small investment, an incredible growth opportunity
					</h3>
					<p>
						Get access to powerful ideas from
						<span className="bg-pink-200">
							{" "}
							more than 5,500 nonfiction books and podcasts.
						</span>
					</p>
				</div>

				<div className="flex flex-col max-w-3xl w-full items-center gap-5">
					<div className="hidden lg:inline-flex items-center  w-full text-blue-600 font-bold text-lg">
						<p className="w-1/3">Today</p>
						<p className="w-1/3">Day -2</p>
						<p className="w-1/3">Day 0</p>
					</div>

					<div className="hidden lg:inline-flex items-center justify-between w-full relative">
						<div className="flex items-center  w-1/3">
							<div className="w-3 h-3 rounded-full bg-blue-600" />
							<div className=" bg-blue-600 w-full h-1"></div>
						</div>
						<div className="hidden lg:inline-flex items-center  w-1/3">
							<div className="w-3 h-3 rounded-full bg-blue-600" />
							<div className=" bg-blue-600 w-full h-1"></div>
						</div>{" "}
						<div className="hidden lg:inline-flex items-center  w-1/3">
							<div className="w-3 h-3 rounded-full bg-blue-600" />
							<div className=" bg-blue-300 w-full h-1"></div>
						</div>
					</div>

					<div className="hidden lg:inline-flex   w-full space-x-5">
						<p className="w-1/3">
							Start enjoying the entire library of Blinks and shows.
						</p>
						<p className="w-1/3">
							We’ll send you a reminder email that your trial is ending.
						</p>
						<p className="w-1/3">Free trial ends.</p>
					</div>
				</div>

				{/* md */}
				<div className="lg:hidden flex h-[300px] w-full items-center gap-5 px-10">
					<div className="flex flex-col items-center justify-between h-full relative">
						{/* Timeline dots and lines */}
						<div className="flex flex-col items-center h-full space-y-3">
							<div className="w-3 h-3 rounded-full bg-blue-600"></div>
							<div className="bg-blue-600 h-full w-2"></div>
							<div className="w-3 h-3 rounded-full bg-blue-600"></div>
							<div className="bg-blue-600 h-full w-2"></div>
							<div className="w-3 h-3 rounded-full bg-blue-600"></div>
							<div className="bg-blue-300 h-full w-2"></div>
						</div>
					</div>

					<div className="h-[300px] text-blue-600 font-bold text-lg">
						{/* Timeline content */}
						<div className="flex flex-col  w-full space-y-4">
							<div className="w-2/3">
								<p className="mb-1">Today</p>
								<p className="">
									Start enjoying the entire library of Blinks and shows.
								</p>
							</div>
							<div className="w-2/3">
								<p className="mb-1">Day -2</p>
								<p >
									We’ll send you a reminder email that your trial is ending.
								</p>
							</div>
							<div className="w-2/3">
								<p className="mb-1">Day 0</p>
								<p >Free trial ends.</p>
							</div>
						</div>
					</div>
				</div>

				<div className=" bg-blue-200 max-w-3xl w-full flex flex-col lg:flex items-center gap-10 p-5 ">
					{/* left */}
					<p className="">
						Try Blinkist to get the key ideas from 7,000+ bestselling nonfiction
						titles and podcasts. Listen or read in just 15 minutes.
					</p>

					{/* right */}
					<div>
						<button className="bg-green-400 p-3 px-7 lg:w-[400px] rounded-md hover:bg-green-500">
							Start your free 7-day trial
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Detail_inves