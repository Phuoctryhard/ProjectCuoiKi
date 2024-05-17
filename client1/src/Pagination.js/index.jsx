import { color } from 'framer-motion'
import Styles from './index.module.css'
import React from 'react'
const PAgination = ({ totalPost, PostsPerPage, setCurrentPage, currentPage }) => {
  const pages = []

  for (var i = 1; i <= Math.ceil(totalPost / PostsPerPage); i++) {
    pages.push(i)
  }
  return (
    <div className={Styles.pagination}>
      {pages.map((element, index) => {
        return (
          <button key={index} onClick={() => setCurrentPage(element)} className={element == currentPage ? Styles.active : ''}>
            {element}
          </button>
        )
      })}
    </div>
  )
}
export default PAgination
