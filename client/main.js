import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players, calculatePlayersPosition } from '../imports/api/players'
import App from '../imports/ui/App'
import TitleBar from '../imports/ui/TitleBar'
import AddPlayer from '../imports/ui/AddPlayer'
import PlayerList from '../imports/ui/PlayerList'

// setTimeout(() => {
//     console.log('Players list: ', Players.find().fetch())
// }, 1000)

Meteor.startup(() => {
    // Call Tracker.autorun
    // Create variable called players -> set equal to fetch query
    // Render players on screen

    // ถ้ามีการเปลี่ยนแปลงค่าจะเข้ามาทำใน Tracker.autorun
    Tracker.autorun(() => {
        let players = Players.find({}, {sort:{
            score: -1    // 1 mean desc (น้อยไปมาก), -1 mean desc (มากไปน้อย)
        }}).fetch()
        let positionPlayers = calculatePlayersPosition(players)
        let title = 'Score keep'
        let subTitle = 'Created by Ratchanon Ploynumphol'
        
        ReactDOM.render(<App title={title} subTitle={subTitle} players={positionPlayers} />, document.getElementById('app'))
    })
})