import React, { Component } from 'react'
import './CategoryTable.css'

export default class CategoryTable extends Component {
  render () {
    return (
      <div className='categeory-table'>
        {categories.map(c => Category(c))}
      </div>
    )
  }
}
const categories = [
  'Rock',
  'Pop',
  'Rap/Hip-Hop',
  'Country',
  'EDM',
  'House',
  'World',
  'Holiday',
  'Spiritual',
  'Other'
]
const Category = (category) => {
  return (
    <a href={`\\categories\\{category}`}>
      <div className='category-button'>
        {category}
      </div>
    </a>
  )
}
