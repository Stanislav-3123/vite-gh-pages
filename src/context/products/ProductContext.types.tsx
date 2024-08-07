
export interface ChildrenPropsType {
    children: React.ReactNode
}
export type ProductType = {
    id: number
    to: string
    title: string
    description: string
    img: string
    SKU: string
    document: string
    category: string
    usage: string
    effective: string
    details: { id: number, title: string, text: string }[]
    form: string
}
export type ProductContextType = {
    allProducts: ProductType[]
    handleSetAllProducts: () => void
    selectedProduct: ProductType
    handleSetSelectedProduct: (productId: number) => void
}