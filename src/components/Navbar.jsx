import "../App.css"
import 'blockly/blockly_compressed'
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-1000 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 my-auto">
            <img src="https://cdn.discordapp.com/attachments/932651845447483428/989379701795594300/unknown.png" alt="scratch" className="fill-current h-10 w-10 mr-2"/>
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