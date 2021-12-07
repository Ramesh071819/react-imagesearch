import React,{ useState } from "react"
const Imagesearch = ({ searchText }) => {
     const[text,setText] = useState('')
      
     // onsubmit form
     const onSubmit= (e) => {
         e.preventDefault();
         searchText(text);
     }
    return (
        <div className="max-w-sm rounded overflow-hidden bg-black text-red-400 my-10 mx-auto">
            <form className="w-full max-w-sm" onSubmit={onSubmit}>
                <div className="flex items-center border-b-2 border-teal-500 py-2">
                    <input onChange={e => setText(e.target.value)} type="text" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-light
                    focus:outline-none  placeholder-red-500" placeholder="Search Image"/>
                    
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500
                    hover:border-teal-700 text-sm border-4 py-1 px-2 text-red rounded">Search</button>

                </div>

            </form>
            
        </div>
    )
}

export default Imagesearch;