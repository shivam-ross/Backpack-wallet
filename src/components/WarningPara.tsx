export const WarningPara = ({imagePath, text}) => {
    return <div className="bg-gray-800 p-4 flex items-center gap-3 rounded mb-4 h-max w-full max-w-md mx-4 md:mx-0">
        <div>
            <img className='h-4 md:h-8' src={imagePath}/>
            <span className="text-sm md:text-base lg:text-md">{text}</span>
        </div>
    </div>
}