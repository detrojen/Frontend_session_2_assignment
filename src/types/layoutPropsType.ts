import type { ReactNode } from "react";

export type TLayoutProps = {
    children: ReactNode,
    setAddProductFormRoute: ()=>void,
    setProductListRoute:()=>void
}