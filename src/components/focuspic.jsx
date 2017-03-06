import React, {Component} from 'react'



function FoucsPic ({ data }) {
	const onePic = {
		backgroundImage:"url("+data['img_948x586']+")"
	};

	return (
		<li>
			<a href={data.url} style={onePic}></a>
			<h2 className="title">{data.title}</h2>
		</li>
	)
}

export default FoucsPic
