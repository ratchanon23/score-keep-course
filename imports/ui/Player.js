import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Players } from '../api/players'

class Player extends Component {
    onUpdate(_id, num) {
        Players.update(_id, {
            $inc: {score: num}
        })
    }

    onRemove(_id) {
        Players.remove({
            _id
        })
    }

    render() {
        const player = this.props.player

        let itemClassName = `item item--position-${player.rank}`

        return(
            <div className={itemClassName}>
                <div className='player'>
                    <div>
                        <h3 className='player__name'> {player.name} </h3>
                        <p className='player__stats'> 
                            {player.position} place - {player.score} point(s)
                        </p>
                    </div>
                    <div className='player__actions'>
                        <button className='button button--round' onClick={() => { this.onUpdate(player._id, -1) }}>-1</button>
                        <button className='button button--round' onClick={() => { this.onUpdate(player._id, 1) }}> +1 </button>
                        <button className='button button--round' onClick={() => { this.onRemove(player._id) }}> X </button>
                    </div>
                </div>
            </div>
        )
    }
}

Player.PropTypes = {
    player: PropTypes.object.isRequired
}

export default Player