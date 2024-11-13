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

export const ItemListHor = () => {
    return (
        <div className="px-5 flex flex-wrap text-gray-900 text-sm font-medium gap-3">
        {categorias.map((categoria) => (
          <button
            key={categoria.name}
            className="text-sm p-2 rounded-md bg-white  font-bold hover:bg-gray-300 hover:text-blue-700 focus:text-blue-700"
          >
            {categoria.name}
          </button>
        ))}
      </div>
      

    )
}
