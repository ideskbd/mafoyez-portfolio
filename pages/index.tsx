import { Inter } from 'next/font/google'
import MainLayout from '@/src/layouts/layouts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <h2 className='text-4xl'>Welcome to my portfolio</h2>
    </MainLayout>
  )
}
