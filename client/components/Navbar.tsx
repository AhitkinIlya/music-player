import React from 'react'
import { useRouter } from '../node_modules/next/router'

const menuItems = [
    {text: 'Главня', href: '/'},
    {text: 'Список треков', href: '/tracks'},
    {text: 'Список альбомов', href: '/albums'},
]

const Navbar = () => {
    const router = useRouter()

    return (
        <nav className="bg-gray-800">
            <div className="px-8 py-4">
                <div className="flex-1 flex items-center justify-start">
                    <div className="block">
                        <div className="flex space-x-4">
                            {menuItems.map(({text, href}, index) => (
                                <a onClick={() => router.push(href)} key={index} className="bg-gray-900 text-white px-3 py-2 rounded text font-medium cursor-pointer">{text}</a>
                            ))}

                            {/* <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded text font-medium">Список треков</a>

                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded text font-medium">Список альбомов</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
