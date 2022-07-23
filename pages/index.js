import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <>
      <div className="border-1 border-grey-500 max-w-screen-xl mx-auto py-12 flex gap-8">
        <span className="text-xl font-bold tracking-wide ">maria rita benate</span>
        <Link href="/projetos" passHref><a className="text-sm font-medium hover:text-orange-300 tracking-wide ml-auto ">Projetos</a></Link>
        <Link href="/sobre-mim" passHref><a className="text-sm font-medium tracking-wide hover:text-orange-300 active:text-orange-300">Sobre mim</a></Link>
      </div>
      <div className="border-1 border-grey-500 max-w-screen-lg mx-auto py-16">
        <div className="text-2xl font-light py-4">UX &amp; Product Designer</div>
        <div className="text-6xl font-medium py-4">oie, eu me chamo <span className="text-orange-300">maria</span></div>

        <div className="text-lg font-light text-neutral-500 tracking-wide py-4">I&apos;m current reading the last chapter of Harry Potter and The Chamber Of Secrets</div>


        <div className="py-4 flex gap-2">
          <Link href="https://www.linkedin.com/in/mariaritabenate/" passHref>
            <Icon icon="mdi:linkedin" className="hover:text-orange-300 text-lg" />
          </Link>
          <Link href="https://www.linkedin.com/in/mariaritabenate/" passHref>
            <Icon icon="heroicons-outline:mail" className="text-lg hover:text-orange-300" />
          </Link>

        </div>

      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex">
          <div className="hover:bg-neutral-50 w-1/2 tracking-wide py-20 px-44">
            <Link href="/projetos" passHref>
              <a className="text-xl font-medium text-neutral-900
               ">Suporte Philips Brasil</a>
            </Link>
            <Link href="/projetos" passHref>
              <a className="text-md font-light text-neutral-500
               ">"Criar uma página de suporte, de forma que o atendimento seja fácil e rápido para uma marca relevante no mercado".</a>
            </Link>
          </div>

          <img className="w-1/2 hover:bg-gradient-to-r" src="/thumbnail.png" />
        </div>
        <div className="flex">
          <img className="w-1/2" src="/curso-figma.png" />

          <div className="hover:bg-neutral-100 w-1/2">
            <div className=" w-1/2 tracking-wide py-20 px-16">
              <Link href="/projetos" passHref>
                <a className="text-xl font-medium text-neutral-900
               ">Curso de Figma</a>
              </Link>
              <Link href="/projetos" passHref>
                <a className="text-md font-light text-neutral-500
               ">"Criar uma página de suporte, de forma que o atendimento seja fácil e rápido para uma marca relevante no mercado".</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto pt-40 pb-10">
        <div className="flex justify-center gap-2 py-6">
          <Link href="https://www.linkedin.com/in/mariaritabenate/" passHref>
            <Icon icon="mdi:linkedin" className="text-lg hover:text-orange-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/mariaritabenate/" passHref>
            <Icon icon="heroicons-outline:mail" className="text-lg hover:text-orange-300" />
          </Link>
        </div>
        <div className="text-sm text-neutral-300 flex justify-center">
          <a>Desenvolvido por Maria Rita Benate.</a>
        </div>
      </div>
    </>
  )
}
