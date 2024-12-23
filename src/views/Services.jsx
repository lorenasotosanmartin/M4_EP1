import DoctorCard from '../components/DoctorCard';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Services() {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const loadDoctors = async () => {
            const doctors = await axios.get("/src/data/doctors.json");
            setDoctors(doctors.data.doctors);
        }
        loadDoctors();
    }, []);

    console.log("data ", doctors)

    if (doctors.length === 0) {
        return (<h1>loading</h1>)
    }

    return (
        <main>
            <section className="section_primary py-5" tabIndex="0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h1 className="mb-4">Excelencia profesional</h1>
                            <p className="text-body-secondary">Nuestra clínica está comprometida con brindar un
                                servicio de calidad a
                                nuestro pacientes, es por esto, que contamos con una amplia gama de profesionales
                                capacitados y
                                dispuestos a brindar la mejor atención a cada uno de nuestros pacientes</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cards my-5" tabIndex="0">
                <div className="container">
                    <h2 className="mb-5">Conoce a nuestro equipo de profesionales</h2>
                    <div className="row">
                        {doctors.map((doctor, index) => (
                            <div className='col-md-6 col-lg-3' key={index} >
                                <DoctorCard  key={index} doctor={doctor} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}