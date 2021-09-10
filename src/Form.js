import React, { Component } from 'react'

class Form extends Component {
  initialState = {
    name: '',
    job: '',
  }

  state = this.initialState

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <div className="input">
          <input required={true}
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange} />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input">
          <input required={true}
            type="text"
            name="job"
            id="job"
            value={job}
            onChange={this.handleChange} />
          <label htmlFor="job">Job</label>
        </div>
        <div>
        <input
          type="button"
          value="Add"
          onClick={this.submitForm} />
        </div>
      </form>
    )
  }
}

export default Form;