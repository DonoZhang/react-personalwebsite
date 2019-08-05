import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Page from '../components/Main/Page'
import Accordion from '../components/_collapse/Accordion'

/** 
 * This is the Resume page
 *  
 * Property:
 * 		display: centered block or inline-block
 */

export default class Resume extends Component{
	static propTypes={
	display: PropTypes.object
	}

	render(){
		return (
			<Page className='resume'>
				<h1>Resume</h1>
				<div>
					<div className='row'>
						<div className='summary' style={this.props.display}>
							<h2>Summary</h2>
							<ul>
								<li>A self-motivated quick learner</li>
								<li>Keen to learn all areas in web development</li>
								<li>Positive attitudes towards challenges</li>
								<li>Solid background in Computer Engineering with previous studies</li>
								<li>Good interpersonal and communication skills to perform in teams</li>
							</ul>
						</div>
						<div className='technical-skills' style={this.props.display}>
							<h2>Technical Skills</h2>
							<Accordion buttonNames={['Front-end', 'back-end']} collapse={false}>
								<ul>
									<li>
										JavaScript
										<progress value='80' max='100'></progress>
									</li>
									<li>
										CSS
										<progress value='80' max='100'></progress>
									</li>
									<li>
										HTML5
										<progress value='80' max='100'></progress>
									</li>
									<li>
										React.js
										<progress value='60' max='100'></progress>
									</li>
									<li>
										jQuery
										<progress value='60' max='100'></progress>
									</li>
									<li>
										Bootstrap
										<progress value='80' max='100'></progress>
									</li>
								</ul>
								<ul>
									<li>
										Node.js(express)
										<progress value='60' max='100'></progress>
									</li>
									<li>
										REST api
										<progress value='80' max='100'></progress>
									</li>
									<li>
										SQL
										<progress value='90' max='100'></progress>
									</li>
								</ul>
							</Accordion>
						</div>
					</div>
					<div className='row'>
						<div className='professional-experience' style={this.props.display}>
							<h2>Job experience</h2>
							<div className='timeline'>
								<div className='timeline-item'>
									<p>Xberts.com</p>
									<p>2016-2017</p>
									<p>Website design & content publishing</p>
								</div>
								<div className='timeline-item'>
									<p>United Nations</p>
									<p>2016-2017</p>
									<p>Website design & content publishing</p>
								</div>
								<div className='timeline-item'>
									<p>Australasia Elite</p>
									<p>2015-2016</p>
									<p>Wix website management</p>
								</div>
							</div>
						</div>
						<div className='education' style={this.props.display}>
							<h2>Education</h2>
							<div className='timeline'>
								<div className='timeline-item'>
									<p>Training, Full stack Website Development</p>
									<p>2019</p>
									<p>JR Academy</p>
								</div>
								<div className='timeline-item'>
									<p>Master Degree, Global Media Communication</p>
									<p>2015-2018</p>
									<p>University of Melbourne</p>
								</div>
								<div className='timeline-item'>
									<p>Bachelor’s Degree, Integrated Circuit Design</p>
									<p>2011-2015</p>
									<p>University of Electronic Science and Technology of China</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Page>)
	}
}