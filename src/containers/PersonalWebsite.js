import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Resume from './Resume'
import Contact from './Contact'
import toggleDisplayWrapper from '../components/_responsivePage/toggleDisplayWrapper'

//data to initialize navigation and Route for router
//*Note: toggleDisplayWrapper is used to make element layout responsive to viewport width (center and start a new line when smaller than 'lg')
const pagesData=[
	{navType: 'LINK', path: '/react-personalwebsite/', name: 'Home', component:  toggleDisplayWrapper(Home, 'lg', -1)},
	{navType: 'LINK', path: '/react-personalwebsite/resume', name: 'Resume', component:  toggleDisplayWrapper(Resume, 'lg', -1)},
	{navType: 'LINK', path: '/react-personalwebsite/contact', name: 'Contact', component:  toggleDisplayWrapper(Contact, 'lg', -1)}
]

/** 
 * This is the main app container
 *  
 * This component is also responsible of dispatching the viewportWidth state in redux, which is then used by responsiveWrapper.
 * With this design, only one window-resize listener is required no matter how many responsive elements are added to the whole website.
 * This will improve performance
 * 
 */

class PersonalWebsite extends Component{
	static propTypes = {
		onResize: PropTypes.func
	}

	componentDidMount(){
		window.addEventListener('resize', this._handleResize)
	}

	componentWillUnmount(){
		window.removeEventListener(this._handleResize)
	}

	_handleResize = ()=>{
		if(this.props.onResize){
			this.props.onResize(window.innerWidth)
		}
	}

	_createRoutes(pagesData){
		const routes = []
		pagesData.forEach((page, index)=>routes.push(<Route key={index} path={page.path} exact component={page.component}/>))
		return routes
	}

	render(){
		return (<Router>
							<Header brand='Dapeng Zhang' pagesData={pagesData}/>{/*pass 'pagesData' down to 'Navigation'*/}
							{this._createRoutes(pagesData)}
						</Router>);
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		onResize: (viewportWidth)=>{
			dispatch({type: 'UPDATE_VIEWPORT_WIDTH', viewportWidth})
		}
	}
}

export default connect(null, mapDispatchToProps)(PersonalWebsite)