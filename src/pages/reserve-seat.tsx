import Button from '@/components/Button';
import DatePicker from '@/components/DatePicker';
import RadioGroup from '@/components/RadioGroup';
import Select from '@/components/Select';
import TextField from '@/components/TextField';
import TimePicker from '@/components/TimePicker';
import Header from '@/sections/home/Header';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { MdGroups } from 'react-icons/md';

export default function ReserveSeatPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data, 'DATA');
  };

  const reasonOpts = [
    { id: 1, name: 'Reason A' },
    { id: 2, name: 'Reason B' },
    { id: 3, name: 'Reason C' },
    { id: 4, name: 'Others' },
  ];

  const bldgOpts = [
    { name: 'bldg', id: 'ipc', label: 'IPC', floors: ['3F', '8F', '11F'] },
    { name: 'bldg', id: 'eton', label: 'ETON', floors: ['4F', '5F', '6F'] },
    {
      name: 'bldg',
      id: 'davao',
      label: 'DAVAO',
      floors: ['6F', '8F', '11F', '12F'],
    },
  ];

  const floorsOpts = [
    { name: 'floor', id: '3F', label: '3F' },
    { name: 'floor', id: '4F', label: '4F' },
    { name: 'floor', id: '5F', label: '5F' },
    { name: 'floor', id: '6F', label: '6F' },
    { name: 'floor', id: '8F', label: '8F' },
    { name: 'floor', id: '11F', label: '11F' },
    { name: 'floor', id: '12F', label: '12F' },
  ];

  const [selectedDateFrom, setSelectedDateFrom] = useState(new Date());
  const [selectedDateTo, setSelectedDateTo] = useState(new Date());
  const [selectedTimeIn, setSelectedTimeIn] = useState(new Date());
  const [selectedTimeOut, setSelectedTimeOut] = useState(new Date());

  const handleDateFromChange = (date: Date) => {
    setSelectedDateFrom(date);
    console.log(date, 'DATE');
  };

  const handleDateToChange = (date: Date) => {
    setSelectedDateTo(date);
    console.log(date, 'DATE');
  };

  const handleTimeInChange = (date: Date) => {
    setSelectedTimeIn(date);
    console.log(date, 'DATE');
  };

  const handleTimeOutChange = (date: Date) => {
    setSelectedTimeOut(date);
    console.log(date, 'DATE');
  };

  const seats = [
    { id: 1, name: '001' },
    { id: 2, name: '002' },
    { id: 3, name: '003' },
    { id: 4, name: '004' },
    { id: 5, name: '005' },
  ];

  return (
    <div>
      <Header />

      <div className="text-center py-8">
        <p className="text-primary-light font-bold">
          Why are you going to the office?
        </p>
        <p className="text-sm">Please select a reason.</p>
      </div>

      <div className="mx-auto w-11/12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="border p-4 flex gap-4 shadow mb-4">
            <div className="flex-1">
              <Select
                name="reason"
                label="Reason"
                options={reasonOpts}
                register={register}
              />
            </div>
            <div className="flex-1">
              <TextField
                name="additionalInfo"
                label="Additional Information"
                register={register}
              />
            </div>
          </div>

          <div className="border p-4 shadow mb-4">
            <p className="font-bold text-sm uppercase mb-2">Building</p>
            <RadioGroup value={bldgOpts} register={register} />
          </div>

          <div className="border p-4 shadow mb-4">
            <p className="font-bold text-sm uppercase mb-2">Floors</p>
            <RadioGroup value={floorsOpts} register={register} />
          </div>

          <div className="lg:flex lg:space-x-6">
            <div className="lg:flex-1 space-y-4 mb-4">
              <DatePicker
                label="Date From"
                selectedDate={selectedDateFrom}
                onChange={handleDateFromChange}
              />
              <DatePicker
                label="Date To"
                selectedDate={selectedDateTo}
                onChange={handleDateToChange}
              />
            </div>
            <div className="lg:flex-1 space-y-4 mb-4">
              <TimePicker
                label="Time In"
                selectedDate={selectedTimeIn}
                onChange={handleTimeInChange}
              ></TimePicker>
              <TimePicker
                label="Time Out"
                selectedDate={selectedTimeOut}
                onChange={handleTimeOutChange}
              ></TimePicker>
            </div>
            <div className="lg:flex-1">
              <Select
                name="seatNumber"
                label="Seat Number"
                options={seats}
                register={register}
              />
            </div>
            <div className="lg:flex-1 mt-7">
              <Button>Reserve a seat</Button>
            </div>
            <div className="border p-4 shadow mb-4 lg:flex-auto lg:w-1/4">
              <p className="font-bold text-sm uppercase mb-2">
                Available Seats
              </p>
              <div className="flex space-x-4">
                <MdGroups className="text-2xl" />
                <p>273</p>
              </div>
            </div>
          </div>

          <div className="mt-4 mb-10">
            <Image
              src="/images/8thFlr-overview.png"
              alt="8th Floor Overview"
              layout="responsive"
              objectFit="contain"
              width={100}
              height={56}
            ></Image>
          </div>
        </form>
      </div>
    </div>
  );
}
