import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom' 

/**
 * This is a dumb component
 * It simply generates a set of Links wrapped in a nav tag with array data from the pagesData property
 * 
 * properties:
 * 		  pagesData: an array of the path and name of pages 
 * 		  display: display navigation items as inline-block or block
 * 
 * *Note: in this React project we use router to navigate pages, 
 * 		  so the navigation items are <Link></Link> component rather than <a></a> tag
 * 		  As a result, this component must be wrapped within <Router></Router> when used,
 * 		  where <Route/> should also be specified with the data same with those in pagesData 
 */

export default class Navigation extends Component{
	static propTypes = {
		pagesData: PropTypes.array,
		display: PropTypes.string
	}

	static defaultProps = {
		pagesData: []
	}

	_linksCreator(pagesData){
		let links = []
		pagesData.forEach((page, index)=>{
			if(page.navType === 'LINK')
				links.push(
					<Link key={index} to={page.path} className='navigation-item' style={{display: this.props.display}}>{page.name}</Link>
				)
		})
		return links;
	}

	// if using anchor rather than router:
	// _anchorsCreator(pagesData){
	// 	let anchors = []
	// 	pagesData.forEach((page, index)=>{
	// 		if(page.navType === 'ANCHOR')
	// 			anchors.push(
	// 				<a key={index} href={page.path} className='navigation-item' style={{display: this.props.display}}>{page.name}</a>
	// 			)
	// 	})
	// 	return anchors;
	// }

	render(){
		return (
			<nav className="navigation">
				{this._linksCreator(this.props.pagesData)}
			</nav>);
	}
}
