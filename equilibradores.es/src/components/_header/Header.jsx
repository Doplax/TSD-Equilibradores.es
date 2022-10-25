import "./Header.css"


export default function Header(prop){
    return(
        <div className="header">
            <figure>
                <img className="logo_image" src="https://equilibradores.es/assets/images/tecsolda-logo-300x62.png" alt="logo de la empresa"></img>
            </figure>
                <ul className="menu">
                    <li><a href="www">Inicio</a></li>
                    <li><a href="www">Equilibradores</a></li>
                    <li><a href="www">Equilibradores Industriales</a></li>
                    <li><a href="www">Noticias</a></li>
                </ul>
        </div>
    )

}