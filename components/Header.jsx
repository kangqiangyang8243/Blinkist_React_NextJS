"use client";
import React, { useState } from "react";
import logo from "../public/logo.png";
import Link from "next/link";
import { RiLoginBoxLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp, IoIosMenu } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTruckArrowRight } from "react-icons/fa6";
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import Header_Drawer from "./Header_Drawer";
function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [activeMenu, setActiveMenu] = useState("main");
	const [isShow, setIsShow] = useState(false);
	
	 const [isOpen, setIsOpen] = React.useState(false);
		

	const [menuItems, setMenuItems] = useState([
		{
			name: "Category 1",
			subMenu: [
				{ name: "Subcategory 1.1", subMenu: [] },
				{ name: "Subcategory 1.2", subMenu: [] },
			],
		},
		{
			name: "Category 2",
			subMenu: [
				{ name: "Subcategory 2.1", subMenu: [] },
				{ name: "Subcategory 2.2", subMenu: [] },
			],
		},
		{
			name: "Category 3",
			subMenu: [
				{ name: "Subcategory 3.1", subMenu: [] },
				{ name: "Subcategory 3.2", subMenu: [] },
			],
		},
	]);

	const handleSubMenuClick = (name) => {
		setActiveMenu(name);
		setIsShow(true)
	};

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
		setIsShow(false)
		setActiveMenu("main");
	};

	const toggleDrawer = () => {
		setIsOpen((prevState) => !prevState);
	};


	return (
		<header className="w-full  border-b fixed bg-white z-50 px-4">
			<div className="max-w-7xl mx-auto p-4 flex justify-between  items-center text-xl ">
				{/* Logo */}

				<div className="flex items-center gap-5 ">
					<div className="flex items-center gap-3">
						<IoIosMenu onClick={toggleDrawer} className="w-8 h-8 lg:hidden" />

						<Drawer open={isOpen} direction="left" size={400}>
							<div className="flex flex-col p-5">
								<div className="flex items-center justify-between border-b">
									<img
										src="/logo.png"
										alt="Logo"
										className="h-20 -mt-2 cover"
									/>

									<p
										className="text-xl font-bold cursor-pointer pr-5"
										onClick={toggleDrawer}>
										X
									</p>
								</div>

								<Header_Drawer />
							</div>
						</Drawer>

						<img src="/logo.png" alt="Logo" className="h-20 -mt-2 cover" />
					</div>

					<div
						onClick={toggleDropdown}
						className="hidden lg:inline-flex items-center gap-2 group cursor-pointer relative ">
						<p className="group-hover:text-blue-300">Categories </p>
						{isDropdownOpen ? (
							<IoIosArrowUp className="w-6 h-6 group-hover:text-blue-300" />
						) : (
							<IoIosArrowDown className="w-6 h-6 group-hover:text-blue-300" />
						)}

						{isDropdownOpen && (
							<div className="absolute rounded-lg border p-4  top-10 -left-2  bg-white w-[400px]">
								{menuItems.map((item, index) => (
									<div
										key={index}
										className={`${isShow ? "border-r-2" : "border-r-0"}`}>
										<div
											className={`flex items-center justify-between pb-10 pr-4`}
											onMouseEnter={() => handleSubMenuClick(item.name)}>
											{" "}
											<p className=" hover:text-gray-300">{item.name}</p>
											<MdKeyboardArrowRight />
										</div>

										{activeMenu === item.name && (
											<div className=" absolute top-0 left-full mt-0 -ml-2 p-4 bg-white rounded-lg border  border-l-0 w-full  h-full ">
												{item.subMenu.map((subItem, subIndex) => (
													<Link href='/black' key={subIndex}>
														<div className="flex items-center gap-4 pb-10 ">
															<FaTruckArrowRight />

															<p key={subIndex} className="hover:text-gray-300">
																{subItem.name}
															</p>
														</div>
													</Link>
												))}
											</div>
										)}
									</div>
								))}
							</div>
						)}
					</div>
				</div>

				{/* Links and Button */}
				<div className="flex gap-5 ">
					<div className="hidden lg:inline-flex items-center gap-5 ">
						<Link href="/black">
							<p className=" hover:text-blue-400">For Business</p>
						</Link>

						<Link href="/black">
							<p className=" hover:text-blue-400"> Coaching</p>
						</Link>

						{/* Login link */}
						<Link href="/black" className="flex items-center gap-1 group">
							<RiLoginBoxLine className="w-8 h-8 group-hover:text-blue-300" />
							<p className=" group-hover:text-blue-400">Login</p>
						</Link>
					</div>

					{/* Start free trial button */}
					<Link href="/black">
						<button className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded">
							Start free trial
						</button>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Header;
