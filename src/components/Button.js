import React from 'react';


class Button extends React.Component {
   handlerStartTimer() {
      return this.props.startTimer(this.props.time)
   }

   render() {
      return <button className='button' onClick={this.handlerStartTimer.bind(this)}>
         {this.props.time} секунд</button>
   }
}

export default Button;
