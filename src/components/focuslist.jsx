import React, {Component} from 'react'



function FoucsList ({ data }) {
	return (
		<li>
			<a href={data.url}>
				<h2 className="title">{data.title}</h2>
				<div className="refrom">{data.refrom}</div>
			</a>
		</li>
	)
}

export default FoucsList
