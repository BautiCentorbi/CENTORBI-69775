'use client'
import ItemListContainer from "@/app/components/ui/ItemListContainer/ItemListContainer"
import { useParams } from "next/navigation"

const Productos = ({params}) => {
    const { categoryId } = useParams()
    return (
        <div>
            <ItemListContainer tittle={params.category}/>
        </div>
    )
}

export default Productos