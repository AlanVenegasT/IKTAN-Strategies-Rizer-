import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function Hero() {
  return (
    <div className=" bg-cover bg-center   bg-[url('https://iktanstrategies.com/wp-content/uploads/2020/12/Atardecer-plataforma.jpg')]  ">
   
      <Container className="pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-extrabold tracking-tight text-orange-100 sm:text-7xl">
          {' '}
          <div className="relative -skew-y-3 transform bg-gradient-to-tl from-[#E65164] to-[#DD102A] transition delay-150 duration-700 ease-in-out hover:-translate-y-1  hover:scale-110 md:mx-44">
            <span className="relative text-orange-100 text-5xl ">¿QUIENES SOMOS?</span>
          </div>{' '}
        </h1>
        
        <div className="mt-10 flex justify-center gap-x-6">
          <button
            type="button"
            class="mr-2 mb-2 animate-bounce rounded-full bg-orange-100 px-5 py-2.5 text-center text-sm font-extrabold text-[#DD102A] shadow-xl transition duration-700 hover:bg-red-800 focus:outline-none focus:ring-4"
          >
            CONTACTANOS
          </button>
        </div>
        <div className="mt-36 lg:mt-44">
          
          <ul
            role="list"
            className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            {[
              [
                { name: 'Transistor', logo: logoTransistor },
                { name: 'Tuple', logo: logoTuple },
                { name: 'StaticKit', logo: logoStaticKit },
              ],
              [
                { name: 'Mirage', logo: logoMirage },
                { name: 'Laravel', logo: logoLaravel },
                { name: 'Statamic', logo: logoStatamic },
              ],
            ].map((group, groupIndex) => (
              <li key={groupIndex}>
                <ul
                  role="list"
                  className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                >
                  {group.map((company) => (
                    <li key={company.name} className="flex">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        unoptimized
                      />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    //</div>

      



  )
}
