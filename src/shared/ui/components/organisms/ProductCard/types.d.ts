export type TProductProps = {
    onChange: (value: number) => void
    data: {
        id: number
        name: string
        price: number
        path_image: string
    }
}
