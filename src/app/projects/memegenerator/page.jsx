"use client"
import React from 'react'
import { useState,useEffect } from 'react'

const page = () => {
    const [memegenerator,setmemegenerator]=useState([]);
    const [selectedmemes,setselectedmemes]=useState(null);
    const [toptext,settoptext]=useState("");
    const [bottomtext,setbottomtext]=useState("");
    useEffect(()=>{
        const fetchmemegenerator=async()=>{
            const res=await fetch("https://api.imgflip.com/get_memes");
            const result=await res.json();
            setmemegenerator(result.data.memes);
            setselectedmemes(result.data.memes[0]);
            console.log(result.data.memes);
        }
        fetchmemegenerator();
    },[])
    const handlechange=(e)=>{
        const selectedmeme=memegenerator.find((memes)=>memes.id===e.target.value);
        setselectedmemes(selectedmeme);
    }
const downloadmeme = () => {
    if (!selectedmemes) return;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = selectedmemes.url;

    image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        ctx.font = "bold 40px Arial";
        ctx.fillStyle = "black";
        ctx.strokeStyle = "black";
        ctx.textAlign = "center";
        ctx.lineWidth = 3;

        // Top Text
        ctx.strokeText(toptext.toUpperCase(), canvas.width-350,300);
        ctx.fillText(toptext.toUpperCase(), canvas.width-350, 300);

        // Bottom Text
        ctx.strokeText(bottomtext.toUpperCase(), canvas.width-350, canvas.height - 200);
        ctx.fillText(bottomtext.toUpperCase(), canvas.width-350, canvas.height - 200);

        // Download
        const link = document.createElement("a");
        link.download = "meme.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    };
};


  return (
    <>
        <div className="container text-center mt-5">
        <h1 className=' my-4 text-3xl font-bold'>🔥Meme Generator🔥</h1>
            <div className="row">
                <select className='form-select' onChange={handlechange}>
                    {memegenerator.map((memes)=>{
                        return(
                            <option key={memes.id} value={memes.id}>{memes.name}</option>
                    )
                })}
            </select>
            </div>

              {selectedmemes && (
                <div className="d-inline-block position-relative">
                    <div className="col">
                        <img src={selectedmemes.url} width={400} height={400} alt={selectedmemes.name} className='img-fluid rounded'/>
                        <h2 className='toptext position-absolute top-0 start-50 translate-middle-x text-black fw-bold fs-4'>{toptext}</h2>
                        <h2 className='bottomtext position-absolute bottom-0 start-50 translate-middle-x text-black fw-bold fs-4'>{bottomtext}</h2>
                                            </div>


                </div>
              )}
             <p>
                            <input type="text" placeholder='Top Text' className='form-control my-2' onChange={(e)=>settoptext(e.target.value)}/>
                            <input type="text" placeholder='Bottom Text' className='form-control my-2' onChange={(e)=>setbottomtext(e.target.value)}/>
                        </p>
                        <button className="btn btn-success mt-4" onClick={downloadmeme}>Download</button>
        </div>

    </>
  )
}

export default page;