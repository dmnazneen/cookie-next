import AddEditUser from '@/components/modals/AddEditUser'
import AddSW from '@/components/modals/AddSW'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <h1>hello world</h1>
      {/* <AddSW /> */}
      <AddEditUser />
    </main>
  )
}
