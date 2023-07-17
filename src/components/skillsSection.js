import { ReactComponent as JSLogo } from '../svgs/js.svg';
import { ReactComponent as ReactLogo } from '../svgs/react.svg';
import { ReactComponent as NodeJSLogo } from '../svgs/nodeJS.svg';
import { ReactComponent as HTML5Logo } from '../svgs/html5.svg';
import { ReactComponent as CSS3Logo } from '../svgs/css3.svg';
import { ReactComponent as TailwindLogo } from '../svgs/tailwind.svg';
import { ReactComponent as GithubLogo } from '../svgs/github.svg';
import { ReactComponent as PythonLogo } from '../svgs/python.svg';
import { ReactComponent as RubyLogo } from '../svgs/ruby.svg';
import { ReactComponent as PostgresLogo } from '../svgs/postgreSQL.svg';
import { ReactComponent as NpmLogo } from '../svgs/npm.svg';
import { ReactComponent as DockerLogo } from '../svgs/docker.svg';

export default function SkillsSection() {
    return (
        <div className="h-screen flex">
            <div className="h-3/4 w-3/4 grid mx-auto p-10 gap-x-10 shadow-xl rounded-md bg-slate-300">
                <div className="grid grid-cols-4 items-center gap-5">
                    <div className="mx-auto transform transition duration-300 hover:scale-125">
                        <JSLogo className="shadow-xl rounded-full" />
                    </div>
                    <div className="mx-auto transform transition duration-300 hover:scale-125">
                        <PythonLogo className="shadow-xl rounded-full" />
                    </div>
                    <div className="mx-auto transform transition duration-300 hover:scale-125">
                        <RubyLogo className="shadow-xl rounded-full" />
                    </div>
                    <div className="mx-auto transform transition duration-300 hover:scale-125">
                        <ReactLogo className="shadow-xl rounded-full" />
                    </div>
                    <div className="mx-auto transform transition duration-300 hover:scale-125">
                        <NodeJSLogo className="shadow-xl rounded-full" />
                    </div>
                    <div className="mx-auto transform transition duration-300 hover:scale-125">
                        <HTML5Logo className="shadow-xl rounded-full" />
                    </div>
                    <div className="mx-auto transform transition duration-300 hover:scale-125">
                        <CSS3Logo className="shadow-xl rounded-full" />
                    </div>
                    <div className="mx-auto transform transition duration-300 hover:scale-125">
                        <TailwindLogo className="shadow-xl rounded-full" />
                    </div>
                    <div className="mx-auto transform transition duration-300 hover:scale-125">
                        <GithubLogo className="shadow-xl rounded-full" />
                    </div>
                    <div className="mx-auto transform transition duration-300 hover:scale-125">
                        <PostgresLogo className="shadow-xl rounded-full" />
                    </div>
                    <div className="mx-auto transform transition duration-300 hover:scale-125">
                        <NpmLogo className="shadow-xl rounded-full" />
                    </div>
                    <div className="mx-auto transform transition duration-300 hover:scale-125">
                        <DockerLogo className="shadow-xl rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
