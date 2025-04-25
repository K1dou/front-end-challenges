export default function LoginPage() {
    return (
        <main>

            <figure>

                <img className="w-screen" src="/illustration-sign-up-mobile.svg" alt="" />

            </figure>

            <article className="mt-10 px-6 ">

                <h1 className="font-bold text-[40px]  text-neutral-blue-800">Stay updated!</h1>
                <p className="mt-6">Join 60,000+ product managers receiving monthly updates on:</p>


                <div className="mt-6 flex flex-col gap-2">
                    <div className="flex gap-4 items-start">
                        <img src="/icon-list.svg" alt="" />
                        <p>Product discovery and building what matters</p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <img src="/icon-list.svg" alt="" />
                        <p>Measuring to ensure updates are a success</p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <img src="/icon-list.svg" alt="" />
                        <p>And much more!</p>
                    </div>
                </div>



                <div className="mt-10 font-bold text-[12px]">
                    <p className="text-neutral-blue-800  mb-1">Email address</p>
                    <input placeholder="email@company.com" className="focus:outline-none pl-6 text-[16px] font-normal text-neutral-blue-800 placeholder:text-neutral-grey placeholder:text-[16px] placeholder:font-normal placeholder:pl-6 border bg-white h-14 w-full rounded-lg " ></input>
                    <button className="text-white text-[16px] font-bold bg-neutral-blue-800 h-14 w-full rounded-lg mt-6">Subscribe to monthly newsletter</button>


                </div>

            </article>



        </main>



    )
}