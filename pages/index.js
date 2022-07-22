import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="border-1 border-grey-500 max-w-screen-xl mx-auto py-14 flex gap-8">
        <span className="text-2xl font-medium text-stone-900">maria rita benate</span>
        <Link href="/projetos" passHref><a className="text-sm font-medium tracking-wide text-gray-600 ml-auto">Projetos</a></Link>
        <Link href="/sobre-mim" passHref><a className="text-sm font-medium tracking-wide text-gray-600">Sobre mim</a></Link>
      </div>
      <div className="border-1 border-grey-500 max-w-screen-xl mx-auto ml-40 py-16">
        <div className="text-2xl font-light py-4">Ux / Product Designer</div>
        <div className="text-6xl font-medium py-4">hey there, I'm <span className="text-orange-300">Maria</span></div>
        <div className="text-xl font-light text-neutral-400 py-4">I'm current reading the last chapter of Harry Potter and The Chamber Of Secrets</div>
      </div>
      <div className="border-2 border-grey-500 max-w-screen-xl mx-auto py-40">
      </div>
      <div className="border-2 border-grey-500 max-w-screen-xl mx-auto py-40">
      </div>
      <div className="border-1 border-grey-500 max-w-screen-xl mx-auto ml-40 py-32">

      </div>
    </>
  )
}
