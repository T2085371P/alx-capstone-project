import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
      return (
<section id="dashbord" className='dash'>
<div>
      <h4>Click to view your Profile</h4>
      <button type="submit" className="btn btn-primary">
            View
          </button>
    </div> <hr/>
<div>
      <h4>Click to view all Exams</h4>
      <button type="submit" className="btn btn-primary">
            View
          </button>
    </div> <hr/>

    <fieldset>
      <h4>Set Exam</h4>
      <label className='exam'>Exam Title: <input type='text' required className='set' ></input></label>
      <label className='exam'>Exam Type: <input type='text' required className='set'></input></label>
      <label className='exam'>Duration: <input type='time' required className='number'></input></label>
      <label className='exam'>Number of Question: <input type='number' required className='number' min='1'></input></label>
      <button type="submit" className="btn btn-primary">
            Set
          </button>
    </fieldset> <hr/>


    <div>
    <fieldset>
      <legend>Upload Question</legend>
      <input type='file' className='file'/>
    </fieldset>
    <button type="submit" className="btn btn-primary">
            Generate Token
          </button>
    </div>
</section>
)
}
}