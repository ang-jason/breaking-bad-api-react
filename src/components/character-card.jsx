import React from 'react'
import CharacterItem from './character-item'

export default function CharacterCard({items, isLoading}) {

    return isLoading ? (
    
    // loader component
    <div class="flex items-center justify-center space-x-2 animate-bounce">
    <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
    <div class="w-8 h-8 bg-green-400 rounded-full"></div>
    <div class="w-8 h-8 bg-black rounded-full"></div>
    </div>

    ) : (
        <div className="p-5 grid justify-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {items.map(item => (
                <CharacterItem key={item.char_id} item={item}/>
            ))}
        </div>
        )


}
