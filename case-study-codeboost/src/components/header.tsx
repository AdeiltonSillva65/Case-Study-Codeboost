import Image from "next/image"
import Logo from "@/assets/logo.svg"
import ItemMenu from "./ItemMenu";



const Header =()=>{
    return (
        <header className="flex items-center w-full h-20 bg-primary-orange">
            <div className="w-full max-w-[1246px] px-[15px] mx-auto">
                <div>
                    <div className="flex items-center gap-14">
                        <Image
                            src={Logo}
                            alt="logo"
                        />
                        <ul className="flex items-center gap-12">
                            <li>
                                <ItemMenu
                                    name="Para Você"
                                />
                            </li>
                            <li>
                                <ItemMenu
                                    name="Para Empresas"
                                />
                            </li>
                            <li>
                                <ItemMenu
                                    name="Serviços"
                                />
                            </li>
                            <li>
                                <ItemMenu
                                    name="Ajuda"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;