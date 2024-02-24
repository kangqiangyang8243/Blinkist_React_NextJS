import React from 'react'


function D_Cards({img,title,author,content,time,rate,Icon}) {
  return (
		<div className="flex flex-col gap-2 text-sm max-w-[300px] hover:bg-green-950 cursor-pointer hover:shadow-lg p-2 mx-5">
			<img src={img} alt="" />

			<p className="font-bold">{title}</p>

			<p>{author}</p>

			<p>{content}</p>

			<div className="flex items-center gap-5">
				<div className="flex items-center gap-1">
					<Icon className="w-5 h-5" />
					<p>{time}</p>
				</div>

				<div className="flex items-center gap-2">
					<Icon className="w-5 h-5" />
					<p>{rate}</p>
				</div>
			</div>
		</div>
	);
}

export default D_Cards

