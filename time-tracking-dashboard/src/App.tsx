import Card from './components/Card'
import './index.css'

function App() {

  return (


    <main className="flex flex-col gap-6">

      <div className="user bg-Navy-900 rounded-2xl h-[203px] w-[327px] mt-17">
        <div className='flex items-center bg-Purple-600 justify-center rounded-2xl py-8  gap-6'>

          <div>
            <img className='h-16 w-16 border-3 border-white rounded-full' src="/image-jeremy.png" alt="" />
          </div>
          <div>
            <p className='text-Navy-200'>Report for</p>
            <h1 className='text-white text-[24px] font-light'>Jeremy Robson</h1>
          </div>

        </div>

        <div className='flex justify-around mt-3 '>
          <p className='text-Purple-500 px-1'>Daily</p>
          <p className='text-white px-1'>Weekly</p>
          <p className='text-Purple-500 px-1'>Monthly</p>
        </div>
      </div>

      <Card type='work' />

      <Card type='play' />
      <Card type='study' />
      <Card type='exercise' />
      <Card type='social' />
      <Card type='selfCare' />



    </main >


  )
}

export default App
