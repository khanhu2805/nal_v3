import React from 'react'

type Props = {
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = (props: Props) => {
  return (
    <div className='flex items-center bg-orange-40 p-2 rounded-full outline outline-1'>
        <button >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </button>
        <input type="text" className='outline-none bg-transparent ml-2 caret-black placeholder:font-light placeholder:text-black text-lg' 
        placeholder='Search'
        autoComplete='false'
        onChange={(e)=>props.setSearch(e.target.value)}/>
    </div>
  )
}

export default SearchBar