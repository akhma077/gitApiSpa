import { Link } from "react-router-dom";

export function Navigation(){

    return <nav className="flex justify-between items-center h-[80px] bg-gray-500 shadow-md text-white px-2 " >
        <h2 className="font-bold" >Github Search</h2>

        <span>
            <Link to='/' className="mr-2" >Home</Link>
            <Link to='/fav'>Favourites</Link>
        </span>
    </nav>
}