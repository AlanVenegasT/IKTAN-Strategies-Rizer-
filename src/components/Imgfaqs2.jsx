import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Imgfaqs2() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/3">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://iktanstrategies.com/wp-content/uploads/2021/01/Imagen-ASEA.png"
            alt=""
          />
        </div>
      </div>
      <div className="relative  lg:left-0 lg:w-2/3  px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto  lg:max-w-7xl lg:px-8">
        <div className=" lg:pl-8 lg:w-2/3  ">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg  ">
            <div className="prose prose-indigo mt-5 text-gray-500  ">
                
              <div className="bg-white ">
                <div className="py-16 px-4 sm:py-16 sm:px-6  ">
                  <div className=" divide-y-2 divide-gray-200  ">
                    <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl bg-black lg:pt-10 lg:pb-10 lg:text-2xl rounded-t-xl ">
                      Gestiones ante la ASEA:
                    </h2>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                      {faqs.map((faq) => (
                        <Disclosure
                          as="div"
                          key={faq.question}
                          className="pt-6"
                        >
                          {({ open }) => (
                            <>
                              <dt className="text-lg">
                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                  <span className="font-medium text-gray-900">
                                    Exploración y Extracción
                                  </span>
                                  <span className="ml-6 flex h-7 items-center">
                                    <ChevronDownIcon
                                      className={classNames(
                                        open ? '-rotate-180' : 'rotate-0',
                                        'h-6 w-6 transform'
                                      )}
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Disclosure.Button>
                              </dt>
                              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                <ul className=" list-inside list-disc text-base text-gray-500">
                                  <li> Dictámenes Técnicos de Ingeniería </li>
                                  <li> Dictamenes Técnicos de ARP</li>
                                  <li> Justificaciones Técnicas Normativas </li>
                                  <li> Reportes de Cumplimiento </li>
                                  <li> Presentación de Avisos </li>
                                </ul>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                      {faqs.map((faq) => (
                        <Disclosure
                          as="div"
                          key={faq.question}
                          className="pt-6"
                        >
                          {({ open }) => (
                            <>
                              <dt className="text-lg">
                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                  <span className="font-medium text-gray-900">
                                    Sistemas de Administración
                                  </span>
                                  <span className="ml-6 flex h-7 items-center">
                                    <ChevronDownIcon
                                      className={classNames(
                                        open ? '-rotate-180' : 'rotate-0',
                                        'h-6 w-6 transform'
                                      )}
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Disclosure.Button>
                              </dt>
                              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                <ul className=" list-inside list-disc text-base text-gray-500">
                                  <li> Implementación de SASISOPA </li>
                                  <li> Opinión Calificada de Ingeniería</li>
                                  <li> Opinión Caificada de ARP </li>
                                  <li> Informes Semestrales </li>
                                  <li> Reportes Anuales </li>
                                  <li> Auditorías Internas y Externas </li>
                                  <li> Informes de Auditoría </li>
                                  <li> Cumplimiento de Resuelves </li>
                                </ul>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                      {faqs.map((faq) => (
                        <Disclosure
                          as="div"
                          key={faq.question}
                          className="pt-6"
                        >
                          {({ open }) => (
                            <>
                              <dt className="text-lg">
                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                  <span className="font-medium text-gray-900">
                                    Seguros y Garantias Financieras
                                  </span>
                                  <span className="ml-6 flex h-7 items-center">
                                    <ChevronDownIcon
                                      className={classNames(
                                        open ? '-rotate-180' : 'rotate-0',
                                        'h-6 w-6 transform'
                                      )}
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Disclosure.Button>
                              </dt>
                              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                <ul className=" list-inside list-disc text-base text-gray-500">
                                  <li> Registro de Pólizas </li>
                                  <li> Renovación de Pólizas</li>
                                  <li> Estudios de PML </li>
                                </ul>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                      {faqs.map((faq) => (
                        <Disclosure
                          as="div"
                          key={faq.question}
                          className="pt-6"
                        >
                          {({ open }) => (
                            <>
                              <dt className="text-lg">
                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                  <span className="font-medium text-gray-900">
                                    Protección Ambiental
                                  </span>
                                  <span className="ml-6 flex h-7 items-center">
                                    <ChevronDownIcon
                                      className={classNames(
                                        open ? '-rotate-180' : 'rotate-0',
                                        'h-6 w-6 transform'
                                      )}
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Disclosure.Button>
                              </dt>
                              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                <ul className=" list-inside list-disc text-base text-gray-500">
                                  <li> Línea Base Ambiental </li>
                                  <li> Impacto Ambiental (MIA)</li>
                                  <li> Modificaciones MIA </li>
                                  <li> Informes Preventios </li>
                                  <li> Estudios de Riesgo Ambiental </li>
                                  <li> ETE </li>
                                  <li> Avisos </li>
                                  <li> Términos y Condicionantes </li>
                                </ul>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                      {faqs.map((faq) => (
                        <Disclosure
                          as="div"
                          key={faq.question}
                          className="pt-6"
                        >
                          {({ open }) => (
                            <>
                              <dt className="text-lg">
                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                  <span className="font-medium text-gray-900">
                                    Residuos
                                  </span>
                                  <span className="ml-6 flex h-7 items-center">
                                    <ChevronDownIcon
                                      className={classNames(
                                        open ? '-rotate-180' : 'rotate-0',
                                        'h-6 w-6 transform'
                                      )}
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Disclosure.Button>
                              </dt>
                              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                <ul className=" list-inside list-disc text-base text-gray-500">
                                  <li>
                                    {' '}
                                    Registro de Generador de Residuos Peligrosos{' '}
                                  </li>
                                  <li>
                                    {' '}
                                    Registro de Generador de Residuos de Manejo
                                    Especial
                                  </li>
                                  <li> Planes de Manejo de Residuos </li>
                                  <li> Modificación de autorizaciones </li>
                                  <li> Informes </li>
                                </ul>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
