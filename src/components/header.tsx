import StructuredSheet from "./structured-sheet";
import { Button } from "./ui/button";

const Header = () => {
    return ( 
        <header className="w-full px-6 flex justify-between items-center pt-6 pb-2 xl:pt-8 ">
            <h1 className="text-lg font-semibold font-sans md:text-lg xl:text-xl">Fusion</h1>

            <StructuredSheet />

            <menu className="hidden xl:block font-serif">
                <ul className="xl:flex xl:items-center xl:justify-center xl:gap-4">
                    <li>
                        <Button variant="ghost" className="md:text-lg xl:text-xl">
                            Code Explorer
                        </Button>
                    </li>
                    <li>
                        <Button variant="ghost" className="md:text-lg xl:text-xl">
                            Code Wizard
                        </Button>
                    </li>
                    <li>
                        <Button variant="ghost" className="md:text-lg xl:text-xl">
                            Code Sensi
                        </Button>
                    </li>
                </ul>
            </menu>
        </header>
     );
}
 
export default Header;