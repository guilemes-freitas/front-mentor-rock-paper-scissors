"use client";
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
import { useRef, useEffect } from 'react'
import React from 'react'

type ModalProps = {
  isOpen: boolean,
  handleClose: () => void,
}

const RulesModal = ({isOpen, handleClose}: ModalProps) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
    e.key === 'Escape' ? handleClose() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return (): void => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;
  
  return (
    <div className='flex flex-col items-center p-16 gap-16 bg-white h-full w-full absolute z-10' onClick={handleClose}>
      <h1 className='text-3xl uppercase text-points font-bold'>Rules</h1>
        <Image
          className='h-64 w-64'
          src={'/images/image-rules-bonus.svg'}
          alt='Pentagon Image'
          width={48}
          height={48}
        />
     </div>
  )
}

export default RulesModal 
