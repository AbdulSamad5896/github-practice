import AssistantCard from "../components/AssistantCard"
import { assistantCardData } from "../constants"

const Hero = () => {
  return (
    <div className="flex justify-center align-middle items-center p-10 bg-slate-50  h-screen">
        <div className="w-[700px] h-[500px] bg-slate-100 rounded-xl shadow-2xl flex flex-col">
            <div className="bg-slate-200 p-6 text-center font-mono text-xl">
                <h1><b>Personal Digital Assistance</b></h1>
            </div>
            <div className="flex flex-grow justify-around    items-center ">
                {assistantCardData.map((cardData, index) => (
                    <AssistantCard key={index} 
                    title={cardData.title}
                    imgURL={cardData.imgURL}
                    copyright={cardData.copyright}
                    description={cardData.description}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Hero
