import { ReactComponent as circleArrowDownLogo } from '../svgs/circleArrowDown.svg';

export default function MainSection() {
    return (
        <div id="aboutMe" className="h-screen flex">
            <div className="h-3/4 w-3/4 grid grid-cols-2 m-auto p-20 gap-x-10 shadow-xl rounded-md bg-slate-300 items-center">
                <div className="grid h-full items-center justify-center">
                    <img
                        className="rounded-full w-96 h-96 object-cover object-center shadow-xl border-solid border-4 border-midnightBlue-200"
                        src="https://cdn.discordapp.com/attachments/1039952875394187295/1130287216191623198/PXL_20230628_111246385.jpg"
                        alt=""
                    />
                </div>
                <div className="grid grid-rows-3 items-center gap-x-10">
                    <h1 className="text-4xl font-bold text-right tracking-wide">
                        Hi, I'm{' '}
                        <span className="text-midnightBlue-100">
                            Oliver West
                        </span>{' '}
                        and I am a Full-Stack Developer.
                    </h1>
                    <p className="text-right row-span-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    );
}
