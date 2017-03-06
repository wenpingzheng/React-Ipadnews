import React, {Component} from 'react'

// All data
// import API from '../assets/script/api'

function SinglePic ({ data,key }) {
	const onePic = {
		backgroundImage:"url("+data['img_418x236']+")"
	};
	// const time = API.formatTime(data.pub_time);
	return (
		<a className="list-item single-pic" href={ data.url }>
			<div className="info">
				<h2 className="title">{ data.title }</h2>
				<div className="refrom">{ data.refrom }</div>
			</div>
			<div className="pic" style={ onePic }></div>
		</a>
	)
}

export default SinglePic
