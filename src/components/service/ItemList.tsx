import { ICategory } from '@/interfaces';

const categorias: ICategory[] = [
    {
        _id: '1',
        name: 'Acrilicas',
    },
    {
        _id: '2',
        name: 'Manicure',
    },
    {
        _id: '3',
        name: 'Cejas',
    },
    {
        _id: '4',
        name: 'Pedicure',
    },
    {
        _id: '4',
        name: 'Pestañas',
    },
]

export const ItemList = () => {
    return (
        <div className="max-w-lg mx-auto">
            <div className=" text-gray-900 text-sm font-medium gap-3">
                {
                    categorias.map(categoria => (
                        <div className='flex flex-col items-center' key={categoria.name} >
                            <button className=" text-xl  px-4 py-3 mb-1 font-bold w-fit hover:bg-gray-300 hover:text-blue-700  focus:text-blue-700">
                                {categoria.name}
                            </button>
                            <div className="w-44 h-0.5 rounded bg-gray-300 mb-1" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
