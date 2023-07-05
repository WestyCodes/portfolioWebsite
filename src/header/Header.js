import { useNavigate, Link } from 'react-router-dom';
export default function Header() {
    // const navigate = useNavigate();

    return (
        <div className="headerWrapper">
            <nav className="headerNav">
                <ul className="headerUL">
                    <li>
                        <Link className="headerLink" to={`/`}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="headerLink" to={`/prompts`}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link className="headerLink" to={`/saved`}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className="headerLink" to={`/saved`}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
