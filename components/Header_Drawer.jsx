import Link from 'next/link';
import React from 'react'
import { MdArrowBack, MdArrowForwardIos } from 'react-icons/md';
import { RiLoginBoxLine } from 'react-icons/ri';
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

function Header_Drawer() {
  const [isOpen, setIsOpen] = React.useState(false);
	const toggleDrawer = () => {
		setIsOpen((prevState) => !prevState);
	};
  return (
		<div className="p-5 flex flex-col gap-5">
			<Link
				href="/login"
				className="flex items-center gap-1 group border-b-2 pb-5">
				<RiLoginBoxLine className="w-8 h-8 group-hover:text-blue-300" />
				<p className=" group-hover:text-blue-400">Login</p>
			</Link>

			<div className="flex flex-col gap-5">
				<h3 className="text-sm font-bold">CATEGORIES</h3>
				<div>
					<div
						onClick={toggleDrawer}
						className="flex items-center justify-between gap-1 group border-b-2 pb-5">
						<p className=" group-hover:text-blue-400">
							Inspirtion & Personal Growth
						</p>
						<MdArrowForwardIos className="w-5 h-5 group-hover:text-blue-300" />
					</div>

					<Drawer open={isOpen} direction="left" size={400}>
						<div className="flex flex-col p-5">
							<div className="flex items-center justify-between border-b">
								<img src="/logo.png" alt="Logo" className="h-20 -mt-2 cover" />

								<MdArrowBack
									className="w-8 h-8 cursor-pointer"
									onClick={toggleDrawer}
								/>
							</div>

							<ul className='p-5 space-y-10'>
								<li>Personal Developmnt</li>
								<li>Personal Developmnt</li> <li>Personal Developmnt</li>{" "}
								<li>Personal Developmnt</li> <li>Personal Developmnt</li>{" "}
								<li>Personal Developmnt</li>
							</ul>
						</div>
					</Drawer>
				</div>
			</div>

			<div className="group border-b-2 pb-5">
				<p className=" group-hover:text-blue-400">For Business</p>
			</div>
		</div>
	);
}

export default Header_Drawer