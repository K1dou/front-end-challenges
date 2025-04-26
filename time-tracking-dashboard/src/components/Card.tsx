

interface CardProps {
    type: keyof typeof cardData;
    current: number;
    previous: number;
}

const cardData = {
    work: {
        image: "/icon-work.svg",
        bgColor: "bg-Orange-300",
        type: "Work",
    },
    play: {
        image: "/icon-play.svg",
        bgColor: "bg-Blue-300",
        type: "Play",
    },
    study: {
        image: "/icon-study.svg",
        bgColor: "bg-Pink-400",
        type: "Study",
    },
    exercise: {
        image: "/icon-exercise.svg",
        bgColor: "bg-Green-400",
        type: "Exercise",
    },
    social: {
        image: "/icon-social.svg",
        bgColor: "bg-Purple-700",
        type: "Social",
    },
    selfCare: {
        image: "/icon-self-care.svg",
        bgColor: "bg-Yellow-300",
        type: "Self Care",
    },
} as const;
export default function Card({ type, current, previous }: CardProps) {





    return (
        <div className={`pai lg:w-[255px] lg:h-full  md:w-[188px] md:h-[209px] relative z-0  flex flex-col justify-end 	 rounded-b-3xl  rounded-t-2xl h-[160px] w-[327px] ${cardData[type].bgColor} `}>

            <img
                src={cardData[type].image}
                alt=""
                className="absolute right-4 top-[-12px] z-10"
                style={{ clipPath: "inset(12px 0 0 0)" }}
            />




            <div className='filho lg:hover:bg-Purple-500 lg:hover:transition z-40 flex lg:h-[83%] flex-col items-center  px-6 bg-Navy-900 justify-center  rounded-2xl py-4   '>

                <div className='flex w-full justify-between '>
                    <p className='text-lg text-white '>{cardData[type].type}</p>
                    <button aria-label="button options"><img src="/icon-ellipsis.svg" alt="" /></button>
                </div>

                <div className='md:flex-col md:items-start flex w-full items-center justify-between'>
                    <p
                        style={{
                            fontSize: "clamp(32px, 8vw, 53px)",
                        }}
                        className="text-white font-light leading-tight max-w-full"
                    >
                        {current}hrs
                    </p>
                    <p className='text-Navy-200 text-[15px]'>Last Week - {previous}hrs</p>

                </div>

            </div>

        </div>

    )
}