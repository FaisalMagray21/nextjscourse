import React from 'react'
import Link from 'next/link'
import { products } from '../../data'

const Product = () => {
  return (
    <div>
        <h1>Here is the product</h1>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Product