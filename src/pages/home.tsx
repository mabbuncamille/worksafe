import Header from '@/sections/home/Header';
import Image from 'next/image';

const menus = [
  {
    title: 'Getting approval',
    icon: '/images/reserve-seat.svg',
    desc: 'Reserve a seat',
  },
  {
    title: 'Before traveling',
    icon: '/images/health_status.svg',
    desc: 'Declare Health Status',
  },
  {
    title: 'While in DXC site',
    icon: '/images/cico.svg',
    desc: 'Check In & Out',
  },
];

const menusB = [
  {
    title: 'My Requests',
    icon: '/images/request.svg',
  },
  {
    title: 'Dashboard',
    icon: '/images/dashboard.svg',
  },
  {
    title: 'FAQs',
    icon: '/images/faq.svg',
  },
];

export default function Home() {
  return (
    <div>
      <Header />

      <div className="relative max-w-4xl mx-auto mt-10">
        <div className="h-48 relative">
          <Image
            src="/images/home-cover.png"
            alt="Home cover"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
        <div className="absolute top-0 justify-center pl-20 text-white left-0 right-0 bottom-0 flex flex-col">
          <p className="tracking-wide font-thin">Hello Camille Mabbun!</p>
          <p className="mt-8 tracking-wide">
            Click <span className="font-bold underline">HERE</span> before you
            secure your journey onsite.
          </p>
        </div>
      </div>
      <section className="max-w-4xl mx-auto py-14">
        <ul className="grid sm:grid-cols-3">
          {menus.map((menu) => (
            <li key={menu.title}>
              <div className="flex flex-col items-center">
                <p>{menu.title}</p>
                <div className="h-32 w-56 shadow-lg rounded-lg p-8 text-center mt-4">
                  <div className="relative h-10">
                    <Image
                      src={menu.icon}
                      alt={menu.desc}
                      layout="fill"
                    ></Image>
                  </div>
                  <p className="mt-1">{menu.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="py-12">
          <hr className="h-2 border-0 bg-current text-primary" />
        </div>

        <ul className="grid sm:grid-cols-3">
          {menusB.map((menu) => (
            <li key={menu.title}>
              <div className="flex flex-col items-center">
                <div className="h-32 w-56 shadow-lg rounded-lg p-8 mt-4 flex justify-center gap-5 items-center">
                  <div className="relative h-10 w-10">
                    <Image
                      src={menu.icon}
                      alt={menu.title}
                      layout="fill"
                    ></Image>
                  </div>
                  <p className="mt-1">{menu.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="max-w-4xl mx-auto mb-12">
        <div className="text-white">
          <h3 className="text-xl p-4 font-bold bg-primary">
            Some helpful reminders:
          </h3>
          <div className="px-16 py-6 bg-primary-light">
            <p>
              During your visit, please be mindful of the following for
              everyone's health and safety:
            </p>
            <ul className="mt-6">
              <li>Wear a mask at all time</li>
              <li>Submit to a temperature check when you enter the building</li>
              <li>Follow elevator guidelines</li>
              <li>Adhere to social distancing standards</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto mb-12">
        <div className="text-white">
          <h3 className="text-xl p-4 font-bold bg-primary">
            Some helpful reminders:
          </h3>
          <div className="px-16 py-6 bg-primary-light">
            <p>
              During your visit, please be mindful of the following for
              everyone's health and safety:
            </p>
            <ul className="mt-6">
              <li>Wear a mask at all time</li>
              <li>Submit to a temperature check when you enter the building</li>
              <li>Follow elevator guidelines</li>
              <li>Adhere to social distancing standards</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
