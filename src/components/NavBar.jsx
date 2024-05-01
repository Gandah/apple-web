import { appleImg, bagImg, searchImg } from "../utils"
import { navLists } from "../constants"

const NavBar = () => {
  return (
    <header className="w-full py-5 px-5 sm:px-10 flex justify-between items-center">
        <nav className="flex w-full screen-max-width justify-between">
            <img src={appleImg}
             alt="apple logo"
              width={14} 
              height={18}
              />

            <ul className="flex flex-1 justify-center max-md:hidden">
                {navLists.map(
                    (nav, i) => (
                        <li key={`${nav}-${i}`}
                        className="px-5 text-sm cursor-pointer text-gray
                         hover:text-white transition-all"
                        >{nav}</li>
                    )
                )}
            </ul>
            <div className="flex items-baseline 
            gap-7 max-sm:justify-end max-sm:flex-1">
                <img src={searchImg}
                alt="apple logo"
                width={14} 
                height={18}
                />
                <img src={bagImg}
                alt="apple logo"
                width={14} 
                height={18}
                />
            </div>
        </nav>
    </header>
  )
}

export default NavBar