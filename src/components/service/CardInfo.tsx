import Link from 'next/link'
import React from 'react'

export const CardInfo = () => {
    return (

        <div className="containe">
            <div className="max-w-[720px] mx-auto">
                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                    <div className="p-6">
                        <h1 className="block mb-2 font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            UI/UX Review Check
                        </h1>
                        <h2 className='font-bold text-xl'>S/ 45.00</h2>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
                        </p>
                        <button
                            className="p-2 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                            type="button">
                            Más información
                        </button>
                    </div>
                    <div className="p-6 pt-0 flex justify-end">

                        <Link
                            href={'/servicio/fortalecimiento-base-rubber'}
                            className=" gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20">
                            Seleccionar servicio
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
