import React from 'react';


class Form extends React.Component {
   constructor(props) {
      super(props)
      this.state = { value: '' };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }
   handleChange(event) {
      this.setState({ value: event.target.value });
   }

   handleSubmit() {
      return this.props.startTimer(this.state.value)
   }

   render() {
      return (
         <div className='form-wrapper'>
            <input placeholder='Enter time' className='form-wrapper-input' type="text" value={this.state.value} onChange={this.handleChange} />
            <button className='button' onClick={this.handleSubmit}>Старт!</button>
         </div>
      )

   }
}

export default Form;
