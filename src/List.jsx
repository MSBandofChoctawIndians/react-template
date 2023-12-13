import React from 'react'
import PropTypes from 'prop-types'

function List(props) {
  const itemList = props.items

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name} : &nbsp; <b>{item.calories}</b>
    </li>
  ))

  return (
    <>
      <h3>{props.category}</h3>
      <ol>{listItems}</ol>
    </>
  )
}
List.propTypes = {
  items: PropTypes.array,
  category: PropTypes.string
}

export default List
