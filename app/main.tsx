import React, { useEffect } from "react";
import { useMenuItemActions } from "@core/lib/menu-store";
import { FileTextIcon } from "lucide-react";

export default function Main({ children }: { children: React.ReactNode }) {

    const { registerMenuItem } = useMenuItemActions();
    
    useEffect(() => {
        registerMenuItem({
            id: 'main.template',
            title: "Template",
            icon: FileTextIcon,
            href: "/template",
        });

    }, [registerMenuItem]);

    return children;
}
