import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react';

const AItools = () => {
  const navigate = useNavigate();
  const {user} = useUser();
  return (
    <div className='px-4 sm:px-20 xl:px-32 my-24'>
      <div className='text-center mb-6'>
        <h2 className='text-slate-700 text-[42px] font-semibold'>
          Powerful AI tools
        </h2>
        <p className='text-gray-500 max-w-lg mx-auto'>
            Everything you need to create content quickly and easily. Our AI tools are designed to help you generate high-quality content in minutes, not hours.
        </p>
      </div>
       <div className='flex flex-wrap mt-10 justify-center gap-8'>
        {AiToolsData.map((tool, index) => (
            <div key={index} className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer' onClick={() => user && navigate(tool.path)}>
               <tool.Icon className='w-12 h-12 p-3 text-white rounded-x1' style={{ background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})` }}/>
               <h3 className='mt-6 mb-3 text-lg font-semibold'>{tool.title}</h3>
               <p className='text-sm text-gray-500 max-w-[95%]'>{tool.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default AItools
