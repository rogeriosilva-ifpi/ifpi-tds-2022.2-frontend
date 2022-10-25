interface HelloProps{
    name: string
    idade?: number
}

export function Hello(props: HelloProps){
    // corpo da funcao
    return (
        <h1>Hello {props.name}</h1>
    )
}