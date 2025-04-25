export default function SuccessPage() {
    return (

        <main >
            <div className="flex flex-col items-start justify-between h-[630px] mb-17 md:bg-white md:rounded-2xl md:py-16 md:px-16 md:w-[504px] md:h-[520px]  ">
                <div className="flex flex-col gap-8">
                    <img className="h-16 w-16" src="/icon-success.svg" alt="" />

                    <h1 className="text-4xl md:text-6xl font-bold text-neutral-blue-800  ">Thanks for subscribing!</h1>

                    <p className="text-neutral-blue-800 ">A confirmation email has been sent to <span className="font-bold"> ash@loremcompany.com. </span> Please open it and click the button inside to confirm your subscription</p>
                </div>

                <button className="cursor-pointer lg:hover:bg-gradient-to-r from-[#FF6A3A] to-[#FF527B]  text-white text-[16px] font-bold bg-neutral-blue-800 h-14 w-full rounded-lg mt-6" aria-label="botao dismiss">Dismiss message</button>

            </div>



        </main>
    );
}