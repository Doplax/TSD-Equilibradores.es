import "./Header.css";


export default function Header(prop){
    return(
        <header className="header">
            <figure className="header__logo">
                <img  src="https://equilibradores.es/assets/images/tecsolda-logo-300x62.png" alt="logo de la empresa"></img>
            </figure>
            <ul className="header__menu">
                <li><a href="www">Inicio</a></li>
                <li><a href="www">Equilibradores</a></li>
                <li><a href="www">Equilibradores Industriales</a></li>
                <li><a href="www">Noticias</a></li>
            </ul>
        </header>
    )

}