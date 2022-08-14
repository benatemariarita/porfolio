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
                    <div className="text-sm font-medium tracking-wide text-center pb-4">ABRIL - MAIO 2022</div>
                    <div className="text-4xl font-medium tracking-wider text-center pb-10"> Suporte Philips Brasil</div>
                    <div className="text-sm font-regular leading-loose text-justify">&apos;&apos;Realizar o redesign ou criar uma página de suporte para uma marca relevante no mercado&apos;&apos; foi o desafio dado pelo UX Bootcamp da Aela School. De forma independente, atuei neste estudo de caso aplicando conceitos e processos de UX/UI identificando conceitos iniciais, ideando e desenvolvendo uma solução.</div>
                </div>

                <div className="bg-neutral-50 pt-20">
                    <div className="max-w-screen-lg mx-auto">
                        <div className="flex">
                            <img src="/Support-Page-1.png" />
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto pt-6 pr-2">
                    <img src="/figma.png" />
                </div>

                <div className="border-1 max-w-screen-md mx-auto pb-10 pb-14">
                    <div className="text-3xl font-medium tracking-wide pt-6 pb-10"> Resumo do Projeto</div>
                    <div className="text-sm font-regular leading-loose text-justify pb-4">Quando há um problema ou uma dúvida, atualmente o cliente da Loja Virtual Philips Brasil procura suporte no site e recebe informações sobre possíveis formas de atendimento, como os horários de funcionamento, telefone para contato, chat com um atendente e respostas para questões frequentes.  </div>
                    <div className="text-sm font-regular leading-loose text-justify pb-4">No entando, através da pesquisa secundária, identifiquei pontos de melhoria na interface atual e novos recursos essenciais para estarem presentes em uma nova experiência.</div>
                    <div className="text-sm font-regular leading-loose text-justify">O redesenho do suporte serve para simplificar a jornada do cliente em busca do atendimento, reduzir o tempo de busca de informações, tornando a experiência mais intuitiva, ágil e amigável. </div>
                </div>
                <div className="max-w-screen-md mx-auto pt-4 pb-8">
                    <div className="text-3xl font-medium tracking-wide pt-6">Processo</div>
                </div>

                <div className="max-w-screen-md mx-auto pt-12 pb-24">
                    <div className="flex">
                        <img src="/project-timeline (1).png" />
                    </div>
                </div>

                <hr className="solid max-w-screen-md mx-auto"></hr>

                <div className="border-1 max-w-screen-md mx-auto pt-28">
                    <div className="text-xs font-medium tracking-wide text-center pb-4">ENTENDENDO A MARCA</div>
                    <div className="text-3xl font-medium tracking-wide text-center pb-10">A Philips e Seus Valores</div>
                    <div className="text-sm font-regular leading-loose text-justify pb-6">
                        A Philips se tornou conhecida no mundo todo através de seus diversos segmentos de produtos tecnológicos e inovadores.
                        Atualmente o foco estratégico está em criar soluções considerando toda a jornada de saúde das pessoas desde cuidados pessoais diários até tratamentos clínicos. A empresa encontra valor em:
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto">
                    <div className="flex">
                        <img src="/conhecendo-a-marca (3).png" />
                    </div>
                </div>

                <div className="border-1 max-w-screen-md mx-auto pt-24">
                    <div className="text-xs font-medium tracking-wide text-center pb-4">O QUE SIGNIFICA UM BOM SUPORTE?</div>
                    <div className="text-3xl font-medium tracking-wide text-center pb-10">Consumidores e Impacto nos Negócios</div>
                    <div className="text-sm font-regular leading-loose text-justify pb-8">
                        Para entender o que os consumidores acreditam ser indispensável em um bom suporte e o impacto que isso pode ter nos negócios de uma empresa, fui em busca de relatórios. De acordo com uma pesquisa realizada em 2020 e 2022 pela Zendesk:
                    </div>
                </div>
                <div className="max-w-screen-md mx-auto">
                    <div className="flex">
                        <img src="/atendimento (1).png" />
                    </div>
                </div>

                <div className="border-1 max-w-screen-md mx-auto pt-8 pb-4">
                    <div className="text-2xl font-medium tracking-wide text-center pt-6 pb-8"> E na prática?</div>
                    <div className="text-sm font-regular leading-loose text-justify">
                        A fim de visualizar como esses pontos funcionam na prática, escolhi duas empresas conhecidas
                        no mercado para analisar quais aspectos podem contribuir para percepção de um bom atendimento.
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto">
                    <div className="flex">
                        <img src="/analise-de-competidores (2).png" />
                    </div>
                </div>

                <div className="border-1 max-w-screen-md mx-auto pt-28">
                    <div className="text-xs font-medium tracking-wide text-center pb-6">ENTENDENDO OS CLIENTES PHILIPS E A EXPERIÊNCIA ATUAL</div>
                    <div className="text-3xl font-medium tracking-wide text-center pb-8">Conhecendo a Fernanda</div>
                    <div className="text-sm font-regular leading-loose text-justify pb-4">Como o propósito da Philips é estar presente em todo o ciclo de saúde das pessoas e melhorar a saúde e bem-estar através de inovações, os perfis dos clientes da marca são diversos. Levando isso em consideração - propósito da empresa e público-alvo diverso - direcionei a pesquisa para identificar os clientes do segmento Avent.</div>
                    <div className="text-sm font-regular leading-loose text-justify pb-4">A Philips Avent é a linha de produtos para mães e bebês, do recém-nascido à criança e sendo assim, o primeiro contato que muitos consumidores terão com a marca.</div>
                    <div className="text-sm font-regular leading-loose text-justify pb-4">Para conhecer os usuários que consomem de fato as soluções Avent, fui em busca dessas informações em blogs e canais de resenha não patrocinados; para que não houvesse interferência do direcionamento estratégico de público da Philips.</div>
                    <div className="text-sm font-regular leading-loose text-justify pb-10"> Reuni as principais características identificadas na Pesquisa Secundária e criei em uma proto-persona com os pontos que auxiliam no desenvolvimento de uma solução efetiva e também, que podem ser relevantes para usuários de outros segmentos da marca.</div>

                </div>
                <div className="max-w-screen-lg mx-auto">
                    <div className="flex">
                        <img src="/teste-persona (1).png" />
                    </div>
                </div>

                <div className="border-1 max-w-screen-md mx-auto pt-20">
                    <div className="text-3xl font-medium tracking-wide text-center pb-10">Dores e Insights</div>
                    <div className="text-sm font-regular leading-loose text-justify pb-6">Analisei a experiência que alguns clientes tiveram com o atendimento Philips através de seus próprios relatos na plataforma de solução de conflito entre consumidores e empresas, ReclameAQUI.  </div>
                    <div className="text-sm font-regular leading-loose text-justify pb-10">Com descrições reais, é possível identificar as decisões que os usuários tomam ao buscar atendimento dentro do site e as dificuldades que eles encontram ao tentar alcançar seu objetivo. Pontos que me chamaram a atenção nas experiências: </div>
                </div>
                <div className="max-w-screen-lg mx-auto">
                    <div className="flex">
                        <img src="/reclame-aqui (1).png" />
                    </div>
                </div>



                <div className="border-1 max-w-screen-md mx-auto pt-24">
                    <div className="text-3xl font-medium tracking-wide text-center pb-10">Análise da Experiência Atual</div>
                    <div className="text-sm font-regular leading-loose text-justify pb-4">
                        Para compreender melhor os problemas que usuários como a Fernanda encontram na experiencia atual, desenvolvi três jornadas do usuário. Elas compartilham o mesmo cenário e expectativa, porém com diferentes tomada de decisões.
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto">
                    <div className="flex">
                        <img src="/jornada-test (5).png" />
                    </div>
                </div>


                <div className="bg-neutral-50 my-20 py-28">
                    <div className="max-w-screen-lg mx-auto">
                        <div className="text-xs font-medium tracking-wide text-center pb-6">RESULTADO DA PESQUISA</div>
                        <div className="text-4xl font-medium tracking-wide text-center">Princípios de Design</div>
                        <div className="text-sm font-regular leading-loose text-center pt-10 pb-20">
                            Depois de conhecer o que os consumidores esperam de um bom atendimento e os efeitos isso pode ter em um negócio, entender dificuldades que os clientes encontram ao buscar o suporte Philips e identificar pontos de fricção na jornada que o usuário realiza procurando atendimento através da experiência atual, condensei os aprendizados e assim, determinei o que a nova experiência deve possuir para ser efetiva.
                        </div>
                    </div>
                    <div className="max-w-screen-lg mx-auto flex grid sm:grid-cols-3 gap-4 pb-6">
                        <div className="flex flex-col items-center pr-6">
                            <Icon className="text-6xl py-1 text-neutral-600" icon="bi:chat-square-quote" />
                            <div className="text-xl font-semibold tracking-wider py-4">Comunicação</div>
                            <div className="text-sm leading-loose text-center">
                                A solução, em forma de texto e elementos da interface precisam comunicar claramente para o usuário o que ele vai encontrar em cada funcionalidade.
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <Icon className="text-6xl text-neutral-600" icon="majesticons:lightbulb-shine-line" />
                            <div className="text-xl font-semibold tracking-wider py-4">Autonomia do Usuário</div>
                            <div className="text-sm leading-loose text-center">
                                Os usuários devem ser capazes de encontrar respostas antes de entrarem em contato com atendimento direto.
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <Icon className="text-6xl py-2 text-neutral-600" icon="fa6-solid:arrows-to-circle" />
                            <div className="text-xl font-semibold tracking-wider py-4">Destaque no Atendimento</div>
                            <div className="text-sm leading-loose text-center">
                                Todos os canais de contato direto disponíveis devem estar reunidos e destacados na interface.
                            </div>
                        </div>
                    </div>

                    <div className="max-w-screen-lg mx-auto flex grid sm:grid-cols-3 gap-4 pt-8">
                        <div className="flex flex-col items-center">
                            <Icon className="text-6xl py-1 text-neutral-600" icon="ic:round-settings-accessibility" />
                            <div className="text-xl font-semibold tracking-wider py-4">Acessibilidade</div>
                            <div className="text-sm leading-loose text-center">
                                Disponibilizar opções para tornar o acesso ao suporte acessível para o máximo número de usuários.
                            </div>
                        </div>
                        <div className="flex flex-col items-center ">
                            <Icon className="text-6xl py-2 text-neutral-600" icon="fa6-solid:arrows-turn-to-dots" />
                            <div className="text-xl font-semibold tracking-wider py-4">Intuitividade</div>
                            <div className="text-sm leading-loose text-center">
                                A jornada de resolução de problemas deve ser intuitiva, conduzindo o cliente para possíveis soluções.
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <Icon className="text-6xl py-1 text-neutral-600" icon="fluent:arrow-repeat-all-off-24-filled" />
                            <div className="text-xl font-semibold tracking-wider py-4">Redundância</div>
                            <div className="text-sm leading-loose text-center">
                                A solução deve evitar a solicitação de informações já concedidas.
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-1 max-w-screen-lg mx-auto pt-24 pb-14">
                    <div className="text-xs font-medium tracking-wide text-center pb-6">IDEANDO A EXPERIÊNCIA DO USUÁRIO | UX</div>
                    <div className="text-3xl font-medium tracking-wide text-center pb-8">Desenhando hipóteses</div>
                    <div className="text-sm font-regular leading-loose text-justify">
                        Para atingir seus objetivos dentro da interface, o usuário necessita de funcionalidades que o auxilie nisso. Antes de outras decisões, após alguns esboços, determinei as funções que atendiam aos requisitos essenciais elencados através da pesquisa.
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto">
                    <div className="flex">
                        <img src="/wireframe (1).png" />
                    </div>
                </div>

                <div className="border-1 max-w-screen-lg mx-auto pt-14 pb-8">
                    <div className="text-sm font-regular leading-loose text-justify pb-4">
                        Funções definidas, estabeleci a estrutura da página contendo três sessões principais. A sequência direciona intuitivamente o usuário criando a sensação de passo-a-passo; caso não encontre a resposta em uma área ele poderá utilizar a próxima sessão.                    </div>
                </div>
                <div className="max-w-screen-sm mx-auto">
                    <div className="flex">
                        <img src="/wireframe-sessoes (5).png" />
                    </div>
                </div>
                <div className="border-1 max-w-screen-lg mx-auto pt-28">
                    <div className="text-xs font-medium tracking-wide text-center pb-6">IDEANDO A INTERFACE DO USUÁRIO | UI</div>
                    <div className="text-3xl font-medium tracking-wide text-center pb-10">Inspirações Para o Design</div>
                    <div className="text-sm font-regular leading-loose text-justify">
                        Como a página de suporte já faz parte de todo o contexto apresentado pela Philips, para construir o design, busquei inspiração em como a própria empresa comunica seus valores através de sua comunicação visual.
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto py-4">
                    <div className="flex">
                        <img src="/inspiracao (3).png" />
                    </div>
                </div>

                <div className="border-1 max-w-screen-lg mx-auto pt-8 pb-4">
                    <div className="text-3xl font-medium tracking-wide pt-6 pb-10 text-center">Guia de Estilo</div>
                    <div className="text-sm font-regular leading-loose text-justify pb-8">
                        Traduzindo as inspirações para o design da interface, utilizei cores neutras e sólidas como base do design e o conceito de luzes através de gradientes empregados em partes de destaque na página. Para a tipografia, escolhi a fonte presente em todo a Loja Virtual Philips com o intuito de evitar o estranhamento do usuário ao navegar pelo site.
                    </div>
                </div>
                <div className="max-w-screen-lg mx-auto pb-24">
                    <div className="flex">
                        <img src="/style-guide.png" />
                    </div>
                </div>

                <div className=" bg-neutral-50 pt-24 pb-32">
                    <div className="text-xs font-medium tracking-wide text-center pb-4">A NOVA EXPERIÊNCIA</div>
                    <div className="text-4xl font-medium tracking-wide text-center pb-10">Página de Suporte Philips Brasil</div>
                    <img src="/new-philips-page (4).png" />
                    <div className="border-1 max-w-screen-lg mx-auto pt-12">
                        <div className="text-3xl font-medium tracking-wide py-12 text-center">Funcionalidades e Elementos da Interface</div>
                    </div>
                    <div className="max-w-screen-lg mx-auto pb-4">
                        <div className="flex">
                            <img src="/1-funcionalidades.png" />
                        </div>
                    </div>
                    <div className="max-w-screen-lg mx-auto pb-4">
                        <div className="flex">
                            <img src="/2-funcionalidades.png" />
                        </div>
                    </div>
                    <div className="max-w-screen-lg mx-auto">
                        <div className="flex">
                            <img src="/3-funcionalidades.png" />
                        </div>
                    </div>

                    <div className="border-1 max-w-screen-lg mx-auto pt-20 pb-4">
                        <div className="text-3xl font-medium tracking-wide pt-6 pb-10 text-center">O Chat</div>
                        <div className="text-sm font-regular leading-loose text-justify pb-8">
                            Ao longo da pesquisa, a importancia do chat evidente no ciclo de atendimento Philips. Sendo assim, o novo fluxo foi pensado priorizando a comunicação clara e amigável e reaproveitamento de dados de cadastro.</div>
                    </div>
                    <div className="max-w-screen-lg mx-auto">
                        <div className="flex">
                            <img src="/chat (1).png" />
                        </div>
                    </div>

                    <div className="border-1 max-w-screen-lg mx-auto pt-20 pb-4">
                        <div className="text-3xl font-medium tracking-wide pt-6 pb-10 text-center">Comportamento dos elementos</div>
                        <div className="text-sm font-regular leading-loose text-center pb-8">
                            Por fim, é possível ver o comportamento dos elementos e possibilidades de interação do usuário através do protótipo de alta fidelidade.</div>
                    </div>
                    <div className="max-w-screen-lg mx-auto">
                        <div className="flex">
                            <video controls="controls">
                                <source src="Untitled.mp4" type="video/mp4"></source>
                                <embed src="Untitled.mp4"></embed>
                            </video>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-md mx-auto pt-28 pb-20">
                    <div className="text-xs font-medium tracking-wide text-center py-4">CONCLUSÃO</div>
                    <div className="text-4xl font-medium tracking-wide text-center">Aprendizados</div>
                </div>
                <div className="max-w-screen-md mx-auto pb-12">
                    <div className="text-2xl font-medium tracking-wide text-center pb-6">Próximos passos deste projeto</div>
                    <div className="text-sm font-regular leading-loose text-justify pb-2">Gostaria de realizar testes de interface e funcionalidades com usuários reais da marca e  realizar as melhorias identificadas.</div>
                    <div className="text-sm font-regular leading-loose text-justify">Para próximas sprints, ao longo da pesquisa identifiquei que o suporte consiste - para a Philips - não só em atendimento ao usuário, mas também em assistência técnica dos produtos. Atualmente as páginas são separadas, porém notei que ambas tem funcionalidades parecidas. O próximo foco de estudo, partindo deste, seria unificar as duas páginas.</div>
                </div>
                <div className="max-w-screen-md mx-auto pb-12">
                    <div className="text-2xl font-medium tracking-wide text-center pb-6">Do que me orgulho</div>
                    <div className="text-sm font-regular leading-loose text-justify pb-2">Entender a relação do cliente com o atendimento Philips e o impacto que um bom suporte tem diretamente no negócio foi muito interessante. </div>
                    <div className="text-sm font-regular leading-loose text-justify">Toda a pesquisa foi realizada utilizando apenas dados colhidos na internet. Realizar o projeto com essa limitação - sem a participação de usuários atráves de entrevistas e pesquisas -  fez com que exercitasse minhas habilidades de buscar, interpretar e segmentar os dados encontrados, tranformando-os em recursos úteis para desenvolver uma solução transmitisse a identidade da marca e que traria valor para os clientes e para o negócio. </div>
                </div>
                <div className="max-w-screen-md mx-auto pb-20">
                    <div className="text-2xl font-medium tracking-wide text-center pb-6">O que eu melhoraria</div>
                    <div className="text-sm font-regular leading-loose text-justify pb-2">Gostaria de ter realizado mais testes ao desenvolver as funcionalidades da página, testado mais fluxos para identificar mais precisamente as possibilidades do usuário dentro da página.</div>
                    <div className="text-sm font-regular leading-loose text-justify">Para o próximo projeto, gostaria também de priorizar melhor os conteúdos antes do início da pesquisa. Utilizei muitas horas de pesquisa em conteúdos interessantes, porém que trariam pouco valor para o projeto em si.</div>
                </div>
                <hr className="solid max-w-screen-md mx-auto"></hr>

                <div className="text-sm font-medium tracking-wide text-center pt-20 pb-4">Bom, se você chegou até aqui eu estou MUITO feliz!
                </div>
                <div className="text-sm font-medium tracking-wide text-center pb-4"> Me dediquei muito a esse estudo e adorei ter compartilhado com você.
                </div>
                <div className="text-sm font-medium tracking-wide text-center pb-8"> Muito obrigada!
                </div>
                <div className="max-w-xs mx-auto">
                    <img src="/maria-rita-assinatura.png" />
                </div>
            </Fixed>
        </>
    )
}
