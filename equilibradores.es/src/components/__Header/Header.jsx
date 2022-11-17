// TUTORIAL: https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-navigation-bar-with-flexbox--cms-33535
import "./Header.css"


export default function Header(prop){
    
    // const toggle = document.getElementsByClassName("toggle");
    // const menu = document.getElementsByClassName("menu");

    // // Toggle Mobile Menu
    // function toggleMenu() {
    //     if (menu.classList.contains("active")){
    //         menu.classList.remove("active");

    //         // adds the menu (hamburger) icon
    //         toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>"
    //     } else {
    //         menu.classList.add("active");

    //         // Adds the close (x) icon
    //         toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>"
    //     }
    // }

    // toggle.addEventListener("click",toggleMenu, false)






    return(
        <nav>
            <ul className="menu">
                <li className="logo"><a href="w">Creative Mind </a> </li>
                <li className="item"><a href="w">Home </a> </li>
                <li className="item"><a href="w">About</a> </li>
                <li className="item has-sub-menu">
                    <a tabIndex={0}>Services</a>
                    <ul className="sub-menu">
                        <li className="sub-item"> <a href="w">Design</a></li>
                        <li className="sub-item"> <a href="w">Development</a></li>
                        <li className="sub-item"> <a href="w">SEO</a></li>
                        <li className="sub-item"> <a href="w">Copywriting</a></li>
                    </ul>
                </li>
                <li className="item has-sub-menu">
                    <a tabIndex={0}>Plans</a>
                    <ul className="sub-menu">
                        <li className="sub-item"><a href="w"> Freelancer</a></li>
                        <li className="sub-item"><a href="w"> Startup</a></li>
                        <li className="sub-item"><a href="w"> Enterprise</a></li>
                    </ul>
                </li>
                <li className="item"> <a href="w"> Blog </a></li>
                <li className="item"> <a href="w"> Contact </a></li>
                <li className="item button"> <a href="w"> Log In </a></li>
                <li className="item button secondary"> <a href="w"> Sing Up </a></li>
                <li className="toggle"> <a href="w"> <i className="fas fa-bars"></i> </a></li>
            </ul>
        </nav>
    )

}