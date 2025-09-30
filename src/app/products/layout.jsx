import React from 'react'
import Product from './components/Product'

const layout = ({children}) => {
  return (
    <div>
        {children}
        <Product/>
        </div>
  )
}

export default layout