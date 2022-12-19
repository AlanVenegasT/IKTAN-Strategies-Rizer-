
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ArrowTopRightOnSquareIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

  import React from 'react'
  const features = [
    {
      name: 'Hola',
      description: 'El participante identificará los fundamentos legales, y los requisitos documentales para solicitar la Autorización para la prestación del servicio de Recolección y Transporte de Residuos de Manejo Especial del Sector Hidrocarburos.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Hola2',
      description: 'El participante entenderá la responsabilidad relacionada con las actividades de Recolección y Transporte de Residuos de Manejo Especial del Sector Hidrocarburos.',
      icon: LockClosedIcon,
    },
    {
      name: 'Hola3',
      description: 'El participante conocerá la estructura de una Autorización de Recolección y Transporte de Residuos de Manejo Especial del Sector Hidrocarburos.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Hola4',
      description: 'El participante conocerá los aspectos necesarios para la presentación del informe anual del cumplimiento de los Términos y Condicionantes.',
      icon: ShieldCheckIcon,
    },
    
  ]
  export default function Objetivos  ()  {
    return (
        
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-lg font-semibold text-cyan-600">CURSO RMA</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Lo que deberas aprender...
              </p>
              <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                Objetivos especificos
              </p>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                  {features.map((feature) => (
                    <div key={feature.name} className="pt-6">
                      <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg">
                              <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                          <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>


    )
  }
  