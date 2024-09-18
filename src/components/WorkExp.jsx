import { EXPERIENCES } from '../constants';

export default function WorkExp() {
    return (
        <section id='work' className='pt-20'>
            <h2 className='text-center text-4xl font-semibold tracking-tighter'>Work Experience</h2>
            <div className='space-y-8 p-10'>
                {EXPERIENCES.map((exp, index) => (
                    <div
                        key={index}
                        className='rounded-xl border border-stone-50/30 bg-white/10 p-4'
                    >
                        <h3 className='text-2xl font-semibold'>{exp.title}</h3>
                        <p className='text-xl'>{exp.company}</p>
                        <p className='text-sm text-stone-300'>{exp.duration}</p>
                        <p className='mt-2 text-base'>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
