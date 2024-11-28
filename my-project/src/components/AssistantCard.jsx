const AssistantCard = ({imgURL, title, copyright, description}) => {
  return (
    <div className="h-[300px] w-[150px] border border-slate-300 rounded-lg bg-slate-50 shadow-lg hover:shadow-2xl hover:cursor-pointer hover:-translate-y-[20px]  duration-200">
      <div className="h-[130px] flex justify-center items-center">
        <img src={imgURL} alt="image"  className="h-[130px] w-full object-cover rounded-t-lg"/>
      </div>
      <h3 className="text-xl font-mono pt-3 pl-2">{title}</h3>
      <h5 className="text-sm text-slate-600 italic pl-2 pb-2">{copyright}</h5>
      <p className="pl-2 font-serif">{description}</p>
    </div>
  )
}

export default AssistantCard
