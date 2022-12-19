import { useState } from "react"
import TheFooter from "./template/TheFooter"
import TheHeader from "./template/TheHeader"
import TheNavbar from "./template/TheNavbar"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import ClientSayBox from "./common/ClientSayBox";

interface ClientSayType {
    image: string,
    fullName: string,
    job: string,
    comment: string
}

const TheTestimonial = () => {

    const [clientSay, setClientSay] = useState<ClientSayType[]>([
        {
            image: "assets/img/testimonial-1.jpg",
            fullName: "Yaser Sharifi",
            job: "Programmer",
            comment: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita"
        },
        {
            image: "assets/img/testimonial-2.jpg",
            fullName: "Yaser Sharifi",
            job: "Programmer",
            comment: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita"
        },
        {
            image: "assets/img/testimonial-3.jpg",
            fullName: "Yaser Sharifi",
            job: "Programmer",
            comment: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita"
        },
        {
            image: "assets/img/testimonial-4.jpg",
            fullName: "Yaser Sharifi",
            job: "Programmer",
            comment: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita"
        },
        {
            image: "assets/img/testimonial-1.jpg",
            fullName: "Yaser Sharifi",
            job: "Programmer",
            comment: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita"
        },
    ])


    return (
        <>
            <TheNavbar />
            <TheHeader />
            {/* Testimonial Start */}
            <div className="container-fluid py-5">
                <div className="container">
                <div className="section-title">
                    <h4
                    className="text-primary text-uppercase"
                    style={{ letterSpacing: 5 }}
                    >
                    Testimonial
                    </h4>
                    <h1 className="display-4">Our Clients Say</h1>
                </div>
                    <Splide
                        aria-label="Our Clients Say"
                        options={{
                            rewind: true,
                            perPage: 3,
                            perMove: 1,
                            arrows: false,
                            pagination: false
                        }}
                    >
                        
                        {
                            clientSay.map((item: ClientSayType, index: number) => {
                                return (
                                    <SplideSlide
                                        key={`slider-${index}`}
                                    >
                                        <ClientSayBox 
                                            {...item}
                                        />
                                    </SplideSlide>
                                )
                            })
                        }                        
                    </Splide>
                </div>
            </div>
            {/* Testimonial End */}
            <TheFooter />
        </>
    )
}

export default TheTestimonial;