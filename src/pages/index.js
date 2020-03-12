import { useEffect } from 'react'
import { navigate } from 'gatsby'

const IndexPage = () => {
  useEffect(() => {
    navigate('/1', { replace: true })
  })

  return null
}

export default IndexPage
