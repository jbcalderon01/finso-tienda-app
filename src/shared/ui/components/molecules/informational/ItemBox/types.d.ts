export type TItemBoxProps = {
    onDelete: () => void
    data: {
        id: number
        name: string
        price: number
        quantity: number
    }
}
