import React from 'react'
import useFetch from '../../Hooks/useFetch'
import { BASE_URL } from '../../config'
import Loading from '../../Components/Loader/Loading'
import Error from '../../Components/Error/Error'
import DoctorCard from './../../Components/Doctor/DoctorCard';

const MyBookings = () => {

  const {data:appointments, loading, error} = useFetch(`${BASE_URL}/users/appointments/my-appointments`)
  return (
    <div>
       {
        loading && !error && <Loading />
      }
       {
        error && !loading && <Error errMessage={error} />
       }

       {!loading && !error && (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {
          appointments.map(doctor => (
            <DoctorCard doctor={doctor} key={doctor._id}/>
          ))}
        </div>
       )}

       {!loading && !error && appointments.length === 0 && <h2 className=' mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor'>You did not book any doctors yet!</h2>}
    </div>
  )
}

export default MyBookings
