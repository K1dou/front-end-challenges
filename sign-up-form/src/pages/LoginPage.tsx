import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';



export default function LoginPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "" });
    const [errors, setErrors] = useState<{ email?: string }>({});
    const [touched, setTouched] = useState<{ email?: boolean }>({});



    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        console.log("Form data:", formData.email);
    }

    function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
        const { name } = e.target;
        setTouched({ ...touched, [name]: true });



    }

    function validate(): { email?: string } {
        const newErrors: { email?: string } = {};

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Valid email required.";
        }

        return newErrors;
    }
    function inputClass(error?: string, touched?: boolean): string {
        return `
          w-full p-4 rounded-md border
          ${error && touched ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"}
          focus:outline-none focus:ring-2
          ${error && touched ? "focus:ring-red-500" : "focus:ring-primary-red"}
        `;
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            emailjs
                .sendForm(
                    'service_skz5e0g',
                    'template_6o1jbrb',
                    e.currentTarget,
                    'Rg9mCrcbFWwhbB6A6'
                )
                .then(() => {
                    console.log("Email enviado com sucesso!");
                    navigate("/success");
                })
                .catch((error) => {
                    console.error("Erro ao enviar email:", error);
                    alert("Erro ao enviar email.");
                });
            navigate("/success");
        }
        else {
            console.log("Erro de validação:", validationErrors);
        }




    }
    return (



        <main className="lg:flex lg:flex-row-reverse lg:gap-16 md:h-[925px] md:w-[608px] lg:h-[640px] lg:w-[904px] md:bg-white md:py-10 md:px-10 md:rounded-3xl">

            <figure
            >
                <picture>
                    <source srcSet="/illustration-sign-up-desktop.svg" media="(min-width: 1024px)" />


                    <img className="w-screen md:rounded-t-3xl lg:h-full  lg:w-[400px]" src="/illustration-sign-up-mobile.svg" alt="" />
                </picture>
            </figure>

            <article className="mt-10 px-6 lg:pr-6 lg:pl-0  ">

                <h1 className="font-bold text-[40px]  text-neutral-blue-800">Stay updated!</h1>
                <p className="mt-6">Join 60,000+ product managers receiving monthly updates on:</p>


                <div className="mt-6 flex flex-col gap-2">
                    <div className="flex gap-4 items-start">
                        <img src="/icon-list.svg" alt="" />
                        <p>Product discovery and building what <br className="md:hidden" /> matters</p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <img src="/icon-list.svg" alt="" />
                        <p>Measuring to ensure updates are a <br className="md:hidden" /> success</p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <img src="/icon-list.svg" alt="" />
                        <p>And much more!</p>
                    </div>
                </div>




                <form name="email" action="https://formsubmit.co/hique1276@gmail.com" method="POST" onSubmit={(e) => handleSubmit(e)}>
                    <div className="mt-10 md:mt-6 font-bold text-[12px]">
                        <input type="hidden" name="message" value="Nova inscrição para a newsletter mensal!" />

                        <div className="relative mb-1">
                            <label htmlFor="email" className="text-neutral-blue-800  mb-1">Email address</label>

                            {errors.email && (<>
                                <p className="absolute text-primary-red text-[12px]  top-0 mr-1 right-0 font-bold">{errors.email}</p>

                            </>)}
                        </div>

                        <input onBlur={handleBlur} onChange={(e) => handleChange(e)} id="email" placeholder="email@company.com" className={`focus:outline-none pl-6 text-[16px] font-normal text-neutral-blue-800 placeholder:text-neutral-grey placeholder:text-[16px] placeholder:font-normal placeholder:pl-6 border  h-14 w-full rounded-lg ${errors.email ? "bg-[#FFE7E6] border-primary-red text-primary-red" : "bg-white text-neutral-blue-800"}`} ></input>

                        <button type="submit" className="lg:hover:bg-gradient-to-r from-[#FF6A3A] to-[#FF527B] text-white text-[16px] font-bold bg-neutral-blue-800 h-14 w-full rounded-lg mt-6">Subscribe to monthly newsletter</button>
                    </div>
                </form>

            </article>



        </main >



    )
}