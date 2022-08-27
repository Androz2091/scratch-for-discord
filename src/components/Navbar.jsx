import "../App.css"
import 'blockly/blockly_compressed'
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-1000 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 my-auto">
            <img src="https://images-ext-1.discordapp.net/external/qT4OReCGZ7tLyu7EOp0ZeM1J755R8yOV5vl_IFKd66E/%3Fsize%3D4096/https/cdn.discordapp.com/icons/932651844344373278/ef5d4de4c598bda58c6edc09e9478b2d.png?width=492&height=492" alt="scratch" className="fill-current h-10 w-10 mr-2"/>
            <span className="font-semibold text-xl tracking-tight">Scratch For Discord</span>
        </div>
        <div className="block lg:hidden">
        </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
                    File
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
                    Edit
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white">
                    Toolbox
                </a>
            </div>
        </div>
    </nav>
  )
}