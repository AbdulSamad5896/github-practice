import { useState } from "react"    




const Animal = ({imgURL}) => {

    const [stateWidth, setWidth] = useState(30);
    const [height, setHeight] = useState(30);


  return (
    <div className=" relative flex w-[150px] h-[170px] m-5 rounded-lg shadow-lg hover:shadow-2xl hover:cursor-pointer group" onClick={() => {setWidth(stateWidth+5); setHeight(height + 5)}}>
        <div className="absolute bg-black h-[170px] w-[150px] rounded-lg opacity-0 group-hover:opacity-25 duration-200 flex justify-center">
        </div>
        <div className="absolute z-10  h-[170px] w-[150px] rounded-lg  duration-200 flex justify-center opacity-0 group-hover:opacity-100 items-center">
            <p className="text-xl text-white font-mono font-bold">Like</p>
        </div>
      <img className="object-cover rounded-lg  " width={150} height={170} src={imgURL} alt="ANIMAL PICTURE" />

        <div className={`h-[${height}px] w-[${stateWidth}px] z-20 absolute bottom-2 right-2`}>
             <img className="object-cover rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMeAvyOIrmD1rK9pcOwElVtxLCvv3UlhF-Q&s" alt="" width={stateWidth} height={height} onClick={() => {setWidth(stateWidth+5); setHeight(height + 5)}}/>
        </div>

    </div>
  )
}

export default Animal
