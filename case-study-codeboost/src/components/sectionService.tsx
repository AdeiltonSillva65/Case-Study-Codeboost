import Container from "./container"
import Image from "next/image"

import PhoneIcon from '@/assets/icon-phone.svg'
import SoluctionsIcon from '@/assets/icon-solutions.svg'
import OptionsIcon from '@/assets/icon-options.svg'
import CardIcon from '@/assets/icon-card.svg'
import ImagePhone from '@/assets/phone.png'

const SectionService =()=>{
    return(
        <section className="w-full h-[965px] relative">
            <Container>
                <div className="flex-1 max-w-[594px] pt-32">
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9">serviços exclusivos</span>
                    <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa</h2>
                    <p className="text-lg max-w-[554px] mb-16 text-second-gray">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rapida e o melhor, no conforto de casa.</p>
                    <ul className="flex flex-col item-start gap-9">
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex item-center justify-center">
                                <Image
                                    src={PhoneIcon}
                                    alt="phone"
                                />
                            </div>
                            <p className="flex-1 text-txt-gray pr-2">Acompanhar sua conta, fazer transferências e pagamentos de onde estiver</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex item-center justify-center">
                                <Image
                                    src={SoluctionsIcon}
                                    alt="soluction"
                                />
                            </div>
                            <p className="flex-1 text-txt-gray pr-2">Soluções de emprestimos e renegociação para organizar suas finanças</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex item-center justify-center">
                                <Image
                                    src={OptionsIcon}
                                    alt="option"
                                />
                            </div>
                            <p className="flex-1 text-txt-gray pr-2">Diversas opções de investimentos, de acordo com o seu perfil de investidor</p>
                        </li>
                        <li className="flex items-center gap-9">
                            <div className="w-7 h-7 flex item-center justify-center">
                                <Image
                                    src={CardIcon}
                                    alt="card"
                                />
                            </div>
                            <p className="flex-1 text-txt-gray pr-2">Acompanhe a fatura do seu cartão de crédito e faça compras online com o seu cartão virtual</p>
                        </li>
                    </ul>
                </div>
            </Container>
            <div className="absolute top-0 right-0 h-full w-[32%] flex items-center bg-gray-phone">
                <Image src={ImagePhone} alt="phone" className="translate-x-[-50%]"/>
            </div>
        </section>
    );
}

export default SectionService;