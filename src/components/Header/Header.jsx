import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Buttons } from '../Buttons/Buttons'

const navigation = [
  { name: 'Collections', href: '#', current: true },
  { name: 'Men', href: '#', current: false },
  { name: 'Women', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header({setNewModal}) {
  return (
    <Disclosure as="nav" className="bg-white h-[90px]">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-[1024px] px-2 sm:px-6 lg:px-8">
          <div className="relative border-b-[1px] border-b-neutral-200 h-[90px] flex  items-center justify-between">
            <div className="absolute  inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center outline-none rounded-md p-2 text-gray-600 hover:bg-gray-700 hover:text-white ">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Abrir Menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6 " aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex w-[175px] justify-center flex-shrink-0 items-center">
              <svg className='h-[1.3rem]'>
                <use href="/logo.svg#logoactual" />
              </svg>
              </div>
              <div className="hidden  sm:ml-6 sm:block">
                <div className="flex h-[90px] items-center justify-center space-x-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-white text-gray-700 border-b-[4px] border-b-amber-600 h-full flex items-center' : 'text-gray-400 h-full flex items-center hover:bb-red-300   hover:text-gray-700 border-b-[4px] border-transparent hover:border-b-[4px] hover:border-b-amber-600',
                        ' px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
  

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="relative w-12 flex rounded-full text-sm ">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Abrir menu de Usuario</span>
                    
                    <svg className='h-[1.3rem]'>
                        <use href="/icon-cart.svg#iconcart" />
                    </svg>

                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-[-100px] z-10 mt-[30px]  w-[300px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {/* <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item> */}
                    <Menu.Item>
                      {({ active }) => (
                        <div>
                            <h1 className='border-b-[1px] p-4 border-b-neutral-200 font-bold'>Cart</h1>
                            <div className='flex p-4 justify-between '>
                                Fall Limited
                                <Buttons title='Checkout'/>
                            </div>
                            
                        </div>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button  onClick={()=>setNewModal(true)} 
                type="button"
                className="relative w-10 rounded-full focus:hover-2 focus:ring-2 focus:ring-amber-600 hover:ring-amber-600"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Cart</span>
                <img
                      className=" w-12 rounded-full"
                      src="/image-avatar.png"
                      alt=""
                    />
                
              </button>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="fixed z-[99999] h-screen bg-white top-0 w-4/5 md:hidden">
          <div className="space-y-1 h-[90px] px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white',
                  'block rounded-md h- px-3 py-2 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>

);
}

export default Header;