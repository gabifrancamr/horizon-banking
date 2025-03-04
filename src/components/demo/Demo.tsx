import Image from 'next/image'
import screen from '../../../public/screen.png'

export function Demo() {
    return (
        <div className="hidden sm:flex items-center relative bg-sky-50  overflow-hidden">
            <Image className='absolute left-24' src={screen} alt='screen demo' quality={100} />
        </div>
    )
}