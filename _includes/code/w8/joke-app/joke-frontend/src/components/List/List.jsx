import React from 'react'
import Container from './../Container/Container'
const List = ({ array, MyComponent }) => {
  return (
    <>
      <Container>
        {array.map((element) => {
          return <MyComponent key={element._id} {...element} />
        })}
      </Container>
    </>
  )
}

export default List
