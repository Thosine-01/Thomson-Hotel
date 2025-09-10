import React from 'react'

const Rooms_Card = ({ id, name, description, image, price, feature }) => {
  return (
  <div
  key={id}
  className={`flex flex-col md:flex-row ${id % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center bg-gray-100 shadow-lg overflow-hidden mb-20`}
>
  {/* Text Content */}
  <div className="w-full md:w-1/2 p-10 space-y-4">
    <p className="text-sm text-yellow-700 font-medium">From ${price} <span className="text-gray-500">/ Night</span></p>
    <h2 className="text-3xl font-semibold text-gray-900">{name}</h2>
    <div className="flex gap-6 text-gray-700 text-sm mt-4">
      <div className="flex items-center gap-10">
        {feature.map((feat) => (
          <div key={feat.id} className="flex items-center gap-2">
            {feat.icon}
            <div>{feat.name}</div>  
          </div>
        ))}
      </div>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>

    <div className="pt-6 flex items-center justify-between">
      <a href="#" className="text-yellow-700 text-sm font-semibold tracking-widest hover:underline flex items-center gap-1">
        MORE INFO →
      </a>
      <button className="bg-yellow-700 text-white py-2 px-6 text-sm font-semibold tracking-wider hover:bg-yellow-800 transition">
        BOOK NOW
      </button>
    </div>
  </div>

  {/* Image */}
  <div className="w-full md:w-1/2 h-80 md:h-full">
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover"
    />
  </div>
</div>
  )
}

export default Rooms_Card
  // 