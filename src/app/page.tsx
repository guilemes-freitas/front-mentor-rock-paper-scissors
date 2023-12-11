"use client";
import RulesModal from '@/components/RulesModal'
import TokenSelectionSection from '@/components/TokenSelectionSection';
import { useEffect, useState } from 'react';


type ChoiceType = {
  name: string,
  beats: Array<string>,
}

export default function Home() {
  const choices = [
    {
      name: "rock",
      beats: ["lizard","scissors"],
    },
    {
      name: "paper",
      beats: ["rock","spock"],
    },
    {
      name: "scissors",
      beats: ["lizard","paper"],
    },
    {
      name: "lizard",
      beats: ["spock","paper"],
    },
    {
      name: "spock",
      beats: ["rock","scissors"],
    },
  ];
  const [init, setInit] = useState(false);
  const [cpuChoice, setCpuChoice] = useState<ChoiceType>(
    {
      name: "",
      beats: [""],
    });
  const [playerChoice, setPlayerChoice] = useState<ChoiceType>(
    {
      name: "",
      beats: [""],
    });
  const [playerWin, setPlayerWin] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    setPlayerWin(compare(playerChoice, cpuChoice));
  }, [playerChoice, cpuChoice]);

  useEffect(() => {
    result === "Calculating" && setResult(roundResult());
  }, [result]);

  const handleCpuChoice = () => {
    return choices[Math.floor(Math.random() * 5)];
  };

  const roundResult = () => {
    const round =
      playerWin  ? "Win" : "Loss";
    round === "Win" && setPlayerScore(playerScore + 1);
    return round;
  };

  const handleChoice = (newPlayerChoice: ChoiceType) => {
    setPlayerChoice(newPlayerChoice);
    setCpuChoice(handleCpuChoice());
  };

  const compare = (choice: ChoiceType, opponent_choice: ChoiceType) => {
    setResult("Calculating");
    const { beats } = choice;
    const { name } = opponent_choice;
    return name in beats;
  };
  const [score, setScore] = useState(0)
  const [rulesModalOpen, setRulesModalOpen] = useState(false);
  return (
    <main className='flex min-h-screen flex-col items-center gap-10 sm:justify-between font-barlow font-semibold'>
      <header className='border-2 border-header-outline rounded-lg max-w-[85vw] w-[650px] flex justify-between flex-row p-2 mt-8 sm:p-4 uppercase sm:rounded-2xl'>
        <div className='max-sm:text-xs text-white font-bold space-x-0 flex flex-col justify-center ml-2'>
          <p className='h-2.5 leading-3 sm:h-[1.35rem] sm:text-2xl sm:leading-6 '>Rock</p>
          <p className='h-2.5 leading-3 sm:h-[1.35rem] sm:text-2xl sm:leading-6 '>Paper</p>
          <p className='h-2.5 leading-3 sm:h-[1.35rem] sm:text-2xl sm:leading-6 '>Scissors</p>
          <p className='h-2.5 leading-3 sm:h-[1.35rem] sm:text-2xl sm:leading-6 '>Lizard</p>
          <p className='h-2.5 leading-3 sm:h-[1.35rem] sm:text-2xl sm:leading-6 '>Spock</p>
        </div>
        <div className='bg-white flex flex-col justify-center rounded-md text-[hsl(229, 25%, 31%)] text-center min-h-full w-20 sm:w-36 shadow-sm p-2'>
          <p className='text-score text-xs sm:text-sm tracking-widest'>Score</p>
          <h2 className='text-points text-4xl sm:text-6xl font-bold'>{score}</h2>
        </div>
      </header>

      <TokenSelectionSection/>

      {rulesModalOpen && (
        <RulesModal
        isOpen={rulesModalOpen}
        handleClose={() => setRulesModalOpen(!rulesModalOpen)}/>
        
      )}

      <footer className='sm:self-end sm:sticky sm:bottom-[30px] sm:right-[30px]'>
        <button onClick={() => setRulesModalOpen(!rulesModalOpen)} className='border border-white rounded-lg leading-5 tracking-widest w-28 h-10 text-white uppercase text-center p-2'>Rules</button>
      </footer>
    </main>
  )
}
