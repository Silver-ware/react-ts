import coding from '/stickers/coding.png'

import { useNavigate } from 'react-router'
import Layout from '../Components/Layout'

function Home() {
  const navigation = useNavigate();

  return (
    <Layout>
      <img src={coding} className='h-[250px] w-[250px] drop-shadow-lg' alt="On development" />
      <span className='text-4xl text-amber-900 font-bold drop-shadow-lg'>Development on Progress</span>
      <span>We're sorry the site is not currently complete.</span>
      <button className='mt-2 border-2 border-amber-700 px-2.5 py-1 rounded-lg bg-amber-200 cursor-pointer text-black
        hover:scale-115 hover:border-amber-200 hover:bg-amber-700 hover:text-amber-200 transition-all duration-200 ease-in-out'
        onClick={() => navigation('/dashboard')}>
        View Users
      </button>
    </Layout>
  );
}

export default Home;