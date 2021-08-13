import React from 'react';

class TimerDispley extends React.Component {
   render() {
      if (this.props.timeLeft === 0) {
         return <h2 className='finish'>Финиш!</h2>
      }
      if (this.props.timeLeft === null) {
         return <div></div>
      }
      return (
         <div>
            <h1 className='timer'> {this.props.timeLeft} </h1>
         </div>
      )
   }
}

export default TimerDispley;
