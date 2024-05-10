import Header from "@/components/header";
import { ReactNode } from "react";

const TemplateDefault = ({ children }: {children: ReactNode}) => {
    return ( 
        <>
            <Header />
            <main>
                { children }
            </main>
        </>
     );
}
 
export default TemplateDefault;