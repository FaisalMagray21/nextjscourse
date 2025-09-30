const fetchdata=async()=>{
      const res=await fetch('https://jsonplaceholder.typicode.com/todos');
      const result=await res.json();
      console.log("fetching data using server componet",result);
      return result;

}

const page =async () => {
      const data=await fetchdata();

  return (

    <div>
        <h1>server side fetch data</h1>
        {data.map((todo,id)=>
            <div key={id}>
              <li>
                <ul>{todo.userId}</ul>
                <ul>{todo.id}</ul>
                <ul>{todo.title}</ul>
                <ul>
                  {todo.completed}
                </ul>

              </li>
              <p>------------------------------------</p>
              </div>
          )
        }

    </div>
  )
}

export default page