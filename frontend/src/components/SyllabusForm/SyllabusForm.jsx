import React from 'react'

export default function SyllabusForm () {
  return (
    <>
      <label>
        Name of Teacher:
        <input type='text' name='nameofteacher' />
      </label>
      <br />
      <label>
        Name of Course:
        <input type='text' name='nameofcourse' />
      </label>
      <br />
      <label>
        Description of Course:
        <input type='text' name='coursedescription' />
      </label>
      <br />
    </>
  )
}
