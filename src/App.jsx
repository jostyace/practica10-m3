import './App.css'
import Header from './components/Header/Header'
import { ImageProduct } from './components/ImageProduct/ImageProduct'
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css';
import { ProductDetails } from './components/ProductDetails/ProductDetails';

function App() {

  return (
    <PrimeReactProvider>
    <>
      <Header/>
      <div className='w-full flex justify-center'>
        <div className='w-full flex max-w-[1024px] flex-wrap'>
        <ImageProduct/>
        <ProductDetails/>
        </div>
      </div> 
    </>
</PrimeReactProvider>
  )

}

export default App
