import React from 'react'

const Accordion = () => {
  return (
    <>
    <div class="relative mb-3">
    <h6 class="mb-0">
      <button
        class="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
        data-collapse-target="animated-collapse-1"
      >
        <span>What is Material Tailwind?</span>
        <i class="absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down group-open:rotate-180"></i>
      </button>
    </h6>
    <div
      data-collapse="animated-collapse-1"
      class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
    >
      <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
        We're not always in the position that we want to be at. We're constantly
        growing. We're constantly making mistakes. We're constantly trying to
        express ourselves and actualize our dreams.
      </div>
    </div>
  </div>
    </>
  )
}

export default Accordion
