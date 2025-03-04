import Image from 'next/image'
import logo from '../../../public/logo.png'

export function Logo() {
    return (
        <div className='flex gap-2'>
            <Image src={logo} alt='horizon bank logo' width={30} height={30} />
            <h2 className='text-sky-950 font-bold ibm leading-7 text-3xl'>Horizon</h2>
        </div>
    )
}