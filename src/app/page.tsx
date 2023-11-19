import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 font-barlow font-semibold">
      <header className="border-2 border-header-outline rounded-xl max-w-[85vw] w-[650px] flex justify-between flex-row p-4 uppercase">
        <div className='text-white font-bold space-x-0 flex flex-col justify-center ml-2'>
          <p className='h-3.5 leading-3'>Rock</p>
          <p className='h-3.5 leading-3'>Paper</p>
          <p className='h-3.5 leading-3'>Scissors</p>
          <p className='h-3.5 leading-3'>Lizard</p>
          <p className='h-3.5 leading-3'>Spock</p>
        </div>
        <div className='bg-white rounded-lg text-[hsl(229, 25%, 31%)] text-center min-h-full w-24 shadow-sm p-2'>
          <p className='text-score text-sm tracking-widest'>Score</p>
          <h2 className='text-points text-5xl font-bold'>12</h2>
        </div>
      </header>

      <section>
        <div className='flex justify-center'>
          <Image
            className="relative text-points bg-white rounded-full"
            src="/images/icon-scissors.svg"
            alt="Scissors Image"
            width={48}
            height={48}
            priority
          />
        </div>
        <div className='flex flex-row justify-between w-96'>
          <Image
            className="relative text-points bg-white rounded-full "
            src="/images/icon-spock.svg"
            alt="Spock Image"
            width={48}
            height={48}
            priority
          />
          <Image
            className="relative text-points bg-white rounded-full "
            src="/images/icon-paper.svg"
            alt="Paper Image"
            width={48}
            height={48}
            priority
          />
        </div>
        <div className='flex flex-row w-98 justify-around'>
          <Image
            className="relative text-points bg-white rounded-full "
            src="/images/icon-lizard.svg"
            alt="Lizard Image"
            width={48}
            height={48}
            priority
          />
          <Image
            className="relative text-points bg-white rounded-full "
            src="/images/icon-rock.svg"
            alt="Rock Image"
            width={48}
            height={48}
            priority
          />
        </div>
      </section>

      <footer>
        <div className="border border-white rounded-xl w-28 h-10 text-white uppercase text-center">Rules</div>
      </footer>
    </main>
  )
}
