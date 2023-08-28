import SWitem from '@/components/SWitem'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <h1>hello world</h1>
      <div className=' bg-white flex w-[660px] h-[450px] overflow-hidden border border-black rounded-md'>
        <section className='h-full w-1/2 border-r border-black/5 px-4 py-6'>
          <h1 className='border-b border-black/5 pb-1 mb-1'>Software Permission</h1>
          <div className='container-snap h-full overflow-y-scroll'>
            {
              [1, 2, 3, 4].map((k) => <SWitem key={k} />)
            }
          </div>
        </section>
        <section className='h-full w-1/2 px-4 py-6'>
          <h1 className='border-b border-black/5 pb-1 mb-1'>All Software</h1>
          <div className='container-snap h-full overflow-y-scroll'>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((k) => <SWitem key={k} />)
            }
          </div>
        </section>
      </div>
    </main>
  )
}
