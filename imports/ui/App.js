import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Players } from '../api/players'
import TitleBar from './TitleBar'
import PlayerList from './PlayerList'
import AddPlayer from './AddPlayer'

class App extends Component {
    render() {
        return (
            <div>
                <TitleBar title={this.props.title} subTitle={this.props.subTitle} />
                <div className='wrapper'>
                    <PlayerList players={this.props.players} />
                    <AddPlayer score={20} />
                </div>
            </div>
        )
    }
}

App.PropTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    players: PropTypes.array.isRequired
}

export default App