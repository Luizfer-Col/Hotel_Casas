import React, { useEffect, useState } from 'react'
import Style from "./Picker.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './picker.css'

const Picker = () => {

  const today = new Date()
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null)
  const [numPersons, setNumPersons] = useState('')
  const [numRooms, setNumRooms] = useState('')
  const [openEndDate, setOpenEndDate] = useState(false)
  const [showError, setShowError] = useState(false)


  // useEffect(() => {
  //   if (startDate) {
  //     let endDay = new Date()
  //     endDay.setDate(startDate.getDate() + 1)

  //     setEndDate(endDay)
  //   }

  // }, [startDate])


  const subtractRooms = () => {
    if (numRooms > 1) setNumRooms(numRooms - 1)
  }
  const addRooms = () => {
    if (numRooms.length < 1) {

      setNumRooms(1)
    } else if (numRooms < 20) setNumRooms(numRooms + 1)
  }
  const subtractPersons = () => {
    if (numPersons > 1) setNumPersons(numPersons - 1)
  }
  const addPersons = () => {
    if (numPersons.length < 1) {

      setNumPersons(1)
    } else if (numPersons < 20) setNumPersons(numPersons + 1)
  }

  const handlePickStartDate = (date) => {
    // let endDay = new Date()
    setShowError(false)

    setStartDate(date)
    // endDay.setDate(startDate.getDate() + 1)
    // setEndDate(endDay)
    // if (date > endDate) {
    //   setEndDate(null)
    // }
    numRooms.length < 1 && setNumRooms(1)
    numPersons.length < 1 && setNumPersons(1)
    // setTimeout(() => {

    //   setOpenEndDate(true)
    // }, 1000);
  }

  const handlePickEndDate = (date) => {
    setEndDate(date)
    setOpenEndDate(false)

  }

  const handleOpenEndDate = () => {
    if (startDate) {
      setOpenEndDate(true)
    } else {
      setShowError(true)
    }
  }
  const handleReset = () => {
    setStartDate(null);
    setEndDate(null)
    setShowError(false)
    setNumPersons('')
    setNumRooms('')
  }

  console.log(startDate);
  console.log(endDate);
  console.log(startDate > endDate);
  return (
    <div className={Style.container}>

      <div className={Style.pickerContainer}>

        <div className={Style.picker}>
          <p className={Style.label}>
            Desde
          </p>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={(date) => handlePickStartDate(date)}
            onInputClick={() => setShowError(false)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={today}
            placeholderText="DD/MM/AAAA"
            monthsShown={2}
          />
          <p className={Style.label}>
            Hasta
          </p>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={endDate}
            open={openEndDate}
            highlightDates
            // disabled={!startDate}
            onInputClick={handleOpenEndDate}
            onClickOutside={() => setOpenEndDate(false)}
            onChange={(date) => handlePickEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            // minDate={startDate?startDate:today}
            minDate={today}
            placeholderText="DD/MM/AAAA"
            monthsShown={2}

          />
          <p className={Style.label}>
            Personas
          </p>
          <div className={Style.simbols}>
            <a onClick={subtractPersons}>-</a>
            <input
              type='text'
              value={numPersons}
              onChange={(e) => setNumPersons(e.target.value)}
              className={Style.simbolsInput}></input>
            <a onClick={addPersons}>+</a>
          </div>

          <p className={Style.label}>
            Habitaciones
          </p>
          <div className={Style.simbols}>
            <a onClick={subtractRooms}>-</a>
            <input
              type='text'
              value={numRooms}
              onChange={(e) => setNumRooms(e.target.value)}
              className={Style.simbolsInput}></input>
            <a onClick={addRooms}>+</a>
          </div>

        </div>
        <button
          className={Style.buttons}
        >
          Ver disponibilidad        </button>
      </div>

      <div className={Style.bottomContainer}>
        <div>
          {showError && (
            <text className={Style.error}>
              Selecciona primero la fecha inicial
            </text>
          )}
        </div>
        <div className={Style.reset}>

          <a onClick={handleReset}
          >Resetear</a>
        </div>

      </div>

    </div>

  )
}

export default Picker