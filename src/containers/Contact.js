import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Page from '../components/Main/Page'
import { ReactComponent as Map } from '../images/map-marker-alt-solid.svg'
import { ReactComponent as Email } from '../images/envelope-regular.svg'
import { ReactComponent as Mobile } from '../images/mobile-alt-solid.svg'
import { ReactComponent as WeChat } from '../images/weixin-brands.svg'
import { ReactComponent as Github } from '../images/github-brands.svg'

/** 
 * This is the contact page
 *   
 * Property:
 * 		display: centered block or inline-block
 * 
 * *Note: needs to complete the send email function with back-end support
 * 
 */

export default class Contact extends Component{
	static propTypes={
	display: PropTypes.object
	}

	constructor(){
		super()
		this.state={
			name: '',
			email: '',
			message:''
		}
	}

	handleNameChange=(event)=>{
		this.setState({name: event.target.value})
	}

	handleEmailChange=(event)=>{
		this.setState({email: event.target.value})
	}

	handleMessageChange=(event)=>{
		this.setState({message: event.target.value})
	}

	_sendEmail=()=>{
		const name = this.state.name
		const email =this.state.email
		const message = this.state.message
		const reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
		if(!reg.test(email)) return alert('Please enter a valid email address')
		
		//code to send email
	}

	render(){
		return (
			<Page className='contact'>
				<h1>Contact</h1>
				<div className='row'>
					<div style={this.props.display} className='contact-form'>
						<form onSubmit={this._sendEmail}>
							<div>
								<input 
									onChange={this.handleNameChange} 
									type='text' 
									placeholder='Name' 
									value={this.state.name} 
									required
								/>
							</div>
							<div>
								<input 
									onChange={this.handleEmailChange} 
									type='text' 
									placeholder='Email' 
									value={this.state.email} 
									required
								/>
							</div>
							<div>
								<textarea 
									onChange={this.handleMessageChange} 
									placeholder='Message' 
									value={this.state.message} 
									required
								/>
							</div>
							<button type='submit'>Send</button>
						</form>
					</div>
					<div style={this.props.display}	className='information'>
						<p><Map/><span>41/212 the Avenue, Parkville VIC 3052</span></p>
						<p><Email/><span>dapengzhang1992@gmail.com</span></p>
						<p><Mobile/><span>0452 609 520</span></p>
						<p><WeChat/><span>ex732275885</span></p>
						<p><Github/>
							<span>
								<a 
									className='github' 
									target='_blank' 
									href="https://github.com/DonoZhang"
								>https://github.com/DonoZhang</a>
							</span>
						</p>
					</div>		
				</div>
			</Page>)
	}
}