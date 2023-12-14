import { ReactComponent as JSLogo } from '../svgs/js.svg';
import { ReactComponent as ReactLogo } from '../svgs/react.svg';
import { ReactComponent as NodeJSLogo } from '../svgs/nodeJS.svg';
import { ReactComponent as HTML5Logo } from '../svgs/html5.svg';
import { ReactComponent as CSS3Logo } from '../svgs/css3.svg';

export default function DndPromptPage() {
    return (
        <section className="font-semibold text-base lg:text-lg bg-endless-picture">
            <div className="h-min lg:h-screen flex">
                <div className="h-min lg:h-3/4 w-3/4 grid grid-cols-1 lg:grid-cols-2 my-5 lg:m-auto p-5 gap-x-10 shadow-xl rounded-md bg-slate-300 items-center">
                    <div className="grid h-full items-center justify-center">
                        <img
                            className="rounded-xl object-cover object-center"
                            src="https://cdn.discordapp.com/attachments/1039952875394187295/1130462719204675635/image.png"
                            alt=""
                        />
                        <div className="overflow-auto row-span-1 grid grid-cols-5 my-auto">
                            <JSLogo className="h-24 w-24" />
                            <ReactLogo className="h-24 w-24" />
                            <NodeJSLogo className="h-24 w-24" />
                            <HTML5Logo className="h-24 w-24" />
                            <CSS3Logo className="h-24 w-24" />
                        </div>
                    </div>
                    <div className="grid grid-rows-auto gap-y-5">
                        <h1 className="text-4xl font-bold text-left tracking-wide">
                            A Quest Generator for{' '}
                            <span className="text-midnightBlue-100">
                                Dungeon's & Dragons
                            </span>{' '}
                            or any other Tabletop RPG!
                        </h1>
                        <div className="text-left row-span-2">
                            <p className="mb-5">
                                React based web application, using HTML, CSS,
                                JS, NodeJS, JSON. The app randomly generates a
                                paragraph of text used as inspiration for
                                creative writing and/or for Dungeon Masters to
                                create entire quests with a click of a button.
                            </p>
                            <ul className="list-disc">
                                <li>
                                    Used virtual DOM Concepts such as
                                    Conditional Rendering, React Hooks, and
                                    Render Props
                                </li>
                                <li>
                                    Automatically generates a unique writing
                                    prompt with over 8 septillion permutations
                                </li>
                                <li>Custom API and Data Structures</li>
                                <li>
                                    Built with scalability in mind, with future
                                    implementations on the way
                                </li>
                            </ul>
                        </div>
                        <a
                            href="https://dnd-quest-hook.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-auto w-40 relative rounded-full px-5 py-2.5 overflow-hidden group bg-midnightBlue-200 relative hover:bg-gradient-to-r hover:from-midnightBlue-200 hover:to-midnightBlue-100 text-white hover:ring-2 hover:ring-offset-2 hover:ring-midnightBlue-100 transition-all ease-out duration-300"
                        >
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative font-semibold text-xl grid grid-col-1 justify-items-center">
                                Visit site
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
