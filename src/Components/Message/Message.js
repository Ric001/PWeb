import React, { Component } from 'react';
import moment from 'moment';
import './message.css';

class Message extends Component {
    

    render () {
        let dateFormat = moment(this.props.date).fromNow()
        return(
            <div className="root">
                <div className="user">
                    <figure>
                    <img className="avatar" src={this.props.picture} />
                    </figure>
                    <span className="displayName">{this.props.displayName}</span>
                    <span className="username">{this.props.userName}</span>
                    <span className="date">{dateFormat}</span>
                </div>
                <h3>{this.props.text}</h3>
                <div className="buttons">
                    <div className="icon"><span className="fa fa-reply"></span></div>
                    <div className="icon"><span className="fa fa-retweet"></span></div>
                    <div className="icon"><span className="fa fa-star"></span></div>
                </div>
            </div>
        )
    }
}

export default Message 