import Header from "../components/Header"
import Footer from "../components/Footer"

export default function HeroDuo() {
    return (
  
      <div className="relative bg-gray-50">
        
        <main className="lg:relative bg-gray-50">
          <div className="mx-auto md:w-full max-w-7xl md:pt-16 pb-20 text-center lg:py-48 lg:text-left w-10/12 pt-5 pl-10">
            <div className="px-4 -ml-10 sm:px-8 lg:w-1/2 xl:pr-15">
              <h1 className="mx-auto max-w-4xl font-display text-5xl font-extrabold tracking-tight text-black sm:text-7xl">
               IKTAN{' '}
                <span  ><h1 className="    mx-auto max-w-4xl font-display text-5xl font-extrabold tracking-tight text-[#DD102A]  sm:text-7xl ransition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110 ">
                STRATEGIES
              </h1></span>
              </h1>
              <p className="pt-3 mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                TERCERO AUTORIZADO 
              </p>
              <p className="pt-3 mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                PARA  EXPLOTACION  Y  EXTRACCION  DE HIDROCARBUROS.  (TA-D-A02/06-16/2021)
              </p>
              
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#DD102A] px-8 py-3 text-base font-medium text-white hover:bg-[#e0a300] md:py-4 md:px-10 md:text-lg"
                  >
                    CONOCENOS...
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
              alt=""
            />
          </div>
        </main>
        <section className=' h-40 lg:flex lg:flex-row block '>
          
          <div className='flex flex-row bg-black text-white lg:w-1/3 h-full hover:border-2 hover:border-slate-700 w-full'>
            <div className='pl-24 float-right'>
              <p className=' text-right p-5 pt-8 '>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, vel. Ea eum necessitatibus deleniti neque vitae, cum earum exercitationem delectus, 
               quia consectetur fuga magni ullam nesciunt dolores libero amet obcaecati.
              </p>
            </div>
          </div>
  
          <div className='flex flex-row bg-[#AAAAAA] text-white lg:w-1/3 h-full hover:border-2 hover:border-[#AAAAAA]  w-full'>
  
            <div>
              <p className='p-5 pt-12 text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima, corrupti nam sapiente modi doloribus ipsam hic adipisci provident quod,
                 quam quas. Quasi porro odit itaque natus, harum vitae dignissimos. 
              </p>
            </div>
  
          </div>
  
          <div className='flex flex-row bg-blanquito text-gray-500 lg:w-1/3 h-full hover:border-2 hover:border-blanquito w-full'>
  
            <div className='w-4/5'>
              <p className=' p-auto p-5 pt-8  '>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, quam temporibus? Iure, recusandae cumque! Sit quidem voluptatum nostrum iste 
                dicta commodi at sunt, praesentium excepturi quia autem optio error beatae?
              </p>
            </div>
          </div>
        </section>
        <div className='mt-80 lg:mt-auto'>
          
        </div>
  
      </div>
    )
  }
  