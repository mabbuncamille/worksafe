import Image from 'next/image';

const menus = [
  {
    title: 'Getting approval',
    icon: '/images/reserve-seat.svg',
    desc: 'Reserve a seat',
  },
  {
    title: 'Before traveling',
    icon: '/images/reserve-seat.svg',
    desc: 'Declare Health Status',
  },
  {
    title: 'While in DXC site',
    icon: '/images/reserve-seat.svg',
    desc: 'Check In & Out',
  },
];

export default function App() {
  return (
    <div>
      <div className="h-14 w-full flex justify-center items-center bg-zinc-50 shadow">
        <div>
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={28}
            height={18}
          ></Image>
        </div>
        <div className="font-semibold">DXC Worksafe</div>
      </div>

      <div className="relative max-w-4xl mx-auto">
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
            Click <span className="font-bold">HERE</span> before you secure your
            journey onsite
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
          <hr className="h-2 border-0 bg-current text-violet-900" />
        </div>

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
      </section>

      <section className="max-w-4xl mx-auto mb-12">
        <div className="text-white">
          <h3 className="bg-violet-900 text-xl p-4 font-bold">
            Some helpful reminders:
          </h3>
          <div className="bg-violet-800 px-16 py-6">
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
          <h3 className="bg-violet-900 text-xl p-4 font-bold">
            Some helpful reminders:
          </h3>
          <div className="bg-violet-800 px-16 py-6">
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
