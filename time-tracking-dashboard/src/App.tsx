import data from './data/data.json';
import Card from './components/Card';
import './index.css';
import { useState } from 'react';

const titleToTypeMap: Record<string, 'work' | 'play' | 'study' | 'exercise' | 'social' | 'selfCare'> = {
  Work: 'work',
  Play: 'play',
  Study: 'study',
  Exercise: 'exercise',
  Social: 'social',
  'Self Care': 'selfCare',
};

type Period = 'daily' | 'weekly' | 'monthly';


function App() {

  const [period, setPeriod] = useState<Period>('weekly');

  const handlePeriodChange = (newPeriod: Period) => {
    setPeriod(newPeriod);
  };


  return (


    <main className="lg:grid-cols-4  lg:gap-8 lg:flex-none   md:grid md:grid-cols-3    flex flex-col gap-6">

      <div className="cardJeremy lg:mt-0 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3  lg:pb-8 lg:flex lg:flex-col lg:justify-between  lg:w-[255px] lg:h-[520px]     md:col-span-3 md:w-full  user bg-Navy-900 rounded-2xl h-[203px] w-[327px] mt-17">
        <div className='lg:flex-col lg:h-full  lg:items-start   md:justify-start md:pl-8     flex items-center bg-Purple-600 justify-center rounded-2xl py-8  gap-6'>

          <div>
            <img className='h-16 w-16 border-3 border-white rounded-full' src="/image-jeremy.png" alt="" />
          </div>
          <div>
            <p className='text-Navy-200'>Report for</p>
            <h1 className='text-white text-[24px] lg:text-[40px] lg:text-base/tight font-light'>Jeremy Robson</h1>
          </div>

        </div>

        <div className='lg:flex-col lg:mt-6 lg:ml-8 lg:items-start lg:gap-5  md:justify-center md:gap-33   flex justify-around mt-3 '>
          <button onClick={() => handlePeriodChange('daily')} className={`cursor-pointer text-Purple-500 ${period === "daily" ? "text-white " : " text-Purple-500"} px-1`}>Daily</button>
          <button onClick={() => handlePeriodChange('weekly')} className={`cursor-pointer text-Purple-500 px-1  ${period === "weekly" ? "text-white " : " text-Purple-500"}`}>Weekly</button>
          <button onClick={() => handlePeriodChange('monthly')} className={`cursor-pointer text-Purple-500 ${period === "monthly" ? "text-white " : " text-Purple-500"} px-1`}>Monthly</button>

        </div>
      </div>


      {/* Cards */}


      {data.map((item, index) => (
        <Card
          key={index}
          type={titleToTypeMap[item.title]}
          current={item.timeframes[period].current}
          previous={item.timeframes[period].previous}
          label={period === 'daily' ? 'Yesterday' : period === 'weekly' ? 'Last Week' : 'Last Month'}
        />
      ))}


    </main >


  )
}

export default App
