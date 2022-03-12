import { useEffect, useState } from 'react';

import { CustomButton } from '../../../Utils';
import { MeasureInput } from '.';

import carTopView from '../../../../assets/images/car-inspection.png';
import edit from '../../../../assets/images/edit-icon.svg';

import {
  getNextAppointmentDate,
  getNextAppointmentTime,
  getNextAppointmetDateTime,
} from '../../../../utils/data-utils';

const Measurement = ({ vehicleNote, vehicleId }) => {
  const INITIAL_MEASUREMENT = {
    fBrake: '',
    rBrake: '',
    lfTire: '',
    lrTire: '',
    rfTire: '',
    rrTire: '',
    note: '',
    nextAppointmentDate: '',
    nextAppointmentTime: '',
  };
  const [measureInput, setMeasureInput] = useState(
    vehicleNote || INITIAL_MEASUREMENT
  );
  const [editMode, setEditMode] = useState(false);
  const {
    fBrake,
    rBrake,
    lfTire,
    lrTire,
    rfTire,
    rrTire,
    note,
    nextAppointmentDate,
    nextAppointmentTime,
  } = measureInput;

  useEffect(() => {
    vehicleNote &&
      setMeasureInput({
        ...vehicleNote,
        nextAppointmentDate: getNextAppointmentDate(
          vehicleNote.nextAppointment
        ),
        nextAppointmentTime: getNextAppointmentTime(
          vehicleNote.nextAppointment
        ),
      });
  }, [vehicleNote]);

  const handleChange = e => {
    const { name, value } = e.target;
    editMode && setMeasureInput({ ...measureInput, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(measureInput);

    editMode &&
      setMeasureInput({
        ...vehicleNote,
        nextAppointmentDate: getNextAppointmentDate(
          vehicleNote.nextAppointment
        ),
        nextAppointmentTime: getNextAppointmentTime(
          vehicleNote.nextAppointment
        ),
      });
    setEditMode(false);
  };

  const toggleEditMode = () => {
    setEditMode(prev => !prev);
  };

  return (
    <div className='border-2 p-4 rounded flex flex-col'>
      <div className='flex justify-between'>
        <p>(mm)</p>
        <img
          className='w-6 cursor-pointer'
          src={edit}
          alt='edit'
          onClick={toggleEditMode}
        />
      </div>
      <form
        className='text-zinc-800 flex flex-col gap-4'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col items-center'>
          <MeasureInput
            name='fBrake'
            value={fBrake}
            handleChange={handleChange}
            placeholder='F brake'
          />
          <div className='flex flex-row my-4'>
            <div className='flex flex-col justify-around'>
              <MeasureInput
                name='lfTire'
                value={lfTire}
                handleChange={handleChange}
                placeholder='LF tire'
              />
              <MeasureInput
                name='lrTire'
                value={lrTire}
                handleChange={handleChange}
                placeholder='LR tire'
              />
            </div>
            <img className='w-20' src={carTopView} alt='car top view' />
            <div className='flex flex-col justify-around'>
              <MeasureInput
                name='rfTire'
                value={rfTire}
                handleChange={handleChange}
                placeholder='RF tire'
              />
              <MeasureInput
                name='rrTire'
                value={rrTire}
                handleChange={handleChange}
                placeholder='RR tire'
              />
            </div>
          </div>
          <MeasureInput
            name='rBrake'
            value={rBrake}
            handleChange={handleChange}
            placeholder='R brake'
          />
        </div>
        <div className='flex flex-col'>
          <p className='text-slate-200'>Next appointment:</p>
          <div>
            <input
              className='w-full text-center'
              type='date'
              name='nextAppointmentDate'
              value={nextAppointmentDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className='w-full text-center'
              type='time'
              name='nextAppointmentTime'
              value={nextAppointmentTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <p className='text-slate-200'>Note:</p>
          <textarea
            className='p-2'
            name='note'
            value={note}
            cols='30'
            rows='2'
            placeholder='Note'
            onChange={handleChange}
          />
        </div>
        {editMode && <CustomButton type='submit'>Save</CustomButton>}
      </form>
    </div>
  );
};

export default Measurement;
