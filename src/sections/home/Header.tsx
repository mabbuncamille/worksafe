import Image from 'next/image';

export default function Header() {
  return (
    <div className="h-14 w-full flex justify-center items-center bg-zinc-50 space-x-2 shadow-md">
      <div>
        <Image src="/images/logo.svg" alt="Logo" width={28} height={18}></Image>
      </div>
      <div className="font-semibold text-lg tracking-wide">WorkSafe</div>
    </div>
  );
}
