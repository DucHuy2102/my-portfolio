import { EDUCATION } from '../constants';

export default function Education() {
    return (
        <section className='py-8' id='education'>
            <h2 className='mb-4 text-center text-3xl font-bold'>Education</h2>
            {EDUCATION.map((edu, index) => (
                <div key={index} className='mb-6 p-10'>
                    <h3 className='text-xl font-semibold'>{edu.degree}</h3>
                    <p className='text-lg'>{edu.institution}</p>
                    <p className='text-sm text-stone-300'>{edu.duration}</p>
                    <p className='mt-2'>{edu.description}</p>
                </div>
            ))}
        </section>
    );
}
