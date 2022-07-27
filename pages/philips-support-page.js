import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import { Icon } from '@iconify/react'
import Fixed from '../components/Fixed';


export default function Home() {
    return (
        <>
            <Fixed>
                <div className="border-1 max-w-screen-md mx-auto py-14">
                    <div className="text-sm font-medium tracking-wide text-gray-800 text-center pb-4">ABRIL - MAIO 2022</div>
                    <div className="text-3xl font-medium tracking-wider text-gray-800 text-center pb-8"> Suporte Philips Brasil</div>
                    <div className="text-md font-light leading-relaxed text-justify text-gray-800">Criar uma página de suporte, de forma que o atendimento seja fácil e rápido para uma marca relevante no mercado foi o desafio dado pelo UX bootcamp da Aela School. De forma independente, atuei neste estudo de caso aplicando conceitos e processos de UX identificando conceitos iniciais, definindo hipóteses, ideando e desenvolvendo uma solução.</div>
                </div>

                <div className="max-w-screen-lg mx-auto">
                    <div className="flex">
                        <img src="/thumbnail.png" />
                    </div>
                </div>


                <div className="border-1 max-w-screen-md mx-auto py-14">
                    <div className="text-2xl font-medium tracking-wide text-gray-800 pt-6 pb-10"> Resumo do Projeto</div>
                    <div className="text-md font-light leading-relaxed text-justify text-gray-800 pb-6">Quando há um problema ou uma dúvida, atualmente o cliente da Loja Virtual Philips Brasil procura suporte no site e recebe informações sobre possíveis formas de atendimento, como horário de atendimento, telefone para contato, chat, respostas para questões frequentes.  </div>
                    <div className="text-md font-light leading-relaxed text-justify text-gray-800 pb-6">No entando, através da pesquisa secundária, foi identicado pontos de melhoria na interface atual e novos recursos essenciais para entarem presentes em uma nova experiência.</div>
                    <div className="text-md font-light leading-relaxed text-justify text-gray-800">O redesenho do suporte serve para simplificar a jornada do cliente em busca do atendimento, reduzir o tempo de busca de informações, tornando a experiência mais intuitiva, amigável e ágil. </div>
                </div>

                <hr className="solid max-w-screen-md mx-auto"></hr>

                <div className="border-1 max-w-screen-md mx-auto pt-14 pb-4">
                    <div className="text-3xl font-medium tracking-wide text-gray-800 pt-6 pb-10"> Conhecendo a marca</div>
                    <div className="text-MD font-light leading-relaxed text-justify text-gray-800 pb-12">
                        A Philips se tornou conhecida no mundo todo através de seus diversos segmentos de produtos tecnológicos e inovadores. 
                        Atualmente o foco estratégico está em criar soluções considerando toda a jornada de saúde das pessoas desde cuidados pessoais diários até tratamentos clínicos.
                    </div>
                    <div className="text-md font-light leading-relaxed bg-blue-50 text-center text-gray-800 py-2">
                    A EMPRESA ENCONTRA VALOR EM:
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto">
                    <div className="flex">
                        <img src="/New Understanding.png" />
                    </div>
                </div>
            </Fixed>
        </>
    )
}
