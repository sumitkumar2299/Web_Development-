import React from 'react'

function ThemeButton() {
  return (
   <label 
   className='relative inline-flex items-center cursor-pointer'>
    <input 
       type="checkbox" 
       value=""
       className='sr-only-peer'
       onChange={onChangeBtn}

    />
    </label>
  )
}

export default ThemeButton;