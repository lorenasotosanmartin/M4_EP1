import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

export default function Register() {


    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const loadAppointments = async () => {
            const appointments = await axios.get("/src/data/appointment.json");
            setAppointments(appointments.data.appointments);
        }
        loadAppointments();
    }, []);

    console.log("citas ", appointments)

    if (appointments.length === 0) {
        return (<h1>loading</h1>)
    }

    



    return (
        <main>
            <section>
                <div className="primary__row row justify-content-center">
                    <div className="col-6 m-5">
                        <h1 className="primary__title mb-4">Registro de citas</h1>
                    </div>
                </div>
            </section>

            <section>
                <div className='container mb-5'>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Fecha </th>
                                <th>Hora</th>
                                <th>Paciente</th>
                                <th>Doctor</th>
                               <th colSpan={2} ></th>
                            </tr>
                        </thead>
                        <tbody>

                            {appointments.map((appointment, key) => (
                                    <tr key={appointment.id}>
                                        <td>{appointment.fecha}</td>
                                        <td>{appointment.hora}</td>
                                        <td>{appointment.paciente}</td>
                                        <td>{appointment.doctor}</td>
                                        <td><Button variant="success">Confirmar</Button></td>
                                        <td><Button variant="danger">Cancelar</Button></td>
                                    </tr>
                            
                            ))}

                        </tbody>
                    </Table>
                </div>
            </section>
        </main >
    );
}