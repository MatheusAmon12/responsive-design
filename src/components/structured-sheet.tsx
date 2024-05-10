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
                        <div className="font-serif flex items-start flex-col gap-4">
                            <Button size="sm" variant="ghost" className="cursor-pointer">
                                Code Explorer
                            </Button>
                            <Button size="sm" variant="ghost" className="cursor-pointer">
                                Code Wizard
                            </Button>
                            <Button size="sm" variant="ghost" className="cursor-pointer">
                                Code Sensi
                            </Button>
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