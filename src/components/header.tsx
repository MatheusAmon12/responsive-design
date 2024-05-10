import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const Header = () => {
    return ( 
        <header className="w-full px-6 flex justify-between items-center pt-6 pb-2 xl:pt-8 ">
            <h1 className="text-lg font-semibold font-sans md:text-lg xl:text-xl">Fusion</h1>
            <Sheet>
                <div className="xl:hidden">
                    <SheetTrigger className="cursor-pointer">
                        <Button size="icon" variant="ghost">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="w-[95vw]">
                        <SheetHeader>
                            <SheetTitle className="cursor-pointer text-left pb-4">
                                Fusion
                            </SheetTitle>
                        </SheetHeader>
                            <div className="font-serif">
                                <h4>Code Explorer (I'm here!)</h4>
                                <h4>Code Wizard</h4>
                                <h4>Code Sensi</h4>
                            </div>
                            <SheetFooter className="absolute bottom-4">
                                Projeto Voluntário
                            </SheetFooter>
                    </SheetContent>
                </div>
            </Sheet>

            <menu className="hidden xl:block">
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