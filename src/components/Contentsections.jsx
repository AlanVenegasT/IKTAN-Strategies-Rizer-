import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Contentsections() {
    return (
  
        <div className="relative bg-[#eff0f2]">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2"></div>
        </div>
        <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 mb-28">
  
          <div>                     {/* Este div ncierra todo*/}
            <div className="">                   {/* div1 */}
              <div className="absolute ">
                <div className=" bg-gradient-to-tl from-transparent to-[#A0581F]  ">
                <h1 className=' lg:mt-44 lg:pl-10 lg:pr-8 lg:pt-4 lg:pb-4 text-white  text-2xl font-bold font-display  '>CURSO RMA</h1>
                </div>
              </div>
              <div className="h-30 w-full ">
                <img className="rounded-tr-[150px]" src="https://iktanstrategies.com/wp-content/uploads/2020/12/Atardecer-plataforma.jpg" alt="" />
              </div>
            </div>
  
  
  
  
  
            <div className='flex'>     {/* div2 */}
  
              <div className='h-76 w-3/6 pl-5'>
                <div className=' lg:mb-2 lg:text-2xl text-lg'>
                  <h2 className=" ">AUTORIZACION </h2>
                  <h2>PARA RECOLECCIÓN Y  </h2>
                  <h2>TRANSPORTE DE  </h2>
                </div>
                <div className='mb-2 font-bold lg:text-2xl text-lg  '>
                  <h2>RESIDUOS DE</h2>
                  <h2>MANEJO</h2>
                  <h2>ESPECIAL</h2>
                </div>
                <div>
                
                  <h2 className=" lg:text-base text-xs">Informes e Inscripciones:</h2>
                </div>
                <div>
                  <span className="lg:text-base text-xs">cursos@iktanst.com</span>
                </div>
                
              </div>
  
                <div className='h-76 w-3/6 pl-5 pt-16 bg-[#230B0C]'>
  
                    <p className='text-white font-bold lg:text-xl  text-base'>DURACIÓN</p>
                    <p className='text-white lg:text-sm text-xs '>8 HORAS</p>
  
                    <p className='text-white font-bold lg:text-xl  text-base'>SESIONES EN VIVO</p>
                    <p className='text-white lg:text-sm text-xs'>MODALIDAD EN LINEA</p>
  
                    <p className='text-white font-bold lg:text-xl  text-base'>CONSTANCIA DC-3</p>
                    <p className='text-white lg:text-sm text-xs'>VALIDEZ ANTE LA STPS</p>
  
                </div>
  
  
            </div>
  
  
  
            <div className="bg-gradient-to-r from-[#200800] via-[#431D08] to-[#D37610] flex space-x-10 ">  {/* div3 */}
              <div className=' pt-5 pb-5'>
                <img className='lg:w-25 lg:h-12 lg:mr-32 w-25 h-14 mr-24 pl-3 ' src="https://iktanstrategies.com/wp-content/uploads/2022/08/LIT.png" alt="" />
              </div>
              <div className="">
                <h3 className='text-white lg:text-sm text-xs  '>IKTAN Training es una rama de IKTAN Strategies SAPI de CV;
               la apertura  de los grupos está supeditada a que se cumpla 
                con un minimo de participantes; consulta el
                calendario de cursos 2023 en www.iktanstrategies.com </h3>
              </div>
            </div>
          </div>
  
  
  
  
  
  
  
  
          <div className="lg:col-start-2 lg:pl-8">
            <div className="bg-[#F9FAFB] lg:pr-5 lg:pt-5 lg:pb-16 rounded-3xl">
            <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
              <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl font-display">
                Autorización para Recolección y Transporte de Residuos de
                Manejo Especial
              </h3>
              <p className="mt-8 text-lg text-gray-500 text-justify">
                La Gestión de Residuos debe realizarse con apego a los
                principios de valorización, responsabilidad compartida y
                manejo integral, particularmente el manejo de los Residuos
                Peligrosos debe realizarse conforme la Ley General para la
                Prevención y Gestión Integral de Residuos (LGPGIR) y su
                Reglamento (RLGPGIR), regulación en la cual se dan las
                especificaciones necesarias para prevenir y controlar la
                contaminación del medio ambiente y la protección de la salud
                humana, así como evitar riesgos a la salud y daños a los
                ecosistemas.
              </p>
  
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
  