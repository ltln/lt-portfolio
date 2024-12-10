'use client';

import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "../ui/sheet";
import SidebarBody from "./Body";
import { DialogTitle } from "../ui/dialog";
import { useState } from "react";

export default function NavigationSidebar() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <div className="w-full min-[1000px]:hidden px-8 py-4 fixed z-10">
                <Menu size={32} onClick={() => setOpen(!open)} className="cursor-pointer" />
            </div>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent side="left" className="pt-24 max-md:w-full">
                    <DialogTitle></DialogTitle>
                    <SidebarBody />
                </SheetContent>
            </Sheet>
            <div className="px-4 py-20 bg-zinc-100 dark:bg-zinc-900 h-full min-w-64 max-[999px]:hidden z-10">
                <SidebarBody />
            </div>
        </>
    )
}