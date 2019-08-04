import React, {Component} from 'react'
import PropTypes from 'prop-types'
import responsiveWrapper from './responsiveWrapper'

/**
 * This is a smart component(contains smart component responsiveWrapper) and an advanced component(wrapper)
 * This is an extension of the responsiveWrapper - 
 * it automatically toggles the wrappedComponent's display between block & auto-margin and inline-block & preset-margin when viewport width changes
 * 
 * *Hint: It generally allows a component to start a new line and center itself when the viewport width is smaller than certain value 
 */

export default (WrappedComponent, triggerPoint, triggerDirection)=>{
    class ToggleDisplayComponent extends Component{
        static propTypes={
            trigger: PropTypes.bool
        }
        _handleResponsive(trigger){
            if(trigger) return {display: 'block', margin: 'auto'}
            else return {display: 'inline-block'}
        }

        render(){
            return <WrappedComponent display={this._handleResponsive(this.props.trigger)}/>
        }
    }
    return responsiveWrapper(ToggleDisplayComponent, triggerPoint, triggerDirection)
}