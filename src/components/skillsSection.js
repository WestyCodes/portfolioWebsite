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
        <div id="mySkills" className="h-screen flex">
            <div className="h-3/4 w-3/4 grid m-auto shadow-xl rounded-md bg-slate-300">
                <div className="overflow-auto grid grid-cols-2 md:grid-cols-4 items-center justify-items-center">
                    <div className="transform transition duration-300 scale-50 lg:scale-100 hover:lg:scale-125 hover:scale-75 group">
                        <JSLogo className="lg:h-30 lg:w-30 shadow-xl rounded-full" />
                        <p className="invisible group-hover:visible">
                            Javascript
                        </p>
                    </div>
                    <div className="transform transition duration-300 scale-50 lg:scale-100 hover:lg:scale-125 hover:scale-75 group">
                        <PythonLogo className="shadow-xl rounded-full" />
                        <p className="invisible group-hover:visible">Python</p>
                    </div>
                    <div className="transform transition duration-300 scale-50 lg:scale-100 hover:lg:scale-125 hover:scale-75 group">
                        <RubyLogo className="shadow-xl rounded-full" />
                        <p className="invisible group-hover:visible">Ruby</p>
                    </div>
                    <div className="transform transition duration-300 scale-50 lg:scale-100 hover:lg:scale-125 hover:scale-75 group">
                        <ReactLogo className="shadow-xl rounded-full" />
                        <p className="invisible group-hover:visible">React</p>
                    </div>
                    <div className="transform transition duration-300 scale-50 lg:scale-100 hover:lg:scale-125 hover:scale-75 group">
                        <NodeJSLogo className="shadow-xl rounded-full" />
                        <p className="invisible group-hover:visible">NodeJS</p>
                    </div>
                    <div className="transform transition duration-300 scale-50 lg:scale-100 hover:lg:scale-125 hover:scale-75 group">
                        <HTML5Logo className="shadow-xl rounded-full" />
                        <p className="invisible group-hover:visible">HTML5</p>
                    </div>
                    <div className="transform transition duration-300 scale-50 lg:scale-100 hover:lg:scale-125 hover:scale-75 group">
                        <CSS3Logo className="shadow-xl rounded-full" />
                        <p className="invisible group-hover:visible">CSS3</p>
                    </div>
                    <div className="transform transition duration-300 scale-50 lg:scale-100 hover:lg:scale-125 hover:scale-75 group">
                        <TailwindLogo className="shadow-xl rounded-full" />
                        <p className="invisible group-hover:visible">
                            Tailwind CSS
                        </p>
                    </div>
                    <div className="transform transition duration-300 scale-50 lg:scale-100 hover:lg:scale-125 hover:scale-75 group">
                        <GithubLogo className="shadow-xl rounded-full" />
                        <p className="invisible group-hover:visible">GitHub</p>
                    </div>
                    <div className="transform transition duration-300 scale-50 lg:scale-100 hover:lg:scale-125 hover:scale-75 group">
                        <PostgresLogo className="shadow-xl rounded-full" />
                        <p className="invisible group-hover:visible">
                            PostgreSQL
                        </p>
                    </div>
                    <div className="transform transition duration-300 scale-50 lg:scale-100 hover:lg:scale-125 hover:scale-75 group">
                        <NpmLogo className="shadow-xl rounded-full" />
                        <p className="invisible group-hover:visible">NPM</p>
                    </div>
                    <div className="transform transition duration-300 scale-50 lg:scale-100 hover:lg:scale-125 hover:scale-75 group">
                        <DockerLogo className="shadow-xl rounded-full" />
                        <p className="invisible group-hover:visible">Docker</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
