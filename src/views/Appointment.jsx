
import AppointmentForm from "../components/AppointmentForm";

export default function appointment() {
    return (
        <main>
            <section className="section_primary py-5" tabIndex="0">
                <div className="primary__content container">
                    <div className="primary__row row justify-content-center">
                        <div className="col-lg-8">
                            <h1 className="primary__title mb-4">Reservar Cita</h1>
                            <p className="primary__text text-body-secondary">Completa el siguiente formulario para agendar tu cita medica</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact my-5" tabIndex="0">
                <div className="row justify-content-center">
                    <div className="col-8">
                    <AppointmentForm/>
                    </div>
                </div>
            </section>
        </main>
    );
}