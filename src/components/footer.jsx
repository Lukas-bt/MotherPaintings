import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <footer className="bg-gray-900 text-white bottom-0 py-10 mt-auto">
            <ul className="text-center font-bold">
                <li key={undefined} className="">
                    <Link to='/'>Menu</Link>
                </li>
                <li key={undefined}>
                    <Link to='/'>Contact</Link>
                </li>
            </ul>
            <a className="mt-3 block text-center" href="https://github.com/AtsukaDev">© Copyright 2025 - Shift</a>
        </footer>
    );
}