import TokenCircle from '@/components/TokenCircle'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 font-barlow font-semibold">
      <header className="border-2 border-header-outline rounded-lg max-w-[85vw] w-[650px] flex justify-between flex-row p-4 uppercase">
        <div className='text-white font-bold space-x-0 flex flex-col justify-center ml-2'>
          <p className='h-3.5 leading-3'>Rock</p>
          <p className='h-3.5 leading-3'>Paper</p>
          <p className='h-3.5 leading-3'>Scissors</p>
          <p className='h-3.5 leading-3'>Lizard</p>
          <p className='h-3.5 leading-3'>Spock</p>
        </div>
        <div className='bg-white rounded-md text-[hsl(229, 25%, 31%)] text-center min-h-full w-24 shadow-sm p-2'>
          <p className='text-score text-sm tracking-widest'>Score</p>
          <h2 className='text-points text-5xl font-bold'>12</h2>
        </div>
      </header>

      <section className='h-[36rem] flex flex-col justify-center'>
        <div className='flex justify-center items-center w-[32rem] h-24'>
          <TokenCircle token='scissors' tokenColor='from-scissors to-scissors-end' />
        </div>
        <div className='flex flex-row justify-between w-[32rem] h-52'>
          <TokenCircle token='spock' tokenColor='from-spock to-spock-end' />
          <TokenCircle token='paper' tokenColor='from-paper to-paper-end' />
        </div>
        <div className='flex flex-row justify-around items-center w-[32rem] h-36'>
          <TokenCircle token='lizard' tokenColor='from-lizard to-lizard-end' />
          <TokenCircle token='rock' tokenColor='from-rock to-rock-end' />
        </div>
      </section>

      <footer>
        <div className="border border-white rounded-lg tracking-widest w-28 h-10 text-white uppercase text-center p-2">Rules</div>
      </footer>
    </main>
  )
}
