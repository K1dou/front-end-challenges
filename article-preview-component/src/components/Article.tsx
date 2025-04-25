import { useState } from "react"
import { IoMdShareAlt } from "react-icons/io";

export default function Article() {

    const [tooltipvisible, setTooltipVisible] = useState(false);



    return (


        <main>
            <article className="rounded-md flex flex-col shadow-2xl bg-white mt-7 md:flex-row md:max-w-[608px] lg:max-w-[730px]">

                <figure>
                    <img
                        className="
                        lg:object-left
                        rounded-t-md md:rounded-t-none md:rounded-l-md md:w-full md:h-full object-cover"
                        src="/drawers.jpg" alt="" />
                </figure>

                <section className="flex flex-col md:gap-6 mt-8 md:mb-6 px-9 md:px-8 ">

                    <h1 className="text-very-dark-grayish-blue font-extrabold text-[20px] leading-tight">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
                    <p className="font-medium mt-6 md:0 text-desaturated-dark-blue text-[13px]">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you  make any room feel complete.</p>



                    <div className="relative mt-7 md:mt-0 flex justify-between items-center transition-opacity duration-200 
                         " >



                        <div
                            className={`mt-3 md:mt-0 flex gap-4 mb-7 md:mb-0 transition-opacity duration-300 ${tooltipvisible ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto" : "opacity-100"
                                }`}
                        >
                            <img className="w-10 h-10 rounded-full" src="/avatar-michelle.jpg" alt="" />
                            <div>
                                <p className="font-bold text-[13px] text-very-dark-grayish-blue">Michelle appleton</p>
                                <p className="font-medium text-[13px] text-desaturated-dark-blue">28 Jun 2020</p>
                            </div>
                        </div>

                        <button
                            aria-label="botao share"
                            className={`p-2 rounded-full bg-light-grayish-blue mb-4 md:mb-0 transition-opacity duration-300 ${tooltipvisible ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto" : "opacity-100"
                                }`}
                            onClick={() => {
                                setTooltipVisible(!tooltipvisible);
                                console.log("teste");
                            }}

                        >
                            <IoMdShareAlt className="h-6 w-6 text-desaturated-dark-blue" />
                        </button>



                        <div className={`mb-[14px] absolute -mx-9 w-[calc(103%+4rem)] left-0 right-0  rounded-b-lg  mt-4 h-20 md:mt-0 flex  items-center justify-around gap-4 bg-very-dark-grayish-blue md:hidden ${!tooltipvisible ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto" : "opacity-100"}`}>


                            <div className=" flex gap-3 items-center">
                                <span className="uppercase tracking-widest text-sm text-grayish-blue">Share</span>
                                <img className="h-5 w-5"
                                    src="/icon-facebook.svg"
                                    alt="Facebook"
                                />
                                <img className="h-4 w-5"
                                    src="/icon-twitter.svg"
                                    alt="Twitter"
                                />
                                <img
                                    src="/icon-pinterest.svg"
                                    alt="Pinterest"
                                />
                            </div>

                            <button className={` mr-2 p-2 rounded-full bg-desaturated-dark-blue `} aria-label="botao share" onClick={() => {
                                setTooltipVisible(!tooltipvisible)
                            }}><IoMdShareAlt className={`h-6 w-6 text-white  ${tooltipvisible ? "text-white" : ""}`} /> </button>

                        </div>







                        <div
                            className={` md:absolute md:z-10 md:transition-all md:duration-200 ${tooltipvisible ? "md:flex md:justify-center md:shadow-2xl hidden" : "md:hidden hidden "
                                }  md:items-center md:gap-4 md:bg-very-dark-grayish-blue md:text-white md:px-6 md:py-3 md:w-[248px] md:h-[67px] md:rounded-xl md:-top-25 md:left-77  lg:left-95 md:transform md:-translate-x-1/2 md:shadow-lg `}
                        >
                            <span className="uppercase tracking-widest text-sm text-grayish-blue">Share</span>
                            <img className="h-5 w-5"
                                src="/icon-facebook.svg"
                                alt="Facebook"
                            />
                            <img className="h-4 w-5"
                                src="/icon-twitter.svg"
                                alt="Twitter"
                            />
                            <img
                                src="/icon-pinterest.svg"
                                alt="Pinterest"
                            />

                            <div
                                className="md:absolute md:h-0 md:w-0 md:border-x-15 md:border-very-dark-grayish-blue md:border-x-transparent md:border-t-[18px] md:border-b-s md:-bottom-4 md:left-1/2 md:transform -translate-x-1/2"
                            ></div>
                        </div>


                    </div>
                </section >


            </article >
        </main>


    )

}