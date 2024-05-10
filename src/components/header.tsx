import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const Header = () => {
    return ( 
        <header>
            <h1>Fusion</h1>
            <Sheet>
                <SheetTrigger>
                    <Button>
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>
                            Fusion
                        </SheetTitle>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </header>
     );
}
 
export default Header;