import React from 'react'
import Card from 'react-bootstrap/Card'

export default function CourseCard () {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Course Title</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            Teacher Name
          </Card.Subtitle>
          <Card.Link href='#'>Link to Details Page</Card.Link>
        </Card.Body>
      </Card>
    </>
  )
}
