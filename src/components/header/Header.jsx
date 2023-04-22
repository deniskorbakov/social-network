function Header() {
    return (
        <header className="container mx-auto p-2 border-neutral-800 mb-5 pb-5">
            <div className="flex justify-between pt-10">
                <div className="">
                    <img className="rounded-full w-16" src="https://webmg.ru/wp-content/uploads/2022/10/i-13-122.jpeg" alt=""/>
                </div>

                <div className="bg-cyan-500 border-2 rounded-full px-4 shadow-lg shadow-cyan-500/50">
                    <h3 className="font-bold text-3xl pt-2 uppercase text-white">social network</h3>
                </div>
            </div>
        </header>
    );
}

export default Header;