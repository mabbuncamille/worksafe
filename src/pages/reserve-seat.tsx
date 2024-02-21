import Button from '@/components/Button';
import RadioGroup from '@/components/RadioGroup';
import Select from '@/components/Select';
import TextField from '@/components/TextField';
import Header from '@/sections/home/Header';
import { useForm } from 'react-hook-form';

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

  return (
    <div>
      <Header />

      <div>
        <h1>Why are you going to the office?</h1>
        <p>Please select a reason.</p>
      </div>

      <div className="mx-auto w-11/12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="border p-2">
            <Select
              name="reason"
              label="Reason"
              options={reasonOpts}
              register={register}
            />
            <TextField
              name="additionalInfo"
              label="Additional Information"
              register={register}
            />
          </div>

          <div className="border p-4">
            <p className="font-bold uppercase">Building</p>
            <RadioGroup value={bldgOpts} register={register} />
          </div>

          <div className="border p-4">
            <p className="font-bold uppercase">Floors</p>
            <RadioGroup value={floorsOpts} register={register} />
          </div>

          <div className="flex">
            <div>
              <p>DATE FROM</p>
              <p>DATE TO</p>
            </div>
            <div>
              <p>TIME IN</p>
              <p>TIME OUT</p>
            </div>
            <div>
              <p>SEAT NUMBER</p>
            </div>
            <div>
              <Button>Reserve a seat</Button>
            </div>
            <div>
              <p>Available Seats</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
