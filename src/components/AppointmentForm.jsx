import { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import React from 'react';

export default function AppointmentForm() {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const loadDoctors = async () => {
            const doctors = await axios.get("/src/data/doctors.json");
            setDoctors(doctors.data.doctors);
        }
        loadDoctors();
    }, []);

    const [values, setValues] = React.useState({
        name: "",
        email: "",
        doctor: "",
        date: "",
        hour: "",
      });
    
      function handleSubmit(evt) {
        evt.preventDefault();
         return alert('Hora registrada \n - Nombre Paciente: '+ values.name +'\n - Email de contacto: '+ values.email+ '\n - Doctor: '+values.doctor+ 
        '\n - Fecha: '+values.date+'\n - Hora: '+values.hour );
      }
    
      function handleChange(evt) {
        const { target } = evt;
        const { name, value } = target;
    
       
        const newValues = {
          ...values,
          [name]: value,
        };
    
        setValues(newValues);
      }
    


      

    return (
        <main>
            <form className="form" onSubmit={handleSubmit}>
                <label className="form__label" htmlFor="name">Nombre paciente</label>
                <input className="form__control form-control" type="text" id="name" name="name"
                    placeholder="Ingresa tu nombre" value={values.name} onChange={handleChange} />
               
                <label className="form__label" htmlFor="email">Email de contacto</label>
                <input className="form__control form-control" type="email" id="email" name="email" placeholder="Ingresa tu email"
                value={values.email} onChange={handleChange} />
                
                <label className="form__label" htmlFor="reason">Doctor</label>
                <select className="form-select form__control" type="text" id="doctor" name="doctor"
                  onChange={handleChange}  defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled>Selecciona nombre de doctor</option>
                        {doctors.map((doctor, index) => (
                                <option key={index} doctor={doctor}> {doctor.nombre} </option> 
                        ))}
                </select>
                <label className="form__label" htmlFor="reason">Selecciona fecha</label>
                <DatePicker className="form__control form-control" type="date" id="date" name="date"
                value={values.date.toLocaleString()} onChange={date => handleChange({ target: { value: date.toLocaleDateString(), name: 'date' } })} />
               
                <label className="form__label" htmlFor="reason">Hora</label>
                <select className="form-select form__control" type="text" id="hour" name="hour"
                  onChange={handleChange} defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled>Selecciona una hora disponible</option>
                    <option value="10:30">10:30</option>
                    <option value="10:45">10:45</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                </select>
                <button className="form__button btn btn-primary mt-4" type="submit">Enviar mensaje</button>
            </form>
        </main>
    );
}