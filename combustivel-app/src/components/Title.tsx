interface TitleProps{
    children: string
}

export function Title(props: TitleProps){
    return (
        <h1>{props.children}</h1>
    )
}