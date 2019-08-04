import React, {Component} from 'react'
import PropTypes from 'prop-types'

/**
 * This is a dumb component 
 * This is a simple template for pages
 * It contains two parts:
 *      -div.page-header
 *      -div.page-content
 * 
 */

export default class Page extends Component{
    static propTypes = {
        children: PropTypes.array,
        className: PropTypes.string
    }
    render(){
        return (
            <div className={`page ${this.props.className}`}>
                <div className="page-header">{this.props.children[0]}</div>
                <div className="page-content">{this.props.children[1]}</div>
            </div>
        )
    }
}