import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor' 
import { Players } from '../imports/api/players'

Meteor.startup(() => {
    class Person {
        constructor(name = 'Anonymous', age = 0) {
            this.name = name
            this.age = age
        }

        getGreeting() {
            return `Hi! I am ${this.name}`
        }

        getPersonDescription() {
            return `${this.name} is ${this.age} year(s) old.`
        }
    }

    class Employee extends Person {
        constructor(name, age, title) {
            super(name, age)
            this.title = title
        }

        getGreeting() {
            if(this.title) {
                return `Hi! I am ${this.name}, My job is ${this.title}`
            }
            return super.getGreeting()
        }

        hasJob() {
            return !!this.title
        }
    }

    class Programmer extends Person {
        constructor(name, age, preferredLanguage = 'assembly') {
            super(name, age)
            this.preferredLanguage = preferredLanguage
        }

        getGreeting() {
            return `Hi!, I am ${this.name}, I am a ${this.preferredLanguage} developer`
        }
    }

    // let me = new Person('Ratchanon', 23)
    let me = new Employee('Ratchanon', 23)
    console.log(me)
    console.log(me.hasJob())
    console.log(me.getGreeting())
    console.log(me.getPersonDescription())

    let dev = new Programmer('Ratchanon', 23, 'React')
    console.log(dev.getGreeting())
})