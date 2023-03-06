import React from 'react'

const List = ({ array, MyComponent }) => {
  return (
    <>
      {array.map((element) => {
        return <MyComponent key={element._id} {...element} />
      })}
    </>
  )
}

export default List
