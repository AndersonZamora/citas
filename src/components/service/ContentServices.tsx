import { CardInfo } from './CardInfo'
import { ItemList } from './ItemList'
import { ItemListHor } from './ItemListHor'

export const ContentServices = () => {
  return (
    <div className="px-1 mt-6 mb-5 grid grid-cols-1 md:grid-cols-4 gap-3">
      <div className="col-span-4 md:hidden">
        <ItemListHor />
      </div>
      <div className="col-span-1 sm:col-span-2 md:col-span-1 hidden md:block">
      <ItemList />
      </div>
      <div className="px-4 md:px-0 col-span-1 sm:col-span-2 md:col-span-3 block">
        <CardInfo/>
      </div>
    </div>
  )
}
