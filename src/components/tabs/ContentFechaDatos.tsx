'use client';

import { useState } from 'react'
import { CustomTabPanel } from './CustomTabPanel';

export const ContentFechaDatos = () => {

  const [value, setValue] = useState(0);

  const handleChange = (index: number) => {
    setValue(index);
  };

  return (
    <div className="flex flex-col">
      <div className="flex border-b border-gray-300">
        <button
          className={`px-4 py-2 focus:outline-none font-bold ${value === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
          onClick={() => handleChange(0)}
        >
          FECHA Y HORA
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${value === 1 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
          onClick={() => handleChange(1)}
        >
          DATOS DE CONTACTO
        </button>
      </div>

      <CustomTabPanel value={value} index={0}>
        <h1>Contenido para Fecha y hora </h1>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <h1>Contenido para Datos de contacto</h1>
      </CustomTabPanel>
    </div>
  )
}
