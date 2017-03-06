# 智推iPad端说明文档 #

- **接口说明**
 
	- 测试服务器：`http://10.234.12.175/`
	- 线上服务器：`http://i.match.qq.com/`
	- 接口地址：`pc/ipad`
	- 接口参数：

**字符** | **描述**
-|-	
num | 请求资源返回的条数，最大100条/每页 
page | 分页参数 1、2、3
channel | 频道信息，`news、ent、sports、finance、tech`
format | 返回的数据格式，可以为：xml、json(默认)、jsonp
demo | http://10.234.12.175/pc/ipad?num=10&page=1&channel=sports


- **产品功能**

	- **适配方式**，智推接入iPad端qq客户端，分横屏和竖屏两种适配方式，前端采用css媒体查询的方式对不同分辨率进行适配。
	
	- **随机逻辑**，页面刷新需要随机展示内容，目前后端接口做不到时时随机，需要前端在接口拉取时做一下页码随机，首屏随机取1-6，后面加载剔除首屏已加载的内容。
	
	- **频道切换**，保留随机逻辑，`要闻、娱乐、体育、财经、科技`

- **统计部分**

	- **点击统计**

	- **流量统计**

		- pgv 

		`<script src="http://pingjs.qq.com/ping.js"></script>
		<script>if (typeof (pgvMain) == 'function') pgvMain();</script>`

		- 腾讯分析： 
		 
		`<script type="text/javascript" src="http://tajs.qq.com/stats?sId=59378091" charset="UTF-8"></script>`