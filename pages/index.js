import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import { Icon } from '@iconify/react';
import Fixed from '../components/Fixed';

export default function Home() {
  return (
    <>
      <Fixed>
        <div className="border-1 border-grey-500 max-w-screen-lg mx-auto py-16">
          <div className="text-xl font-light py-4">UX &amp; Product Designer</div>
          <div className="text-5xl font-medium py-4">Oie, eu me chamo <span className="text-orange-300">Maria</span></div>
          <div className="text-md font-light text-neutral-500 tracking-wide py-4">I&apos;m current reading the last chapter of Harry Potter and The Prisoner Of Azkaban</div>
          <div className="py-4 flex gap-2">
            <Link href="https://www.linkedin.com/in/mariaritabenate/" passHref>
              <a target="_blank"><Icon icon="mdi:linkedin" className="hover:text-orange-300 text-lg" /></a>
            </Link>
            <Link href="https://www.linkedin.com/in/mariaritabenate/" passHref>
              <a target="_blank"><Icon icon="heroicons-outline:mail" className="text-lg hover:text-orange-300" /></a>
            </Link>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex">
            <div className="hover:bg-neutral-50 w-1/2 tracking-wide text-center py-24 px-40 flex flex-col items-center">
              <p className="text-xl font-medium text-neutral-900
               ">Suporte Philips Brasil</p>
              <div className="text-sm font-light text-neutral-500 tracking-wide py-4">I&apos;m current reading the last chapter of Harry Potter and The Chamber Of Secrets</div>
              <Icon icon="heroicons-outline:arrow-sm-right" className="text-xl hover:text-orange-300" />
            </div>
            <img className="w-1/2 hover:bg-gradient-to-r" src="/thumbnail.png" />
          </div>

          <div className="flex">
            <img className="w-1/2" src="/curso-figma.png" />
            <div className="hover:bg-neutral-50 w-1/2 tracking-wide text-center py-24 px-40 flex flex-col items-center">
              <p className="text-xl font-medium text-neutral-900
               ">Suporte Philips Brasil</p>
              <div className="text-sm font-light text-neutral-500 tracking-wide py-4">I&apos;m current reading the last chapter of Harry Potter and The Chamber Of Secrets</div>
              <Icon icon="heroicons-outline:arrow-sm-left" className="text-xl hover:text-orange-300" />
            </div>
          </div>
        </div>
      </Fixed>
    </>
  )
}
