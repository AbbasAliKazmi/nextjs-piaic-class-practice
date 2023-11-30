import logo from './logo.svg';

export default function Navbar() {
    return (
        <nav className="navbar flex flex-wrap p-3 bg-slate-300 m-5 rounded-full justify-between">
            <div className="navbar__logo align-middle">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar__menu">
                <ul className="flex gap-x-10  menu-item text-2xl font-bold">
                    <button className="bg-slate-400 p-3 rounded-full">Products</button>
                    <button className="bg-slate-400 p-3 rounded-full">Home</button>
                    <button className="bg-slate-400 p-3 rounded-full">Services</button>
                    <button className="bg-slate-400 p-3 rounded-full">Contact</button>
                </ul>
            </div>
            <div className="navbar__search flex">
                <input
                    type="text"
                    placeholder="Search Bar"
                    className="bg-slate-400 p-3 rounded-full"
                />
            </div>
        </nav>
    );
}
