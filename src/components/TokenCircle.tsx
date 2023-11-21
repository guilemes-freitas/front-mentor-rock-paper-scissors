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
    <div className={'rounded-full bg-gradient-to-b ' + `${tokenColor}` + ' w-36 h-36 flex justify-center items-center shadow-outer-circle'}>
    <div className='rounded-full bg-white w-28 h-28 flex justify-center items-center shadow-inner-circle	'>
      <Image
        className="relative text-points"
        src={"/images/icon-"+`${token}`+".svg"}
        alt="Scissors Image"
        width={48}
        height={48}
        priority
      />
    </div>
  </div>
  )
}