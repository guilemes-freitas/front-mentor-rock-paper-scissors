"use client";
import Image from 'next/image';
import React from 'react'
import TokenCircle from './TokenCircle';

const TokenSelectionSection = ({}) => {
  
  return (
    <section className='h-[22rem] sm:h-[36rem] flex flex-col justify-center relative'>
      <Image
        className='absolute text-points stroke-2 w-48 h-48 top-16 right-12 sm:w-80 sm:h-80 sm:right-24 sm:top-28'
        src={'/images/bg-pentagon.svg'}
        alt='Pentagon Image'
        width={48}
        height={48}
      />
      <div className='flex justify-center items-center w-72 sm:w-[32rem] h-24 z-10'>
        <TokenCircle token='scissors' tokenColor='from-scissors to-scissors-end' />
      </div>
      <div className='flex flex-row justify-between w-72 h-[5.5rem] sm:w-[32rem] sm:h-52 z-10'>
        <TokenCircle token='spock' tokenColor='from-spock to-spock-end' />
        <TokenCircle token='paper' tokenColor='from-paper to-paper-end' />
      </div>
      <div className='flex flex-row justify-center gap-6 sm:gap-14 items-center w-72 sm:w-[32rem] h-36 z-10'>
        <TokenCircle token='lizard' tokenColor='from-lizard to-lizard-end' />
        <TokenCircle token='rock' tokenColor='from-rock to-rock-end' />
      </div>
    </section>
  )
}

export default TokenSelectionSection 
