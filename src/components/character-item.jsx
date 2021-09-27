import React from 'react'

export default function CharacterItem({item}) {
    return (
        <div>
          <div className="p-10">  
            {/* <!--Card 1--> */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-150 object-cover object-top rounded-lg shadow-md" src={item.img} alt={item.nickname}/>
            <div className="px-6 py-4">
                <div className="flex inline space-x-4 items-center">
                    <div className="font-bold text-xl mb-2">
                        {item.name}
                    </div>
                {item.status === 'Alive' ? 
                <div className="inline-block align-middle bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {item.status}</div>:                
                <div className="inline-block align-middle bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {item.status}</div>}

                </div>
                <p className="text-gray-700 text-base">
                Actor Name: {item.portrayed}
                </p>
                <p className="text-gray-700 text-base">
                Nickname: {item.nickname}
                </p>
                <p className="text-gray-700 text-base">
                Nickname: {item.nickname}
                </p>
            </div>
            <div className="px-6 pt-1 pb-2">
                {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
                {item.occupation.map((itemSub) => (
                    <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={itemSub.index}>{itemSub}</span> 
                ))}
            </div>
            </div>
        </div>



        </div>
    )
}
