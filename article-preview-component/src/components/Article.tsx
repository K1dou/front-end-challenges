export default function Article() {




    return (

        <>
            <article className="rounded-md flex flex-col shadow-2xl bg-white mt-7 md:flex-row md:max-w-[608px] lg:max-w-[730px]">

                <figure>
                    <img
                        className="
                        lg:object-left
                        rounded-t-md md:rounded-t-none md:rounded-l-md md:w-full md:h-full object-cover"
                        src="/drawers.jpg" alt="" />
                </figure>

                <section className="flex flex-col gap-6 mt-8 mb-6 px-9 md:px-13 ">

                    <h2 className="text-very-dark-grayish-blue font-extrabold text-[20px] leading-tight">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>
                    <p className="font-medium text-desaturated-dark-blue text-[13px]">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you  make any room feel complete.</p>


                    <div className=" mt-12 md:mt-0 flex justify-between items-center" >
                        <div className=" flex gap-4">
                            <img className=" w-10 h-10 rounded-full" src="/avatar-michelle.jpg" alt="" />

                            <div>
                                <p className="font-bold text-[13px] text-very-dark-grayish-blue">Michelle appleton</p>
                                <p className="font-medium text-[13px] text-desaturated-dark-blue" >28 Jun 2020 </p>
                            </div>
                        </div>


                        <button><img className=" p-3 rounded-full bg-light-grayish-blue " src="/icon-share.svg" alt="" /></button>
                    </div>

                </section>

            </article>

        </>
    )

}