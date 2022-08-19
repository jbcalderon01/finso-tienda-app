export type TProductProps = {
    onChange: (value: number) => void
    data: {
        id: number
        name: string
        price: number
        quantity: number
        path_image: string
    }
}
