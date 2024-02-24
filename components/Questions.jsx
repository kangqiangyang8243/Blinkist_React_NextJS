"use client";
import React, { useState } from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTruckArrowRight } from "react-icons/fa6";

function Questions( {title,page}) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [activeMenu, setActiveMenu] = useState("main");

	const [HomeMenuItems, setHomeMenuItems] = useState([
		{
			name: "How does the free 7-day trial work?",
			content:
				"Start your free 7-day trial by signing up for a Blinkist yearly plan. There’s no obligation to stay subscribed, and you'll only be charged on the day the free 7-day trial ends. Subscribe to Premium, learn as much and as often as you like, and you have the option to cancel any time before the end of your free 7-day trial has passed.",
			isOpen: false,
		},
		{
			name: "How does the free 7-day trial work?",
			content:
				"Start your free 7-day trial by signing up for a Blinkist yearly plan. There’s no obligation to stay subscribed, and you'll only be charged on the day the free 7-day trial ends. Subscribe to Premium, learn as much and as often as you like, and you have the option to cancel any time before the end of your free 7-day trial has passed.",
			isOpen: false,
		},
		{
			name: "How does the free 7-day trial work?",
			content:
				"Start your free 7-day trial by signing up for a Blinkist yearly plan. There’s no obligation to stay subscribed, and you'll only be charged on the day the free 7-day trial ends. Subscribe to Premium, learn as much and as often as you like, and you have the option to cancel any time before the end of your free 7-day trial has passed.",
			isOpen: false,
		},
		{
			name: "How does the free 7-day trial work?",
			content:
				"Start your free 7-day trial by signing up for a Blinkist yearly plan. There’s no obligation to stay subscribed, and you'll only be charged on the day the free 7-day trial ends. Subscribe to Premium, learn as much and as often as you like, and you have the option to cancel any time before the end of your free 7-day trial has passed.",
			isOpen: false,
		},
		{
			name: "How does the free 7-day trial work?",
			content:
				"Start your free 7-day trial by signing up for a Blinkist yearly plan. There’s no obligation to stay subscribed, and you'll only be charged on the day the free 7-day trial ends. Subscribe to Premium, learn as much and as often as you like, and you have the option to cancel any time before the end of your free 7-day trial has passed.",
			isOpen: false,
		},
	]);

	const [DMenuItems, setDMenuItems] = useState([
		{
			name: "What is the main message of The 5 AM Club?",
			content:
				"The main message of The 5 AM Club is the power of starting your day early and prioritizing personal growth.",
			isOpen: false,
		},
		{
			name: "What is the main message of The 5 AM Club?",
			content:
				"The main message of The 5 AM Club is the power of starting your day early and prioritizing personal growth.",
			isOpen: false,
		},
		{
			name: "What is the main message of The 5 AM Club?",
			content:
				"The main message of The 5 AM Club is the power of starting your day early and prioritizing personal growth.",
			isOpen: false,
		},
		{
			name: "What is the main message of The 5 AM Club?",
			content:
				"The main message of The 5 AM Club is the power of starting your day early and prioritizing personal growth.",
			isOpen: false,
		},
	]);

  	const handleSubMenuClick = (name) => {
			setActiveMenu(name);
		};

	const toggleDropdown = (i) => {
		if (page === 'H') {
	 const updatedMenuItems = [...HomeMenuItems];
		updatedMenuItems[i].isOpen = !updatedMenuItems[i].isOpen;
		setHomeMenuItems(updatedMenuItems);
		} else {
			const updatedMenuItems = [...DmenuItems];
			updatedMenuItems[i].isOpen = !updatedMenuItems[i].isOpen;
			setDMenuItems(updatedMenuItems);
 }
  };
	return (
		<div className="max-w-7xl mx-auto p-4 flex flex-col gap-10 items-center  min-h-screen">
			<h3 className="text-center max-w-3xl text-3xl p-5 font-semibold ">
				{title}
			</h3>

			<div className="flex flex-col w-full max-w-3xl gap-10 text-xl">
				{page === "H" &&
					HomeMenuItems.map((item, i) => (
						<div
							key={i}
							onClick={() => toggleDropdown(i)}
							className="flex flex-col items-center gap-2 group cursor-pointer pb-5 border-b-2 ">
							<div className="flex items-center justify-between gap-2 group cursor-pointer w-full  ">
								<p
									className="group-hover:text-blue-300 font-semibold"
									onClick={() => handleSubMenuClick(item.name)}>
									{item.name}{" "}
								</p>
								{item.isOpen ? (
									<IoIosArrowUp className="w-6 h-6 group-hover:text-blue-300" />
								) : (
									<IoIosArrowDown className="w-6 h-6 group-hover:text-blue-300" />
								)}
							</div>
							{item.isOpen && (
								<div className=" rounded-lg  bg-white ">
									<p className=" hover:text-gray-300">{item.content}</p>
								</div>
							)}
						</div>
					))}

				{page === "D" &&
					DMenuItems.map((item, i) => (
						<div
							key={i}
							onClick={() => toggleDropdown(i)}
							className="flex flex-col items-center gap-2 group cursor-pointer pb-5 border-b-2 ">
							<div className="flex items-center justify-between gap-2 group cursor-pointer w-full  ">
								<p
									className="group-hover:text-blue-300 font-semibold"
									onClick={() => handleSubMenuClick(item.name)}>
									{item.name}{" "}
								</p>
								{item.isOpen ? (
									<IoIosArrowUp className="w-6 h-6 group-hover:text-blue-300" />
								) : (
									<IoIosArrowDown className="w-6 h-6 group-hover:text-blue-300" />
								)}
							</div>
							{item.isOpen && (
								<div className=" rounded-lg  bg-white ">
									<p className=" hover:text-gray-300">{item.content}</p>
								</div>
							)}
						</div>
					))}
			</div>
		</div>
	);
}

export default Questions;
