import Link from "next/link";
import NavItem from "./NavItem";

const navItems = [
    {
        path: '/book',
        text: 'Books'
    }
]

const Navbar = () => {
  return (
    <div className="flex bg-slate-500 text-white top-0 py-3 flex-wrap justify-between bg-silver">
        <Link 
            href={'/book'}
            className="text-lg font-semibold ml-6"
        >
            <h1 className="p-2">Library</h1>
        </Link>
        
        <ul className="flex gap-[20px] text-m mr-6">
          {
            navItems.map( item => (
              <NavItem
                key={item.path}
                {...item}
              />
            ))
          }
        </ul>
      </div>
  )
}

export default Navbar