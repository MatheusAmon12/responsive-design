import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

const StructuredSheet = () => {
    return ( 
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
     );
}
 
export default StructuredSheet;