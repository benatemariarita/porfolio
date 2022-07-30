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
                <div className="border-1 max-w-screen-md mx-auto pt-14 pb-10">
                    <div className="text-sm font-medium tracking-wide text-gray-800 text-center pb-4">ABRIL - MAIO 2022</div>
                    <div className="text-3xl font-medium tracking-wider text-gray-800 text-center pb-10"> Suporte Philips Brasil</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800">Criar uma página de suporte, de forma que o atendimento seja fácil e rápido para uma marca relevante no mercado foi o desafio dado pelo UX bootcamp da Aela School. De forma independente, atuei neste estudo de caso aplicando conceitos e processos de UX identificando conceitos iniciais, definindo hipóteses, ideando e desenvolvendo uma solução.</div>
                </div>

                <div className="bg-neutral-50 pt-20">
                <div className="max-w-screen-lg mx-auto">
                    <div className="flex">
                        <img src="/Support Page - Tópicos teste 1.png" />
                    </div>
                </div>
                </div>
                


                <div className="border-1 max-w-screen-md mx-auto py-14">
                    <div className="text-3xl font-medium tracking-wide text-gray-800 pt-6 pb-10"> Resumo do Projeto</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800 pb-4">Quando há um problema ou uma dúvida, atualmente o cliente da Loja Virtual Philips Brasil procura suporte no site e recebe informações sobre possíveis formas de atendimento, como horário de atendimento, telefone para contato, chat, respostas para questões frequentes.  </div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800 pb-4">No entando, através da pesquisa secundária, foi identicado pontos de melhoria na interface atual e novos recursos essenciais para entarem presentes em uma nova experiência.</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800">O redesenho do suporte serve para simplificar a jornada do cliente em busca do atendimento, reduzir o tempo de busca de informações, tornando a experiência mais intuitiva, amigável e ágil. </div>
                </div>
                <div className="border-1 max-w-screen-md mx-auto py-8">
                    <div className="text-3xl font-medium tracking-wide text-gray-800 pt-6">Processo</div>
                </div>

                <div className="max-w-screen-sm mx-auto pb-24">
                    <div className="flex">
                        <img src="/Frame 45.png" />
                    </div>
                </div>

                <hr className="solid max-w-screen-lg mx-auto"></hr>

                <div className="border-1 max-w-screen-md mx-auto pt-14 pb-4">
                    <div className="text-3xl font-medium tracking-wide text-gray-800 pt-6 pb-10"> Conhecendo a marca</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800">
                        A Philips se tornou conhecida no mundo todo através de seus diversos segmentos de produtos tecnológicos e inovadores.
                        Atualmente o foco estratégico está em criar soluções considerando toda a jornada de saúde das pessoas desde cuidados pessoais diários até tratamentos clínicos. A empresa encontra valor em:
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto py-5">
                    <div className="flex">
                        <img src="/conhecendo-a-marca (3).png" />
                    </div>
                </div>

                <div className="border-1 max-w-screen-md mx-auto pt-14 pb-4">
                    <div className="text-3xl font-medium tracking-wide text-gray-800 pt-6 pb-10">Como secom a experiencia atual?</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800">
                        Para entender melhor os problemas que usuários como a Fernanda encontram na experiencia atual, utilizei de três jornadas do usuário. Elas compartilham o mesmo cenário e expectativa, porém com diferentes tomada de decisões.
                    </div>
                </div>
                <div className="max-w-screen-md mx-auto">
                    <div className="flex">
                        <img src="/atendimento.png" />
                    </div>
                </div>

                <div className="border-1 max-w-screen-md mx-auto pt-14 pb-4">
                    <div className="text-3xl font-medium tracking-wide text-gray-800 pt-6 pb-10"> Análise de competidores</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800">
                        Para entender de que forma prática como esses pontos podem ser aplicados, escolhi duas empresas conhecidas
                        no mercado para analisar quais aspectos podem contribuir para percepção de um bom atendimento.
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto">
                    <div className="flex">
                        <img src="/analise-de-competidores (1).png" />
                    </div>
                </div>

                <div className="border-1 max-w-screen-md mx-auto pt-14 pb-4">
                    <div className="text-3xl font-medium tracking-wide text-gray-800 pt-6 pb-10">Opiniões sobre o atendimento Philips</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800 pb-4">Analisei a experiência que alguns clientes tiveram com o atendimento Philips através de seus próprios relatos na plataforma de solução de conflito entre consumidores e empresas, ReclameAQUI.  </div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800">Com descrições reais, é possível identificar as decisões que os usuários tomam ao buscar atendimento dentro do site e as dificuldades que eles encontram ao tentar alcançar seu objetivo. Pontos que me chamaram a atenção nas experiências: </div>
                </div>
                <div className="max-w-screen-lg mx-auto">
                    <div className="flex">
                        <img src="/reclame-aqui (1).png" />
                    </div>
                </div>

                <div className="border-1 max-w-screen-md mx-auto pt-14 pb-4">
                    <div className="text-3xl font-medium tracking-wide text-gray-800 pt-6 pb-10">Persona</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800 pb-4">Como o propósito da Philips é estar presente em todo o ciclo de saúde das pessoas e melhorar a saúde e bem-estar através de inovações, os perfis dos clientes da marca são diversos. Levando isso em consideração - propósito da empresa e público-alvo diverso - direcionei a pesquisa para identificar os clientes do segmento Avent.</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800 pb-4">A Philips Avent é a linha de produtos para mães e bebês, do recém-nascido à criança e sendo assim, o primeiro contato que muitos consumidores terão com a marca.</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800 pb-4">Para conhecer os usuários que consomem de fato as soluções Avent, fui em busca dessas informações em blogs e canais de resenha não patrocinados; para que não houvesse interferência do direcionamento estratégico de público da Philips.</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800 pb-4"> Reuni as principais características identificadas na Pesquisa Secundária e criei em uma proto-persona com os pontos que auxiliam no desenvolvimento de uma solução efetiva e também, que podem ser relevantes para usuários de outros segmentos da marca.</div>

                </div>
                <div className="max-w-screen-lg mx-auto">
                    <div className="flex">
                        <img src="/teste-persona (1).png" />
                    </div>
                </div>

                <div className="border-1 max-w-screen-md mx-auto pt-14 pb-4">
                    <div className="text-2xl font-medium tracking-wide text-gray-800 pt-6 pb-10">Como seria resolver um problema com a experiencia atual?</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800">
                        Para entender melhor os problemas que usuários como a Fernanda encontram na experiencia atual, utilizei de três jornadas do usuário. Elas compartilham o mesmo cenário e expectativa, porém com diferentes tomada de decisões.
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto">
                    <div className="flex">
                        <img src="/jornada-test (5).png" />
                    </div>
                </div>
                <div className="border-1 max-w-screen-lg mx-auto pt-14 pb-4">
                    <div className="text-3xl font-medium tracking-wide text-gray-800 pt-6 pb-10 text-center">Princípios de Design</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800 pb-8">
                        Depois de entender o que os consumidores esperam de um bom atendimento e os efeitos isso pode ter em um negócio, conhecer dificuldades que os clientes encontram ao buscar o suporte Philips e identificar pontos de fricção na jornada que o usuário realiza procurando atendimento através da experiência atual, condensei os aprendizados e assim, determinei o que a nova experiência deve possuir para ser efetiva.
                    </div>
                </div>
                <div className="bg-neutral-100 py-60"></div>
                <div className="border-1 max-w-screen-lg mx-auto pt-14 pb-4">
                    <div className="text-3xl font-medium tracking-wide text-gray-800 pt-6 pb-10 text-center">Desenhando hipóteses</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800 pb-8">
                        Para atingir seus objetivos dentro da interface, o usuário necessita de funcionalidades que o auxilie nisso. Antes de outras decisões, após alguns esboços, determinei as funções que atendiam aos requisitos essenciais elencados através da pesquisa.
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto">
                    <div className="flex">
                        <img src="/wireframe (1).png" />
                    </div>
                </div>

                <div className="border-1 max-w-screen-lg mx-auto pt-14 pb-8">
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800 pb-4">
                        Funções definidas, defini a estrutura da página contendo três sessões principais. A sequência direciona intuitivamente o usuário criando a sensação de passo-a-passo; caso não encontre a resposta em uma área ele poderá utilizar a próxima sessão.                    </div>
                </div>
                <div className="max-w-screen-sm mx-auto">
                    <div className="flex">
                        <img src="/wireframe-sessoes (3).png" />
                    </div>
                </div>
                <div className="border-1 max-w-screen-lg mx-auto pt-28 pb-4">
                    <div className="text-3xl font-medium tracking-wide text-gray-800 pt-6 pb-10 text-center">Inspirações</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800">
                        Como a página de suporte já faz parte de todo o contexto apresentado pela Philips, para construir o design, busquei inspiração em como a própria empresa comunica seus valores através de sua comunicação visual.
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto py-4">
                    <div className="flex">
                        <img src="/inspiracao (2).png" />
                    </div>
                </div>

                <div className="border-1 max-w-screen-lg mx-auto pt-14 pb-4">
                    <div className="text-3xl font-medium tracking-wide text-gray-800 pt-6 pb-10 text-center">Style Guide</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800 pb-8">
                        Traduzindo as inspirações para o design da interface, utilizei cores neutras e sólidas como base do design e o conceito de luzes através de gradientes empregados em partes de destaque na página. Para a tipografia, escolhi a fonte presente em todo a Loja Virtual Philips com o intuito de evitar o estranhamento do usuário ao navegar pelo site.
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto pb-24">
                    <div className="flex">
                        <img src="/style-guide.png" />
                    </div>
                </div>

                <div className=" bg-neutral-50 pt-24 pb-32">
                    <div className="text-3xl font-medium tracking-wide text-gray-800 pb-14 text-center">A nova experiência</div>
                    <img src="/Frame 42 (5).png" />
                    <div className="border-1 max-w-screen-lg mx-auto pt-14 pb-4">
                        <div className="text-3xl font-medium tracking-wide text-gray-800 pt-12 pb-16 text-center">Detalhamento dos elementos da interface e funcionalidades </div>
                    </div>
                    <div className="max-w-screen-lg mx-auto pb-4">
                        <div className="flex">
                            <img src="/funcionalidades-1.png" />
                        </div>
                    </div>
                    <div className="max-w-screen-lg mx-auto pb-4">
                        <div className="flex">
                            <img src="/funcionalidades-2.png" />
                        </div>
                    </div>
                    <div className="max-w-screen-lg mx-auto">
                        <div className="flex">
                            <img src="/funcionalidades-3.png" />
                        </div>
                    </div>

                    <div className="border-1 max-w-screen-lg mx-auto pt-14 pb-4">
                        <div className="text-3xl font-medium tracking-wide text-gray-800 pt-6 pb-10 text-center">O chat</div>
                        <div className="text-sm font-regular leading-loose text-justify text-gray-800 pb-8">
                            Ao longo da pesquisa, a importancia do chat evidente no ciclo de atendimento Philips. Sendo assim, o novo fluxo foi pensado priorizando a comunicação clara e amigável e reaproveitamento de dados de cadastro.                     </div>
                    </div>
                    <div className="max-w-screen-lg mx-auto">
                        <div className="flex">
                            <img src="/chat.png" />
                        </div>
                    </div>
                </div>
                <div className="border-1 max-w-screen-md mx-auto pt-24">
                    <div className="text-3xl font-medium tracking-wide text-gray-800 pt-6 pb-10">Aprendizados</div>
                </div>
                <div className="border-1 max-w-screen-md mx-auto pb-4">
                    <div className="text-2xl font-medium tracking-wide text-gray-800 pt-6 pb-10">Qual seria o próximo passo deste projeto</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800 pb-4">Gostaria de realizar testes de interface e funcionalidades com usuários reais da marca e  realizar as melhorias identificadas.</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800">Com descrições reais, é possível identificar as decisões que os usuários tomam ao buscar atendimento dentro do site e as dificuldades que eles encontram ao tentar alcançar seu objetivo. Pontos que me chamaram a atenção nas experiências: </div>
                </div>
                <div className="border-1 max-w-screen-md mx-auto pt-14 pb-4">
                    <div className="text-2xl font-medium tracking-wide text-gray-800 pt-6 pb-10">Do que me orgulho</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800 pb-4">Analisei a experiência que alguns clientes tiveram com o atendimento Philips através de seus próprios relatos na plataforma de solução de conflito entre consumidores e empresas, ReclameAQUI.  </div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800">Com descrições reais, é possível identificar as decisões que os usuários tomam ao buscar atendimento dentro do site e as dificuldades que eles encontram ao tentar alcançar seu objetivo. Pontos que me chamaram a atenção nas experiências: </div>
                </div>
                <div className="border-1 max-w-screen-md mx-auto pt-14 pb-4">
                    <div className="text-2xl font-medium tracking-wide text-gray-800 pt-6 pb-10">O que eu melhoraria</div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800 pb-4">Analisei a experiência que alguns clientes tiveram com o atendimento Philips através de seus próprios relatos na plataforma de solução de conflito entre consumidores e empresas, ReclameAQUI.  </div>
                    <div className="text-sm font-regular leading-loose text-justify text-gray-800">Com descrições reais, é possível identificar as decisões que os usuários tomam ao buscar atendimento dentro do site e as dificuldades que eles encontram ao tentar alcançar seu objetivo. Pontos que me chamaram a atenção nas experiências: </div>
                </div>
            </Fixed>
        </>
    )
}
