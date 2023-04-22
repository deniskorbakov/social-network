function UserInfo() {
    return (
        <div className="container mx-auto mt-5 p-5 text-center flex">
            <div className="flex w-96 h-96">
                <img className="inline-block w-full h-full rounded shadow-lg" src="https://android-obzor.com/wp-content/uploads/2022/03/28e4ac42f547e6ac0f50f7cfa916ca93.jpg" alt=""/>
            </div>
            <div className="grow h-14">
                <div className="ml-11 pl-11">
                    <h2 className="font-bold text-left text-white text-3xl">Dmitry Korbakov</h2>
                    <div className="mt-11">
                        <p className="font-bold text-left text-white text-xl pb-1">Date of Birth: 2 january</p>
                        <p className="font-bold text-left text-white text-xl pb-1">City: Minsk</p>
                        <p className="font-bold text-left text-white text-xl pb-1">Education: BSU'11</p>
                        <p className="font-bold text-left text-white text-xl pb-1">Web Site: https://sweatyman.fun</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;