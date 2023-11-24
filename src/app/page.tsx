import TokenCircle from '@/components/TokenCircle'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center gap-10 sm:justify-between pt-8 sm:p-8 font-barlow font-semibold'>
      <header className='border-2 border-header-outline rounded-lg max-w-[85vw] w-[650px] flex justify-between flex-row p-2 sm:p-4 uppercase sm:rounded-2xl'>
        <div className='max-sm:text-xs text-white font-bold space-x-0 flex flex-col justify-center ml-2'>
          <p className='h-2.5 leading-3 sm:h-[1.35rem] sm:text-2xl sm:leading-6 '>Rock</p>
          <p className='h-2.5 leading-3 sm:h-[1.35rem] sm:text-2xl sm:leading-6 '>Paper</p>
          <p className='h-2.5 leading-3 sm:h-[1.35rem] sm:text-2xl sm:leading-6 '>Scissors</p>
          <p className='h-2.5 leading-3 sm:h-[1.35rem] sm:text-2xl sm:leading-6 '>Lizard</p>
          <p className='h-2.5 leading-3 sm:h-[1.35rem] sm:text-2xl sm:leading-6 '>Spock</p>
        </div>
        <div className='bg-white flex flex-col justify-center rounded-md text-[hsl(229, 25%, 31%)] text-center min-h-full w-20 sm:w-36 shadow-sm p-2'>
          <p className='text-score text-xs sm:text-sm tracking-widest'>Score</p>
          <h2 className='text-points text-4xl sm:text-6xl font-bold'>12</h2>
        </div>
      </header>

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

      <footer className='sm:self-end sm:sticky sm:bottom-[30px]'>
        <div className='border border-white rounded-lg leading-5 tracking-widest w-28 h-10 text-white uppercase text-center p-2'>Rules</div>
      </footer>
    </main>
  )
}
