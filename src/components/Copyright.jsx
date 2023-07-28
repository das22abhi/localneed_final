export default function Copyright(){
    const date = new Date()
    const current_year = date.getFullYear()
    return (
        <div className="w-full flex justify-center mt-10 text-slate-500">
        {`©ALl Copyrights reserved to localneed.in ${current_year}`}
        </div>
    )
}