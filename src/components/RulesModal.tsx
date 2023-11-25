"use client"
import { useSearchParams } from 'next/navigation'
import { useRef, useEffect } from 'react'

type ModalProps = {
  isOpen: boolean,
  handleClose: () => void,
}

import React from 'react'

export default function RulesModal({isOpen, handleClose}: ModalProps) {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
    e.key === 'Escape' ? handleClose() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);
  
  return (
    <div className='flex flex-col justify-between p-8'>
      <h1>Rules</h1>
      <div></div>
     </div>
  )
}
