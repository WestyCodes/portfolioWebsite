// import { useNavigate, Link } from 'react-router-dom';
export default function Header() {
    // const navigate = useNavigate();

    return (
        <div className="px-32 flex items-center h-20 justify-between sticky top-0 bg-slate-300 w-screen shadow-xl">
            <a href={'/'} className="flex items-center justify-center">
                <img
                    className="h-20"
                    src="https://cdn.discordapp.com/attachments/1039952875394187295/1126492552577695744/celtic_west_logo_v2.png"
                    alt=""
                />
            </a>
            <nav className="font-semibold text-base lg:text-lg flex">
                <ul className="mx-auto flex items-center">
                    <li className="p-5 xl:p-8 active">
                        <a href="_#">
                            <span>About</span>
                        </a>
                    </li>
                    <li className="p-5 xl:p-8">
                        <a href="_#">
                            <span>Skills</span>
                        </a>
                    </li>
                    <li className="p-5 xl:p-8">
                        <a href="_#">
                            <span>Projects</span>
                        </a>
                    </li>
                    <li className="p-5 xl:p-8">
                        <a href="_#">
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
