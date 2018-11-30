import React, {Component } from 'react';
import MessageList from '../MessageList/MessageList'
class Main extends Component {
    constructor () {
        super()
        this.state = {
            messages: [
                {
                text: 'Mensaje de prueba',
                piture: 'https://static.iris.net.co/semana/upload/images/2015/10/23/447377_20029_1.jpg',
                displayName: 'Carlos Azaustre',
                username: 'carlosazaustre',
                date: Date.now()
                }]
        }
    }
    render() {
        return (
            <MessageList messages={this.state.messages}/>
        )
    }
}

export default Main