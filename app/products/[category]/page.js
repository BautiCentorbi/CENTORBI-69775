export async function generateMetadata({params,searchParams}, parent) {
    title: `Productos : ${params}`
}

const Productos = ({params}) => {
    return (
        <div>
            Estas viendo : {params.category}
        </div>
    )
}

export default Productos