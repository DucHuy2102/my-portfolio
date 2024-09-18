import { HERO } from '../constants/index';
import carlImg from '../assets/cr7.jpg';

export default function Hero() {
    return (
        <section className='flex min-h-screen flex-wrap items-center'>
            <div className='w-full md:w-1/2'>
                <h2 className='my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]'>
                    {HERO.name}
                </h2>
                <p className='p-2 text-3xl tracking-tighter lg:text-4xl'>{HERO.greet}</p>
                <p className='mb-8 p-2 text-xl'>{HERO.description}</p>
            </div>
            <div className='w-full md:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <img
                        src={carlImg}
                        alt='dHuy'
                        width={550}
                        height={550}
                        className='rounded-3xl'
                    />
                </div>
            </div>
        </section>
    );
}
