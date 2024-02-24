"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { PiFileAudioBold } from "react-icons/pi";

function Details_IdeaKey() {
    const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");
		const [showPassword, setShowPassword] = useState(false);

		const handleSubmit = (e) => {
			e.preventDefault();
			// Add your form submission logic here
			console.log("Form submitted");
		};
  return (
		<div className="max-w-7xl mx-auto p-4 flex flex-col gap-2 bg-white rounded-md w-full">
			<h3 className="font-bold text-2xl">The 5 AM Club</h3>

			<p className="bg-yellow-600 text-2xl w-fit mb-3">
				Summary of 6 key ideas
			</p>

			<p className="flex items-center gap-3">
				<PiFileAudioBold className="w-5 h-5" />

				<span>Audio & text in the Blinkist app</span>
			</p>

			<p className="font-bold my-5">Key idea 1 of 6</p>

			<div className="flex flex-col lg:flex-row gap-10 mb-10">
				{/* left */}
				<div className="space-y-5 w-[80%]">
					<h3 className="font-bold text-xl">
						A chance meeting drew a disillusioned entrepreneur and a frustrated
						artist to the secrets of the 5 AM club.
					</h3>

					<p className="text-lg ">
						In these blinks, we’ll follow the fictitious tale of a curious group
						of people: A depressed entrepreneur, in need of revitalization; a
						frustrated artist, trying to refuel his creativity and develop a
						legacy; and a billionaire with a string of successes behind him and
						a desire to pass on the knowledge of how to live an extraordinary
						life.
						<br />
						<br />
						The three met at a personal optimization conference addressed by a
						legendary business guru, the Spellbinder, someone renowned for his
						ability to weave magic and captivate his audience with the power of
						his insights. The billionaire approached the entrepreneur and the
						artist after the Spellbinder’s speech had finished but they didn’t
						know that he was a billionaire. The billionaire was disguised as a
						poor man, a habit he had developed to remind himself that money
						isn’t everything. The only clue to his actual wealth was his
						expensive watch. The impoverished-looking billionaire told the two
						that he’d made a fortune thanks to the Spellbinder, who’d taught him
						that while many people wish that extraordinary things will happen to
						them, truly elite performers learn that they can make extraordinary
						things happen themselves. <br />
						<br />
						The entrepreneur and the artist became more and more curious about
						this mysterious man who talked like he was a guru himself. They
						listened as the billionaire explained how the Spellbinder – who, in
						fact, was the billionaire’s personal mentor – had taught him one
						thing that was more important than anything else. <br />
						<br />
						What was it? That the most reliable way to generate the best results
						in your personal and professional life is to build a world-beating
						morning routine. Being a generous man, the billionaire made an
						incredible offer. If the entrepreneur and artist wanted to come hang
						with him at his beach house in Mauritius, he would teach them the
						secrets of a world-class morning routine. All they needed to do was
						meet the next morning at 5:00 a.m. <br />
						<br />
						The entrepreneur and the artist were a little skeptical the next
						morning, but it started to soften when a chauffeur-driven
						Rolls-Royce collected them and delivered them to a hangar containing
						a sleek, ivory-colored private jet, which bore the logo: “5AC.”{" "}
						<br />
						<br />
						The entrepreneur asked the chauffeur what the logo meant, and he
						explained that it stood for “The 5 AM Club.” And so began their
						journey toward understanding a revolutionary morning routine and a
						whole new outlook on life with the potential to transform everything
						for the better. <br />
						<br />
						Early the next morning, the billionaire told the entrepreneur and
						artist how getting up at 5:00 a.m. was the way he had learned to
						escape mediocrity and achieve greatness. Getting up at 5:00 a.m. had
						promoted his creativity, doubled his energy, and tripled his
						productivity. How? <br />
						<br />
						Well, the billionaire told them, many true greats throughout
						history, from novelist John Grisham to composer Wolfgang Amadeus
						Mozart, have understood that the isolation that comes from getting
						up at 5:00 a.m. has a multiplying effect.
						<br />
						<br />
						<strong>
							A note to readers: this Blink was redone especially for audio.
							This is the reason why the text version might differ from the
							audio version. If you’re trying to decide whether to listen or to
							read, we highly recommend listening!
						</strong>
					</p>

					<form className="max-w-[400px] border rounded-md p-3 mx-auto">
						<div className="mb-4 space-y-5">
							<p className="text-lg font-semibold mb-2 text-center">
								Want to see all full key ideas from The 5 AM Club?
							</p>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email"
								className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mb-2"
							/>
							<div className="relative mb-2">
								<input
									type={showPassword ? "text" : "password"}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="Password"
									className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
								/>
								<button
									className="absolute top-0 right-0 mr-2 mt-2 p-1 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
									onClick={() => setShowPassword(!showPassword)}>
									{showPassword ? "Hide" : "Show"}
								</button>
							</div>
							<Link href="/black">
								<button
									onClick={handleSubmit}
									className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
									Create Account
								</button>
							</Link>
						</div>
						<div className="flex items-center justify-between mb-4">
							<hr className="w-full border-gray-300" />
							<span className="mx-4 text-gray-500">or</span>
							<hr className="w-full border-gray-300" />
						</div>
						<div className="flex flex-col items-center">
							<p className="mb-4">
								Our Terms of Service apply. For more info on our data
								processing, see our Privacy Policy.
							</p>
							<div className="flex flex-col gap-5 w-full">
								<button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline ">
									Sign up with Facebook
								</button>
								<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline ">
									Sign up with Google
								</button>
								<button className="bg-white-800 border-2 text-black font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
									Continue with Apple
								</button>
							</div>
						</div>
						<div className="mt-4 text-center">
							<a href="#" className="text-blue-600">
								Already have an account?
							</a>
						</div>
					</form>
				</div>

				{/* right */}
				<div className=" lg:w-1/3">
					<h3 className="font-bold">Key ideas in The 5 AM Club</h3>

					<ul className="flex flex-col items-center text-gray-600 w-full gap-5">
						<li className="border-b-2 w-full text-center py-5">Introduction</li>
						<li className="border-b-2 w-full pb-5">
							<div className="flex items-center gap-3">
								<p className="font-bold text-3xl text-black">1</p>
								<p className="text-sm">
									A chance meeting drew a disillusioned entrepreneur and a
									frustrated artist to the secrets of the 5 AM club.
								</p>
							</div>
						</li>
						<li className="border-b-2 w-full pb-5">
							<div className="flex items-center gap-3">
								<p className="font-bold text-3xl text-black">2</p>
								<p className="text-sm">
									A chance meeting drew a disillusioned entrepreneur and a
									frustrated artist to the secrets of the 5 AM club.
								</p>
							</div>
						</li>
						<li className="border-b-2 w-full pb-5">
							<div className="flex items-center gap-3">
								<p className="font-bold text-3xl text-black">3</p>
								<p className="text-sm">
									A chance meeting drew a disillusioned entrepreneur and a
									frustrated artist to the secrets of the 5 AM club.
								</p>
							</div>
						</li>
						<li className="border-b-2 w-full pb-5">
							<div className="flex items-center gap-3">
								<p className="font-bold text-3xl text-black">4</p>
								<p className="text-sm">
									A chance meeting drew a disillusioned entrepreneur and a
									frustrated artist to the secrets of the 5 AM club.
								</p>
							</div>
						</li>
						<li className="border-b-2 w-full pb-5">
							<div className="flex items-center gap-3">
								<p className="font-bold text-3xl text-black">5</p>
								<p className="text-sm">
									A chance meeting drew a disillusioned entrepreneur and a
									frustrated artist to the secrets of the 5 AM club.
								</p>
							</div>
						</li>
						<li className="border-b-2 w-full pb-5">
							<div className="flex items-center gap-3">
								<p className="font-bold text-3xl text-black">6</p>
								<p className="text-sm">
									A chance meeting drew a disillusioned entrepreneur and a
									frustrated artist to the secrets of the 5 AM club.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Details_IdeaKey