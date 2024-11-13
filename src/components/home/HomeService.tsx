import { ContentServices, LoadingCircular } from '../';

export const HomeService = () => {
  return (
    <>
      <LoadingCircular />
      <h1 className='text-color-1 title-1 mt-2'>Seleccionar servicio</h1>
      <ContentServices/>
    </>
  )
}
