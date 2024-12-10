'use client';

import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "../ui/sheet";
import SidebarBody from "./Body";
import { DialogTitle } from "../ui/dialog";
import { useState } from "react";
import ThemeToggle from "../ThemeToggle";

export default function NavigationSidebar() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <div className="w-full min-[1024px]:hidden px-8 py-4 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10 flex justify-between items-center">
                <Menu size={32} onClick={() => setOpen(!open)} className="cursor-pointer" />
                <ThemeToggle />
            </div>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent side="left" className="pt-24 max-md:w-full">
                    <DialogTitle></DialogTitle>
                    <SidebarBody />
                </SheetContent>
            </Sheet>
            <div className="px-4 py-20 bg-zinc-100 dark:bg-zinc-900 min-h-[700px] h-screen min-w-64 max-[1023px]:hidden z-10 sticky top-0">
                <SidebarBody />
            </div>
        </>
    )
}