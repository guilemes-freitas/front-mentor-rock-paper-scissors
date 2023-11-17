import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[hsl(214, 47%, 23%) to hsl(237, 49%, 15%)]">
      <header className="border border-[hsl(217, 16%, 45%)] rounded">
        <div>
          <p>Rock</p>
          <p>Paper</p>
          <p>Scissors</p>
          <p>Lizard</p>
          <p>Spock</p>
        </div>
        <div className='bg-white rounded'>
          <p>Score</p>
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
