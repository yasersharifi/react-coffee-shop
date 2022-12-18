import { Link } from "react-router-dom";

interface MenuItemsType {
    title: string,
    url: string
}

const menuItems: MenuItemsType[] = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "About",
        url: "/about"
    },
    {
        title: "Service",
        url: "/service"
    },
    {
        title: "Reservation",
        url: "/reservation"
    },
    {
        title: "Testimonial",
        url: "/testimonial"
    },
    {
        title: "Contact",
        url: "/contact"
    },
]

const TheNavbar = () => {
    return (
        <>
            {/* Navbar Start */}
            <div className="container-fluid p-0 nav-bar">
                <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
                <a href="index.html" className="navbar-brand px-lg-4 m-0">
                    <h1 className="m-0 display-4 text-uppercase text-white">KOPPEE</h1>
                </a>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarCollapse"
                >
                    <div className="navbar-nav ml-auto p-4">
                        {
                            menuItems.map((menu: MenuItemsType) => {
                                return (
                                    <Link 
                                        to={menu.url} 
                                        className="nav-item nav-link active"
                                    >
                                        { menu.title }
                                    </Link>
                                )
                            })
                        }
                    {/* <div className="nav-item dropdown">
                        <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        >
                        Pages
                        </a>
                        <div className="dropdown-menu text-capitalize">
                        <a href="reservation.html" className="dropdown-item">
                            Reservation
                        </a>
                        <a href="testimonial.html" className="dropdown-item">
                            Testimonial
                        </a>
                        </div>
                    </div> */}
                    </div>
                </div>
                </nav>
            </div>
            {/* Navbar End */}
        </>
    )
}

export default TheNavbar;