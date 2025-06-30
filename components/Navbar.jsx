import Link from "next/link";

const links  = [
    {href: '/', label: 'Home'},
    {href: '/about', label: 'About'},
    {href: '/product', label: 'Product'},
    {href: '/client', label: 'Client'},
    {href: '/drinks', label: 'Drinks'},
    {href: '/prisma', label: 'Prisma'},
    {href: '/query', label: 'Query'},
    {href: '/tasks', label: 'Tasks'},
]

const Navbar = () => {
    return (
        <nav className="navbar bg-base-300 px-8 py-20 max-w-6xl mx-auto ">
            <ul className="menu menu-horizontal flex gap-4 max-width flex-row">
                {links.map(({href, label}) =>(
                    <li key={href}>
                        <Link href={href}>{label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;