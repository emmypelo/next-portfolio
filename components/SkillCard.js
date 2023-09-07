import React from 'react'

const SkillCard = ({title}) => {
  return (
    <div>
             <p className="border border-blue-800 px-6 py-2 text-lg bg-transparent text-gray-400 hover:text-white hover:border-blue-600 hover:bg-black hover:rounded-lg duration-300">
          {title}
        </p>

    </div>
  )
}

export default SkillCard