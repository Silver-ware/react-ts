import { useNavigate, useLocation } from 'react-router'
import mainLogo from '/stickers/mainLogo.png'

interface LayoutProp {
  children: React.ReactNode;
  activeTab?: string,
}


function Layout({children}: LayoutProp) {
  const navigation = useNavigate();
  const location = useLocation();
  const {pathname} = location;

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-200 select-none">
      <div className="relative w-[85%] h-[95%] flex items-center justify-end">
        <div className="absolute h-[97%] w-[30%] left-0 bg-amber-700 rounded-xl shadow-2xl shadow-amber-900 flex items-center flex-col px-3 py-10 gap-4 z-50">
          <div className='rounded-full w-[50%] aspect-square bg-amber-200 shadow-[inset_0px_0px_5px_1px_#733306] flex items-center justify-center border-1'>
            <img src={mainLogo} className='h-[80%]' alt="Main Logo" />
          </div>
          <ul className='flex-1 w-[80%] flex flex-col gap-2 pt-5 pb-12 uppercase justify-center'>
            {['Home', 'Game', 'Exercises', 'Users', 'Settings'].map((tab, index) => (
              <li key={index} className={`relative group basis-1/5 max-h-[45px]  ${(`/${tab.toLowerCase()}`) === pathname? 'bg-amber-300' : 'bg-amber-200'} shadow-[inset_0px_0px_5px_1px_#733306]
                flex items-center justify-center font-semibold text-xl text-amber-950 cursor-pointer
                hover:bg-amber-300 hover:text-amber-950 transition-all ease-in-out border-1`}
                onClick={() => navigation(`/${tab.toLowerCase()}`)}>
                {tab}
                <div className={`absolute h-[45px] flex justify-end ${(`/${tab.toLowerCase()}`) === pathname? 'bg-amber-300' : 'bg-amber-200'} rounded-e-2xl pr-1.5
                  ${(`/${tab.toLowerCase()}`) === pathname? ' -right-[96px] w-[50px] ' : ' -right-[56px] w-[10px] '}
                  border-y-1 border-r-1 group-hover:bg-amber-300 group-hover:w-[50px] group-hover:-right-[96px] transition-all duration-300 ease-in-out`}>
                  <img src={`/icons/${tab.toLowerCase()}.gif`} className={`h-[45px] aspect-square ${(`/${tab.toLowerCase()}`) === pathname? '' : 'opacity-0'} group-hover:opacity-100 transition-all duration-1000 ease-in-out`} alt={`${tab} Icon`} />
                </div>
                <div className={`absolute h-[45px] flex justify-end ${(`/${tab.toLowerCase()}`) === pathname? 'bg-amber-300' : 'bg-amber-200'} rounded-s-2xl pr-1.5
                  ${(`/${tab.toLowerCase()}`) === pathname? ' -left-[56px] w-[10px] ' : ' -left-[86px] w-[40px] '}
                  border-y-1 border-l-1 group-hover:bg-amber-300 group-hover:w-[10px] group-hover:-left-[56px] transition-all duration-300 ease-in-out`}>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[90%] w-[90%] bg-amber-400 rounded-e-2xl shadow-[0px_0px_15px_0px_#bb4d00] pl-[230px]
          flex items-center justify-center flex-col gap-1 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;