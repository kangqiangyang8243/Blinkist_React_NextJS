import React from 'react'

function C_list({Icon,name,trust}) {
  return (
		<div
			className={`flex items-center gap-2  ${
				trust ? "" : "bg-gray-200 rounded-md"
			}  p-2`}>
			{Icon && <Icon className="w-8 h-8" />}
			<span className="">{name}</span>
		</div>
	);
}

export default C_list