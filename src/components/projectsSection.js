import { ReactComponent as JSLogo } from '../svgs/js.svg';
import { ReactComponent as ReactLogo } from '../svgs/react.svg';
import { ReactComponent as NodeJSLogo } from '../svgs/nodeJS.svg';
import { ReactComponent as HTML5Logo } from '../svgs/html5.svg';
import { ReactComponent as CSS3Logo } from '../svgs/css3.svg';
import { ReactComponent as TailwindLogo } from '../svgs/tailwind.svg';
import { ReactComponent as PostgresLogo } from '../svgs/postgreSQL.svg';

import { useNavigate } from 'react-router-dom';

export default function ProjectSection() {
    const navigate = useNavigate();

    return (
        <div id="myProjects" className="h-screen flex">
            <div className="overflow-auto h-3/4 w-3/4 grid grid-cols-auto xl:grid-cols-2 m-auto p-2 sm:p-10 lg:p-20 gap-10 xl:gap-x-10 shadow-xl rounded-md bg-slate-300 ">
                <div
                    className="grid grid-rows-8 shadow-xl p-4 rounded-xl bg-slate-300 transform transition duration-300 hover:scale-110 cursor-pointer"
                    onClick={() => navigate('/caddyshack')}
                >
                    <div className="h-8">
                        <p className="text-2xl sm:text-3xl font-bold tracking-wide">
                            Caddie's Hack
                        </p>
                    </div>
                    <div className="row-span-4 grid items-center justify-center">
                        <img
                            className="rounded-xl h-60"
                            src="https://cdn.discordapp.com/attachments/1039952875394187295/1130462601860628520/image.png"
                            alt=""
                        />
                    </div>
                    <div className="row-span-2">
                        <p>A manual Golf Shot Tracker app and website.</p>
                    </div>
                    <div className="row-span-2 md:row-span-1 grid grid-cols-4 md:grid-cols-7">
                        <JSLogo className="h-16 w-16" />
                        <ReactLogo className="h-16 w-16" />
                        <NodeJSLogo className="h-16 w-16" />
                        <HTML5Logo className="h-16 w-16" />
                        <CSS3Logo className="h-16 w-16" />
                        <TailwindLogo className="h-16 w-16" />
                        <PostgresLogo className="h-16 w-16" />
                    </div>
                </div>
                <div
                    className="grid grid-rows-8 shadow-xl p-4 rounded-xl bg-slate-300 transform transition duration-300 hover:scale-110"
                    onClick={() => navigate('/dndprompt')}
                >
                    <div className="h-8">
                        <p className="text-2xl sm:text-3xl font-bold tracking-wide">
                            D&D Quest Prompt
                        </p>
                    </div>
                    <div className="row-span-4 grid items-center justify-center">
                        <img
                            className="rounded-xl h-60"
                            src="https://cdn.discordapp.com/attachments/1039952875394187295/1130462719204675635/image.png"
                            alt=""
                        />
                    </div>
                    <div className="row-span-2">
                        <p>
                            An automated writing prompt with over 8 septillion
                            permutations.
                        </p>
                    </div>
                    <div className="row-span-2 md:row-span-1 grid grid-cols-4 md:grid-cols-5">
                        <JSLogo className="h-16 w-16" />
                        <ReactLogo className="h-16 w-16" />
                        <NodeJSLogo className="h-16 w-16" />
                        <HTML5Logo className="h-16 w-16" />
                        <CSS3Logo className="h-16 w-16" />
                    </div>
                </div>
            </div>
        </div>
    );
}
