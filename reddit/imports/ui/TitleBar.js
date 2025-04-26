import React from 'react';

// need to export TitleBar class
export default class TitleBar extends React.Component{
  renderModerator(){
    if(this.props.moderator){
      return <p>moderator: {this.props.moderator}</p>
    } else {
      return <p>moderator: unknown</p>
    }
  }
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.renderModerator()}
      </div>
    );
  }
};


