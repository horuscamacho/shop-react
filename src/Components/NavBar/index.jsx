import {NavLink} from "react-router-dom";

function NavBar(){
    const linksLeft = [
        { id: 1, path: "/", name: "Home"},
        { id: 2, path: "/all", name: "All"},
        { id: 3, path: "/clothes", name: "Clothes"},
        { id: 4, path: "/electronics", name: "Electronics"},
        { id: 5, path: "/fornitures", name: "Fornitures"},
        { id: 6, path: "/toys", name: "Toys"},
        { id: 7, path: "/others", name: "Others"}
    ]
    const linksRight = [
        { id: 8, path: "/my-orders", name: "My Orders"},
        { id: 9, path: "/my-account", name: "My Account"},
        { id: 10, path: "/sign-in", name: "Sign In"},
    ]
    const style = 'underline underline-offset-4'
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                {(linksLeft.map(link => {
                    return (
                        <li key={link.id} className={link.name === 'Home' ? 'font-semibold text-lg' : undefined}>
                            <NavLink
                                to={link.path}
                                className={({isActive}) => isActive ? style : ''}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    )
                }))}
            </ul>
            <ul className="flex items-center gap-3">
                <li>
                    test@test.com
                </li>
                {
                    (linksRight.map(link => {
                        return (
                            <li key={link.id}>
                                <NavLink
                                    to={link.path}
                                    className={({isActive}) => isActive ? style : ''}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        )
                    }))
                }
                <li>
                    🛒0
                </li>

            </ul>
        </nav>
    )
}

export {NavBar}