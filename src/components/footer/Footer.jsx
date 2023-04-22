function Footer() {
    return (
        <footer className="container mx-auto p-2 border-t border-white mt-5">
            <div className="flex text-center pt-2">
                <div className="flex-auto w-8">
                    <a className="font-bold text-lg text-white" href="/profile">Social Network</a>
                </div>
                <div className="flex-auto w-8">
                    <a className="font-bold text-lg text-white" href="/dialogs">Home</a>
                </div>
                <div className="flex-auto w-8">
                    <a className="font-bold text-lg text-white">About Us</a>
                </div>
                <div className="flex-auto w-8">
                    <a className="font-bold text-lg text-white">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer