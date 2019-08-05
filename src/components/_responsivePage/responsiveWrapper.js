import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
	
/*
 * This is a smart component with its viewportWidth property depending on the state in redux
 * This is a wrapper
 * This wrapper set the trigger(bool) property of the wrapped component in response to viewport width change
 *   
 * Parameters:
 * 	WrappedComponent
 * 	triggerPoint: only four strings allowed: 'sm'(576px), 'md'(768px), 'lg'(992px) and 'xl'(1200px)
 *  triggerDirection: 
 * 			positive number: trigger when viewportWidth is larger than triggerPoint
 * 			0: trigger when viewportWidth is exactly the triggerPoint
 * 			minus number: trigger when viewportWidth is smaller than triggerPoint
 * 
 * *Note: 
 * 		the redux state will be dispatched in container PersonalWebsite when the window is resized:
 * 		With such design, we don't need to add window-resize listener here; 
 * 		only one window-resize listener in PersonalWebsite is enought for the whole website.
 * 		This will improve performance by avoiding adding too many listeners
 */

export default (WrappedComponent, triggerPoint, triggerDirection)=>{
	class ResponsiveWrapper extends Component{
		static propTypes={
			viewportWidth: PropTypes.number  
		}

		_getTriggerWidth(triggerPoint){
			switch(triggerPoint){
				case 'sm': return 576
				case 'md': return 768
				case 'lg': return 992
				case 'xl': return 1200
				default: console.log("triggerPoint can only be 'sm', 'md', 'lg' or 'xl'")
			}
		}

		_getTrigger = ()=>{
			const viewportWidth = this.props.viewportWidth
			const triggerWidth = this._getTriggerWidth(triggerPoint)
			switch(true){
				case triggerDirection === 0:{
					//trigger when viewportWidth is exactly the triggerPoint
					return viewportWidth === triggerWidth
				}
				case triggerDirection > 0:{
					//trigger when viewportWidth is larger than triggerPoint 
					return viewportWidth > triggerWidth
				}
				case triggerDirection < 0:{
					//trigger when viewportWidth is smaller than triggerPoint
					return viewportWidth < triggerWidth
				}
				default:{
					return
				}
			}
		}

		render(){
			return <WrappedComponent trigger = {this._getTrigger()} {...this.props}/>
		}
	}

	const mapStateToProps = (state)=>{
		return {
			viewportWidth: state.viewportWidth,
		}
	}
    
	return connect(mapStateToProps)(ResponsiveWrapper)
}