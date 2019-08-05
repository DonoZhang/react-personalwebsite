import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Navigation from '../components/Header/ResponsiveCollapsibleNavigation'

/**
 * This is a smart component (contains ResponsiveCollapsibleNavigation)
 * This is the Header of the website and user can set its brand 
 *  
 * Build in style:
 *      it is fixed at the top of window 
 *      its width is styled as the full window-width
 * 
 */


export default class Header extends Component{
	static propTypes = {
		brand: PropTypes.string
	}

	render(){
		return (
			<div className="header-wrapper" style={{position: 'fixed',top: '0', width: '100vw'}}>
				<div className="header">
					<h1 className="header-brand">{this.props.brand}</h1>
					<Navigation {...this.props}/>
				</div>
			</div>)
	}
}