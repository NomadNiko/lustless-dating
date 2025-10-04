'use client'
import { useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setResult("Sending....");

        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email')
        };

        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                setResult("Thanks for joining! We'll notify you when we launch.");
                event.target.reset();
            } else {
                setResult(result.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setResult("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">

            <h4 className="text-center mb-2 text-xl md:text-2xl font-Ovo">Join the Movement</h4>
            <h2 className="text-center text-5xl sm:text-6xl font-Ovo">Get Early Access</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-base md:text-lg">Be among the first to experience dating beyond the surface. Sign up for our waitlist and we&apos;ll notify you when Lustless launches in your area.</p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <input type="text" placeholder="Enter your name" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" required name="name" />

                    <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" required name="email" />
                </div>
                <button type='submit' disabled={loading} className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover disabled:opacity-50">
                    {loading ? 'Joining...' : 'Join Waitlist'}
                    <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                </button>
                <p className='mt-4 text-center'>{result}</p>
            </form>
        </div>
    )
}