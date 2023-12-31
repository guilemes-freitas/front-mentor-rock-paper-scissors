import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';


type Props = {
  token: string,
  tokenColor: string,
}

export default function TokenCircle({token, tokenColor}: Props) {
  
  const handleOnClick = (index: any) => {
  }

  return (
  <div className={'rounded-full bg-gradient-to-b ' + `${tokenColor}` + ' w-24 h-24 sm:w-36 sm:h-36 flex justify-center items-center shadow-outer-circle cursor-pointer'}>
    <div className='rounded-full bg-white w-[4.5rem] h-[4.5rem] sm:w-28 sm:h-28 flex justify-center items-center shadow-inner-circle	'>
      <Image
        className='relative text-points max-sm:w-8 max-sm:max-h-12'
        src={'/images/icon-'+`${token}`+'.svg'}
        alt='Scissors Image'
        width={48}
        height={48}
        priority
      />
    </div>
  </div>
  )
}