import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TitleBar extends Component {
    renderSubTitle() {
        if(this.props.subTitle) {
            return (
                <h2 className='title-bar__subtitle'> {this.props.subTitle} </h2>
            )
        }
        
        return (
            <h2>  </h2>
        )
    }

    render() {
        return (
            <div className='title-bar'>
                <div className='wrapper'>
                    <h1> {this.props.title} </h1>
                    {this.renderSubTitle()}
                </div>
            </div>
        )
    }
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

TitleBar.defaultProps = {
    title: 'Default Title',
    subTitle: 'Default Sub Title'
}

export default TitleBar