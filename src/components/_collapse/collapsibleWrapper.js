import React, {Component} from 'react'
import PropTypes from 'prop-types'

/** 
 * This is a dumb(pure) component and a wrapper
 *  
 * This wrapper make the wrapped component collapsible by adding a button to it - 
 * user can toggle its display between collapse and show by clicking the button
 * 
 * Collapsibility can be disabled when 'disabled' property is set to true
 * 
 * This wrapper can be further extended as an accordion component when accordion property is true
 */
export default (WrappedComponent)=>{
	class CollapsibleWrapper extends Component{
		static propTypes={
			enabled: PropTypes.bool,
			buttonName: PropTypes.string, 
			btnDisplay: PropTypes.object,
			index: PropTypes.number,

			/*the three properties below supports the accordion feature*/

			//set the initial/accordion collapse/show status
			collapse: PropTypes.bool,
			//when enabled, collapsibility is controled by this.props.collapse rather than this.state.collapse
			accordion: PropTypes.bool,
			//communication with outside components
			onClickBtn: PropTypes.func
		}

		static defaultProps={
			enabled: true,
			collapse: true
		}

		constructor(){
			super()
			this.state={
				height: null,
				collapse: true
			}
		}

		componentWillMount(){
			this.setState({
				collapse: this.props.collapse,
				height:this.props.collapse?'0px':'auto'
			})
		}

		_toggleCollapse = ()=>{
			this.setState({collapse: !this.state.collapse})
			this.setState((prestate)=>({height:prestate.collapse?'0px':'auto'}))
		}

		_getHeight(){
			let height = null;
			//if collapsibility is enabled
			if(this.props.enabled){
				//accordion model, height depends on this.props.collapse
				if(this.props.accordion) 
					height=this.props.collapse?'0':'auto'
				//normal model, height depends on this.state.collapse
				else 
					height=this.state.height
			}
			//if collapsibility is disabled
			else 
				height='auto'
			return height
		}

		onClickBtn =()=>{
			this._toggleCollapse()
			//pass the index up to support accordion feature
			if(this.props.onClickBtn)
				this.props.onClickBtn(this.props.index) 
		}

		render(){
			return (
				<div>
					<button 
						onMouseUpCapture={this.onClickBtn} 
						className='collapse-button' 
						style={
							//if disabled, hide the button
							{...this.props.btnDisplay, display: this.props.enabled?'block':'none'}
						}
					>{this.props.buttonName}</button>
					<div 
						className = 'collapse' 
						ref={(div)=>this.div = div} 
						style={{overflow: 'hidden', height: this._getHeight()}}
					>
						<WrappedComponent {...this.props}/>
					</div>
				</div>
			)
		}
	}
		
	return CollapsibleWrapper
}