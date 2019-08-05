import React, {Component} from 'react'
import PropTypes from 'prop-types'
import collapsibleWrapper from './collapsibleWrapper'

/** 
 * This is a dumb(pure) component and an extended use of the collapsibleWrapper (./collapsibleWrapper.js)
 * 
 * This component behaves like an accordion collapse component:
 * when user click one of the buttons, the according accordion item will show while the others will collapse automatically
 * It receives accordion items from its children property and the names of the buttons from the buttonNames property
 * 
 * the buttons are styled to full widtn
 */


//tool class
class AccordionItem extends Component{
	static propTypes = {
		buttonName: PropTypes.string,
		children: PropTypes.any.isRequired
	}

	constructor(props){
		super(props)
		this.state={
			children: this.props.children,
			CollapsibleComponent: null
		}
	}

	componentWillMount(){
		this._handleWrap()
	}

	//make children property collapsible
	_handleWrap = ()=>{
		this.setState({children: this.props.children})
		this.setState((prestate)=>{
			class _CollapsibleComponent extends Component{
				render(){
					return(<div className='accordion-item'>{prestate.children}</div>)
				}
			}
			_CollapsibleComponent = collapsibleWrapper(_CollapsibleComponent)
			return {CollapsibleComponent: _CollapsibleComponent}
		})
	}
	render(){
		return (
			<this.state.CollapsibleComponent
				buttonName={this.props.buttonName}
				btnDisplay={{width: '100%'}}
				{...this.props}/>
		)
	}
}

export default class Accordion extends Component{
	static propTypes = {
		children: PropTypes.array,
		buttonNames: PropTypes.array
	}

	constructor(props){
		super(props)
		this.state={
			activeItem: 0 //by default, the first item is shown when page is ready
		}
	}

	//communicate with collapsibleWrapper, find which accordion item is active
	_onClickBtn=(index)=>{
		this.setState({activeItem: index})
	}

	//generate accordion items from children property
	_getItems(){
		let accordion = []
		let buttonName = ''
		this.props.children.forEach((child, index)=>{
			buttonName=this.props.buttonNames[index]?this.props.buttonNames[index]:''
			accordion.push(<AccordionItem 
								key={index} 
								index={index} 
								buttonName={buttonName} 
								accordion={true/* enable accordion, now collapse is controled by the collapse property below*/}
								onClickBtn={this._onClickBtn}
								collapse={index!==this.state.activeItem/* only to show the active item*/}>{child}</AccordionItem>)
		})
		return accordion
	}

	render(){
		return (
			<div className='accordion'>
				{this._getItems()}
			</div>
		)
	}
}