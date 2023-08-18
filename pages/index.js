import { Inter } from 'next/font/google'
import Input from '@/components/Input'
import WindowBtn from '@/components/windowBtn'
import NavLogo from '@/components/NavLogo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Input />
      <WindowBtn />
      <p className='m-7'></p>
      <NavLogo />
    </main>
  )
}
