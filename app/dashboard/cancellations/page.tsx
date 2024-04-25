import Image from 'next/image';

export default function Page() {
    return( 
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
         <h2>Cancellations Page</h2>
         <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        </div>
    )
  }