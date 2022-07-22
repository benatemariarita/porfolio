import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <>
    <div className="border-1 border-grey-500 max-w-screen-xl mx-auto py-14 flex gap-8">
    <span className="text-2xl font-medium text-indigo-300">maria rita benate</span>
    <Link href="/projetos" passHref><a class="text-sm font-medium tracking-wide text-gray-600 ml-auto">Projetos</a></Link>
    <Link href="/sobre-mim" passHref><a class="text-sm font-medium tracking-wide text-gray-600">Sobre mim</a></Link>
    </div>
    </>
  )
}
