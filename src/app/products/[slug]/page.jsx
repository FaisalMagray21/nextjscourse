'use client'
import  React from 'react'
//import { useState } from 'react'
import { useRouter,usePathname } from 'next/navigation'

import { products } from '../../data'
import Link from 'next/link'
 //const page = ({params: { slug }}) => {
    const page = ({params}) => {
const {slug}=React.use(params);
const router=useRouter();
const location=usePathname().split("/");
console.log("location path is",location[2]);
// const [count,setcount]=useState(0);
    const product=products.filter(p=>p.id==slug)[0]
  return (
    <div>
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
        <h3>{product.description}</h3>
        <h4>{product.category}</h4>
        <h4>{product.id}</h4>
        <img style={{ width: '200px', height: '200px' }} src={product.image} alt={product.title} />
        <Link href={"/products"}>Back to products</Link>
        <button onClick={router.back}>refrest</button>
    </div>
  )
}

export default page