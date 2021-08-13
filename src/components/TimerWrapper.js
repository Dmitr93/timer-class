import React from 'react';
import TimerDisplay from './TimerDispley';
import Button from './Button';
import Form from './Form'
import Controller from './Controller'






class TimerWrapper extends React.Component {
   constructor(props) {
      super(props)
      this.startTimer = this.startTimer.bind(this);
      this.state = {
         timeLeft: null,
         timer: null,
         isStart: false,
      }
   }

   startTimer(timeLeft) {
      clearInterval(this.state.timer)
      let timer = setInterval(() => {
         var timeLeft = this.state.timeLeft - 1;
         if (timeLeft === 0) {
            clearInterval(timer)
         }
         this.setState({
            timeLeft: timeLeft
         })
      }, 1000)
      return this.setState({ timeLeft: timeLeft, timer: timer })
   }


   render() {
      return (
         <div className='timer-wrapper'>
            <h2>Countdown timer</h2>
            <div className='button-wrapper'>
               <Button time="5" startTimer={this.startTimer} />
               <Button time="10" startTimer={this.startTimer} />
               <Button time="15" startTimer={this.startTimer} />
            </div>
            <Form startTimer={this.startTimer} />
            <div className='times-content'>
               <TimerDisplay timeLeft={this.state.timeLeft} />
            </div>
         </div >
      )
   }
}


export default TimerWrapper;
