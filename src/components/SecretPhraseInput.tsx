export const SecretPhraseInput = ({index,value}) => {
    return <div className="flex  bg-gray-800 p-2 rounded-md items-center text-sm md:text-base lg:text-lg">
        <span className="mr-2 text-gray-400">{index}</span>
        <span>{value}</span>
    </div>
}