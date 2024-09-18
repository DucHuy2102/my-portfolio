import { BIO } from '../constants';

export default function Bio() {
    return (
        <section className='flex max-w-4xl flex-col gap-12 pt-20' id='bio'>
            <h2 className='text-center text-3xl lg:text-4xl'>Bio</h2>
            <div>
                {BIO.map((bio, index) => (
                    <p key={index} className='mb-4 text-lg lg:text-xl'>
                        {bio}
                    </p>
                ))}
            </div>
        </section>
    );
}
