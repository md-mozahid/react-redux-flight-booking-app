import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import frame1 from '../assets/icons/Frame.svg'
import vector1 from '../assets/icons/Vector (1).svg'
import vector3 from '../assets/icons/Vector (3).svg'
import { AddBooking } from '../redux/Actions'

const FlightInfo = () => {
  const [ticketBooking, setTicketBooking] = useState('')

  const bookings = useSelector((state) => state.bookings)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(AddBooking(ticketBooking))
  }

  const handleChange = (e) => {
    e.preventDefault()
    setTicketBooking((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  return (
    <section>
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
            <div className="des-from">
              <p>Destination From</p>
              <div className="flex flex-row">
                <img src={frame1} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="from"
                  id="lws-from"
                  required
                  onChange={handleChange}>
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>

            <div className="des-from">
              <p>Destination To</p>
              <div className="flex flex-row">
                <img src={frame1} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="to"
                  id="lws-to"
                  // required
                  onChange={handleChange}>
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>

            {/* <!-- Date --> */}
            <div className="des-from">
              <p>Journey Date</p>
              <input
                type="date"
                className="outline-none px-2 py-2 w-full date"
                name="date"
                id="lws-date"
                // required
                onChange={handleChange}
              />
            </div>

            {/* <!-- Guests --> */}
            <div className="des-from">
              <p>Guests</p>
              <div className="flex flex-row">
                <img src={vector1} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="adults"
                  id="lws-guests"
                  // required
                  onChange={handleChange}>
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>

            {/* <!-- Class --> */}
            <div className="des-from !border-r-0">
              <p>Class</p>
              <div className="flex flex-row">
                <img src={vector3} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="ticketClass"
                  id="lws-ticketClass"
                  // required
                  onChange={handleChange}>
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>

            <button
              className="addCity"
              type="submit"
              id="lws-addCity"
              disabled={bookings.length >= 3 ? true : false}>
              {/* <svg
                width="15px"
                height="15px"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg> */}
              <span className="text-sm">Book Flight</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default FlightInfo
