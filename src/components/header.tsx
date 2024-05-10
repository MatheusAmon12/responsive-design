import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const Header = () => {
    return ( 
        <header className="w-full px-6 flex justify-between items-center pt-6">
            <h1 className="text-lg font-semibold font-sans">Fusion</h1>
            <Sheet>
                <SheetTrigger className="cursor-pointer">
                    <Button size="icon" variant="ghost">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-[95vw]">
                    <SheetHeader>
                        <SheetTitle className="cursor-pointer text-left">
                            Fusion
                        </SheetTitle>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </header>
     );
}
 
export default Header;