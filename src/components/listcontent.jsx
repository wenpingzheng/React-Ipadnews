import React, { Component } from 'react'
import { Link } from 'react-router'

import MultiPic from './multipic'
import SinglePic from './singlepic'
import FoucsPic from './focuspic'
import FoucsList from './focuslist'


function ListContent({ source }) {
	let html = [];
	let headpic = [];
	let headcon = [];
	if(source.length != 0){
		source.forEach(function(value,index){
			if(index < 4){
				if(index == 0){
					headpic.push(<FoucsPic data={value} key={index}/>);
				}else{
					headcon.push(<FoucsList data={value} key={index}/>);
				}
			}else{
				if(value.article_type == 2){
					html.push(<MultiPic data={value} key={index}/>);
				}else{
					html.push(<SinglePic data={value} key={index}/>);
				}
			}
		});
		return(
			<div className="list-content">
			{/* 焦点图 S */}
				<div className="head-content">
					<div className="float-left">
						<ul>{headpic}</ul>
					</div>
					<div className="float-right">
						<ul>{headcon}</ul>
					</div>
				</div>
			{/* 焦点图 E */}
				{ html }
			</div>
		);
	}else{
		return(
			<div className="load-wrap">
				加载中...
			</div>
		)	
	}
}

export default ListContent;