import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Page from '../components/Main/Page'
import profile from '../images/Profile.JPG'

/** 
 * This is the home page
 *  
 * Property:
 * 		display: centered block or inline-block
 */

export default class Home extends Component{
	static propTypes={
		display: PropTypes.object
	}

	render(){
		return (
				<Page className='home'>
					<div>
						<img className='profile' 
						src={profile} alt='profile'
						style={this.props.display}/>
						<div className='header-content' 
						style={this.props.display}>
							<p className='name'>Dapeng Zhang</p>
							<p className='position'>Front End Web Developer(React)</p>
						</div>
					</div>
					<div>
						<div className='summary' style={this.props.display}>
							<h2>
								About <span>Me</span>
							</h2>
							<p>
								Hello! I am Dapeng, a front-end website developer. I am currently looking for a junior front-end development job (React). I am keen to make new friends and work on challenging projects. Please feel free to contact me.
							</p>
						</div>
						<div className='information' style={this.props.display}>
							<table style={this.props.display}>
								<tbody>
									<tr><th>Age</th><td>27</td></tr>
									<tr><th>Residence</th><td>Australia</td></tr>
									<tr><th>Address</th><td>41/212 the Avenue, Parkville VIC</td></tr>
									<tr><th>Email</th><td><a href="mailto:dapengzhang1992@gmail.com">dapengzhang1992@gmail.com</a></td></tr>
									<tr><th>Phone</th><td>0452609520</td></tr>
								</tbody>
							</table>
						</div>
					</div>
				</Page>
		)
	}
}