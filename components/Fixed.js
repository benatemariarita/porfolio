import Link from "next/link"
import { Icon } from '@iconify/react';

export default function Fixed(props) {
    return (
      <>
        <div className="border-1 border-grey-500 max-w-screen-xl mx-auto py-12 flex gap-8">
          <span className="text-xl font-bold tracking-wide text-gray-900">maria rita benate</span>
          <Link href="/" passHref><a className="text-sm font-medium hover:text-orange-300 tracking-wide ml-auto ">Projetos</a></Link>
          <Link href="/sobre-mim" passHref><a className="text-sm font-medium tracking-wide hover:text-orange-300 active:text-orange-300">Sobre mim</a></Link>
        </div>
        {props.children}
        <div className="max-w-screen-xl mx-auto pt-52 pb-10">
          <div className="flex justify-center gap-2 py-6">
            <Link href="https://www.linkedin.com/in/mariaritabenate/" passHref>
              <a target="_blank"><Icon icon="mdi:linkedin" className="text-lg hover:text-orange-300" /></a>
            </Link>
            <Link href="https://www.linkedin.com/in/mariaritabenate/" passHref>
              <a target="_blank"><Icon icon="heroicons-outline:mail" className="text-lg hover:text-orange-300" /></a>
            </Link>
          </div>
          <div className="text-sm text-neutral-300 flex justify-center">
            <a>Desenvolvido por Maria Rita Benate.</a>
          </div>
        </div>
      </>
    )
  }