type NavElement = {
    elementos: string[]
}

export default function Menu({elementos} : NavElement){
    return(
        <nav>
            {elementos.map(ele =>(
                <li>{ele}</li>
            ))}
        </nav>
    )
}