import React, {Component} from 'react'
import { Link } from 'react-router'

// All data
import API from '../assets/script/api'


class Toptab extends Component {
	render() {
		let navList = [];
		API.navData.map(function (item, index) {
			navList.push(
				<Link to={`/${item.id}`}
					activeClassName="active"
					data-bosslezone={item.bosslezone}
					data-bosspac={item.bosspac}
					data-eid={item.id} className="tab-item" key={index}>
					{item.name}
				</Link>
			)
		})
		return (
			<div className="top-tab">
				{ navList }
			</div>
		)
	}
}

export default Toptab;