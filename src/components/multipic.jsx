import React, {Component} from 'react'

// All data
// import API from '../assets/script/api'


function MultiPic ({ data }) {
	const onePic = {
		backgroundImage:"url("+data.imgs[0].simg+")"
	};
	const twoPic = {
		backgroundImage:"url("+data.imgs[1].simg+")"
	};
	const threePic = {
		backgroundImage:"url("+data.imgs[2].simg+")"
	};
	// const time = API.formatTime(data.pub_time);
	return (
		<a className="list-item multi-pic" href={ data.url }>
			<h2 className="title">{ data.title }</h2>
			<div className="pic-wrap">
				<div className="pic" style={ onePic }></div>
				<div className="pic" style={ twoPic }></div>
				<div className="pic" style={ threePic }></div>
			</div>
			<div className="refrom">{data.refrom}</div>
		</a>
	)
}

export default MultiPic
