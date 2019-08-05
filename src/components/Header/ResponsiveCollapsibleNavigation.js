import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'
import collapsibleWrapper from '../_collapse/collapsibleWrapper'
import responsiveWrapper from '../_responsivePage/responsiveWrapper'

/*
 * This is a smart component (contains smart component responsiveWrapper)
 *  
 * This is the Navigation component wrapped with collapsibleWrapper and responsiveWrapper
 * it's collapsibility will be enabled at certain window width
 * 
 */


//collapsible & display change with 'trigger'
const Collapse = collapsibleWrapper(Navigation)
class CollapsibleNavigation extends Component{
  static propTypes = {
    trigger: PropTypes.bool
	}
	
	render(){
		return (
			<div className='collapsible-navigation' style={{display: 'inline-block'}}>
					<Collapse 
						enabled={this.props.trigger} 
						display={this.props.trigger?'block':'inline-block'}
						{...this.props}
					/>
			</div>)
	}
}

//bind 'trigger' to viewport-width
//In this case, the navigation is collapsible when viewport-width is smaller than 992px('md')
export default responsiveWrapper(CollapsibleNavigation, 'md', -1)
