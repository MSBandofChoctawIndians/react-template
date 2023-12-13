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
      <h3 className="list-category">{props.category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  )
}
List.propTypes = {
  items: PropTypes.array,
  category: PropTypes.string
}
List.defaultProps = {
  category: 'Category',
  items: []
}

export default List
