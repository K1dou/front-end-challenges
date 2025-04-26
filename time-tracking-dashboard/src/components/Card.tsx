

interface CardProps {
    type: keyof typeof cardData;
    current: number;
    previous: number;
    label: string;
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
export default function Card({ type, current, previous, label }: CardProps) {





    return (
        <div className={`md:w-[188px] md:h-[209px] relative  flex flex-col justify-end overflow-hidden   rounded-2xl h-[160px] w-[327px] ${cardData[type].bgColor} `}>

            <img className=' absolute right-0 -top-2 mr-4 ' src={cardData[type].image} alt="" />

            <div className='flex flex-col items-center z-10 px-6 bg-Navy-900 justify-center  rounded-t-2xl py-4   '>

                <div className='flex w-full justify-between '>


                    <p className='text-lg text-white '>{cardData[type].type}</p>
                    <button><img src="/icon-ellipsis.svg" alt="" /></button>
                </div>

                <div className='md:flex-col md:items-start flex w-full items-center justify-between'>
                    <p className='md:text-[56px] text-[32px] text-white font-light'>{current}hrs</p>
                    <p className='text-Navy-200 text-[15px]'>Last Week - {previous}hrs</p>

                </div>

            </div>

        </div>

    )
}