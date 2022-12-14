import logo from '../../logo.svg';

export default function Header() {
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-6 sm:h-9"
                             alt="logo"/>
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Simple Mailer</span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <a href="https://github.com/blacksoulgem95/mailer" target="_blank"
                           className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">GitHub</a>
                        <a href="https://ko-fi.com/blacksoulgem95" target="_blank"
                           className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Donate</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}