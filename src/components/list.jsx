import React, { Component } from 'react';
import { Link } from 'react-router';

import $ from "jquery";
import API from '../assets/script/api';
// Component
import Toptab from './toptab';
import ListContent from './listcontent';


class List extends Component {
	constructor(props){
		super(props);
		this.randomPage = Math.floor(Math.random()*10 + 1);
		this.urlParams = {
			channel:this.props.params.listId,
			num:10,
			page:this.randomPage
		};
		window.listContent = function () {};
		this.Ajax = {};         // 请求中断对象
		this.contentData=[];    // 装载数据容器
		this.loadScroll = true; // 给滚动加把锁
		this.loadData = false;    // 区分自刷新
		this.state = {
			url:'http://10.234.12.175/pc/ipad?',
			data:[],
			loadStatus:'none',
			loadText:'正在加载中，请稍后...'
		};
		this.contentList = this.contentList.bind(this);
		this.ScrollEvent = this.ScrollEvent.bind(this);
		this.addScrollEvent = this.addScrollEvent.bind(this);
		this.removeScrollEvent = this.removeScrollEvent.bind(this);
	};
	contentList() {
		this.Ajax = $.ajax({
			url:this.state.url,
			data:this.urlParams,
			dataType: 'jsonp',
			jsonpCallback: 'listContent'
		})
		.done(function (result) {
			if (result.code == 0) {
				this.loadData = true;
				const rdata = result.data;
				const length = rdata.length;
				for(let i=0;i<length;i++){
					this.contentData.push(rdata[i]);
				}
				this.setState({
					data:this.contentData
				});
				if(length < 7){
					this.urlParams.page = this.urlParams.page + 1;
					if(this.urlParams.page == this.randomPage){
						this.urlParams.page = this.urlParams.page + 1;
					};
					this.contentList();
				}else{
					this.setState({
						loadStatus:"block"
					});
				}
			} else {
				// 随机页数不存在
				if(this.contentData.length == 0){
					this.randomPage = 1;
					this.contentList();
					return false;
				};
				// 数据结束
				this.loadData = true;
				this.setState({
					loadStatus:"block",
					loadText:"无更多内容"
				});
				this.removeScrollEvent();
				console.log('responese error');
			};
			this.loadData = false;
		}.bind(this))
	};
	ScrollEvent(){
		let windowTop = Math.round($(window).scrollTop()),
		documentHeight  = $(document).height(),
		windowHeight  = $(window).height(),
		scrollLength  = windowTop + windowHeight;
		if(scrollLength > documentHeight-240){
			if(this.loadScroll){
				this.loadScroll = false;
				this.urlParams.page = this.urlParams.page + 1;
				if(this.urlParams.page == this.randomPage){
					this.urlParams.page = this.urlParams.page + 1;
				};
				this.contentList();
			}
		}else{
			this.loadScroll = true;
		}
	};
	addScrollEvent(){
		API.addEvent(window,'scroll',this.ScrollEvent);
	};
	removeScrollEvent(){
		API.removeEvent(window,'scroll',this.ScrollEvent);
	};
	componentDidMount(){
		this.contentList();
		this.addScrollEvent();
		this.urlParams.page = 0;
		if (typeof (pgvMain) == 'function'){
			pgvMain();
		}
	};
	componentDidUpdate(){
		/*
			0、this.loadData,this.urlParams.channel==ListId
			1、false 不等 - 切换 
			2、false 相等 - 自刷
		*/
		if(this.loadData){
			return;
		}
		let ListId = this.props.params.listId;
		this.loadData = true;
		this.setState({
			loadStatus:'none',
			loadText:'正在加载中，请稍后...'
		});
		if(this.Ajax.abort){
			this.Ajax.abort();
		}
		this.urlParams.channel = ListId;
		this.randomPage = Math.floor(Math.random()*10 + 1);
		this.urlParams.page = this.randomPage;
		this.contentData=[];
		this.setState({
			data:this.contentData
		});
		this.contentList();
		API.addEvent(window,'scroll',this.ScrollEvent);
		this.urlParams.page = 0;
	};
	componentWillUnmount(){
		this.removeScrollEvent();
	};
	render() {
		const { data, loadStatus, loadText } = this.state;
		const style = {
			display:loadStatus
		};
		return (
			<div className='list-wrap'>
				<Toptab/>
				<ListContent source={ data } />
				<div className='loading' style={style}>
					{ loadText }
				</div>
			</div>
		)
	}
}

export default List;