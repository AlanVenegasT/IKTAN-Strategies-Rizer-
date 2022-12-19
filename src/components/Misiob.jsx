import React from 'react'

export default function Misiob () {
  return (
    <div className="overflow-hidden bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
          <h2 className="text-lg font-semibold text-indigo-600">Somos</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Conocenos
          </p>
        </div>
        <div className="relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
          <p className="text-lg text-gray-500">
          En Iktan Strategies somos la historia de nuestra gente, trabajo duro, retos y éxitos forjaron nuestro 
          espíritu de excelencia. Los que formamos Iktan Strategies conocemos el sector energético de México y nos 
          desenvolvemos con soltura no solo porque es nuestro trabajo diario, sino porque nosotros ayudamos a construirlo
          y lo consideramos nuestro.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="relative z-10">
            <div className="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
              <p>
              Somos una empresa de consultoría especializada en proyectos de Sector Hidrocarburos 
              en México. Conjuntamos la experiencia y talento de expertos en la ejecución de proyectos 
              costa afuera y terrestre, nuestra gente se destaca por:
              </p>
              <ul className="list-disc list-inside">
                <li>Experiencia de más de 30 años en toda la cadena del sector hidrocarburos upstream, midstream y downstream;</li>
                <li>Entendimiento de los procesos normativos y de gestión de los reguladores del sector energético;</li>
                <li>Contamos con personal que colaboró directamente en los procesos de desarrollo de la regulación, de gestión, supervisión, inspección y vigilancia, y análisis jurídico en los órganos reguladores del sector energía.</li>
                <li>Contamos con convenios de colaboración con diferentes empresas del sector;</li>
                <li>Poseemos un Sistema de Calidad aplicable a los procesos de evaluación técnica y emisión de dictámenes técnicos, así como de auditorías, de acuerdo a la ISO 9001.</li>
              </ul>
            </div>
            
          </div>
          <div className="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none">
            
            <blockquote className="relative rounded-lg bg-white shadow-lg">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                
                <div className="relative mt-8 text-lg font-medium text-gray-700">
                  <h3 className='text-lg font-semibold text-red-600'>Misión</h3>
                  <p className="relative mb-5">
                  Contribuir a la excelencia en el desarrollo de proyectos exitosos del sector 
                  hidrocarburos, con el cumplimiento de los objetivos de nuestros clientes, cuidando 
                  en todo momento la seguridad de las personas y la protección al medio ambiente.
                  </p>
                  <h3 className='text-lg font-semibold text-red-600'>Visión</h3>
                  <p className="relative">
                  Ser una referencia mundial en el desarrollo de proyectos del sector hidrocarburos.
                  </p>
                </div>
              </div>
              <cite className="relative flex items-center rounded-b-lg bg-red-600 py-10 px-6 not-italic sm:mt-10 sm:items-start sm:py-5 sm:pl-12 sm:pr-10">
                
                
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>

  )
}
