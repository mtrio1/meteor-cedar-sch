/* eslint-disable no-shadow */
// @ts-nocheck
import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const SelectEnrollement = ({ title, enrollement, setEnrollement, enrollements }) => (
    <Listbox value={enrollement} onChange={setEnrollement}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">{title}</Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm">
              <span className="flex items-center">
                {enrollement?.imageUrl && (<img src={enrollement.imageUrl} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />)}
                <span className="ml-3 block truncate">{enrollement?.name || 'Select a student'}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-32 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
               {!enrollement.length && (
                <Listbox.Option
                className={
                  classNames(
                    'text-gray-900',
                    'cursor-default select-none relative py-2 pl-3 pr-9'
                  )}
                // eslint-disable-next-line react/jsx-boolean-value
                disabled={true}
              >
                    <div className="flex items-center">

                      <span
                        className={classNames(
                           'font-normal', 'ml-3 block truncate'
                         )}
                      >
                        No students found
                      </span>
                    </div>
                </Listbox.Option>
               )}
                {enrollements.map((enrollement) => (
                  <Listbox.Option
                    key={enrollement._id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-cyan-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={enrollement}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                        {enrollement.imageUrl && (
                          <img
src={enrollement.imageUrl}
alt=""
className="flex-shrink-0 h-6 w-6 rounded-full"
                          />
                          )}
                          <span
                            className={classNames(
                              'font-normal', 'ml-3 block truncate')}
                          >
                            {enrollement.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-cyan-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
