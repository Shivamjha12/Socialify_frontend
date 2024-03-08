import React from 'react'

function SearchButton({text}) {
  return (
    <div className=''>
        <button className='SearchButton'>
            <p className='SearchButtonText'>{text}</p>
        </button>
    </div>
  )
}

export default SearchButton;
