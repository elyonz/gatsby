import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

const withNavigation = WrappedComponent => props => {
  const { index, total } = props.pageContext
  const previous = index === 1 ? index : index - 1
  const next = index === total ? index : index + 1

  const goToSlide = ({ keyCode }) => {
    /* if (index < total) {
      navigate(`/${keyCode === 37 ? previous : next}`)
    } */
    navigate(`/${keyCode === 37 ? previous : next}`)
  }

  useEffect(() => {
    document.addEventListener('click', goToSlide)
    document.addEventListener('keydown', goToSlide)

    return () => {
      document.removeEventListener('click', goToSlide)
      document.removeEventListener('keydown', goToSlide)
    }
  })

  return <WrappedComponent {...props} />
}

export default withNavigation
