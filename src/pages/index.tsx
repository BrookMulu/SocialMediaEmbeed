import Image from 'next/image'
import { Inter } from 'next/font/google'
import Members from '@/components/Members/Members'
import SocialMedia from '@/components/SocialMedia/SocialMedia'
import {Box, Button, FormControl} from "@chakra-ui/react"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
      <Members/>
      <SocialMedia/>
      </>
  )
}
