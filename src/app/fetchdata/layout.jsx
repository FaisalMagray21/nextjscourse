import React from 'react'
import Link from 'next/link'

const layout = ({children}) => {
  return (
    <div>
        {children}
        <li>
       <ol>
        <Link href={"/fetchdata/client"}>fetch data from client component </Link>
        </ol> 
        <ol>
                 <Link href={"/fetchdata/server"}>fetch data from server component </Link>

        </ol>
         </li>

    </div>
  )
}

export default layout