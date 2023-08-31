import { ReactComponent as LinkedIn } from '../svgs/linkedIn.svg';
import { ReactComponent as Google } from '../svgs/google.svg';
import { ReactComponent as GitHub } from '../svgs/smallGitHub.svg';

export default function ContactSection() {
    return (
        <div id="contact" className="h-screen flex">
            <div className="h-3/5 w-3/4 grid grid-cols-3 m-auto shadow-xl rounded-md  bg-slate-300">
                <div className="pl-20 my-auto">
                    <div className="grid h-full gap-y-10">
                        <h1 className="text-3xl font-bold text-left tracking-wide">
                            Any{' '}
                            <span className="text-midnightBlue-100">
                                questions
                            </span>
                            , you can reach me here:
                        </h1>
                        <div className="grid grid-cols-3 gap-20">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/oliver-west-68401a66/"
                            >
                                <LinkedIn />
                            </a>
                            <a
                                href="#_"
                                title="Click to copy my email address to clipboard"
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        'oliversimon.west@gmail.com'
                                    );
                                    alert('email copied to clipboard');
                                }}
                            >
                                <Google />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/WestyCodes"
                            >
                                <GitHub />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 bg-contain bg-contact-picture bg-right bg-no-repeat"></div>
            </div>
        </div>
    );
}
