import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-barlow font-semibold">
      <header className="border border-[#hsl(217, 16%, 45%)] rounded-lg max-w-[90%] w-[650px] flex justify-between flex-row p-4 uppercase">
        <div className='text-white font-bold space-x-0 flex flex-col'>
          <p className='h-4 leading-3'>Rock</p>
          <p className='h-4 leading-3'>Paper</p>
          <p className='h-4 leading-3'>Scissors</p>
          <p className='h-4 leading-3'>Lizard</p>
          <p className='h-4 leading-3'>Spock</p>
        </div>
        <div className='bg-white rounded-md text-[hsl(229, 25%, 31%)] text-center min-h-full w-28 shadow-sm p-2'>
          <p className='text-score text-sm tracking-widest'>Score</p>
          <h2 className='text-points text-5xl font-bold'>12</h2>
        </div>
      </header>

      <section>
        <div>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/images/icon-scissors.svg"
            alt="Scissors Image"
            width={180}
            height={37}
            priority
          />
        </div>
        <div>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/images/icon-spock.svg"
            alt="Spock Image"
            width={180}
            height={37}
            priority
          />
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/images/icon-paper.svg"
            alt="Paper Image"
            width={180}
            height={37}
            priority
          />
        </div>
        <div>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/images/icon-lizard.svg"
            alt="Lizard Image"
            width={180}
            height={37}
            priority
          />
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/images/icon-rock.svg"
            alt="Rock Image"
            width={180}
            height={37}
            priority
          />
        </div>
      </section>

      <footer>
        <div className="border border-white rounded">Rules</div>
      </footer>
    </main>
  )
}
