import React from 'react'
import Link from 'next/link'


const page = () => {
  return (
    <div>Wellcome to my page
      <Link href={'/products'}>Product page</Link>
    </div>
  )
}

export default page