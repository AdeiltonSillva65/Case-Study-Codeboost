import { ReactNode } from "react";

type Props = {
    children: ReactNode; //para funcionar 
}

const Container = ({children}: Props) =>{ // filhos para funcionar em outros componentes
    return (
        <div className=" flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
            {children}
        </div>
    );
}

export default Container; 