// import { useNavigate, Link } from 'react-router-dom';
export default function Header() {
    // const navigate = useNavigate();

    return (
        <div className="px-10 md:px-32 flex items-center h-20 justify-around sticky top-0 bg-slate-300 w-screen shadow-xl z-50">
            <a
                href={'/'}
                className="hidden md:flex items-center justify-center"
            >
                <img className="h-20" src="./assets/westLogo.png" alt="" />
            </a>
            <nav className="font-semibold text-base lg:text-lg flex">
                <ul className="mx-auto flex items-center">
                    <li className="p-5 xl:p-8 active">
                        <a href="/#aboutMe">
                            <span>About</span>
                        </a>
                    </li>
                    <li className="p-5 xl:p-8">
                        <a href="/#mySkills">
                            <span>Skills</span>
                        </a>
                    </li>
                    <li className="p-5 xl:p-8">
                        <a href="/#myProjects">
                            <span>Projects</span>
                        </a>
                    </li>
                    <li className="p-5 xl:p-8">
                        <a href="/#contact">
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
