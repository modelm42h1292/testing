import Link from "next/link"
import { Navbar, Button, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function Nav() {
  
  const [menuVis, setMenuVis] = useState(false)

  return(
    <Navbar
      variant='gradient'
      color='white'
      className="-mt-2 w-full fixed opacity-60 hover:opacity-80"
    >
      <div className="flex flex-row gap-4 justify-between">
          <Link href='/'>
            <Button>
              Home
            </Button>
          </Link>
        <div className="flex flex-row gap-4 justify-center">
            <Link href='/about'>
              <Button>
                About
              </Button>
            </Link>
            <Menu
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
              open={menuVis}
            >
              <MenuHandler>
                <Link href='/store'>
                  <Button onMouseEnter={() => setMenuVis(true)}>
                    Store
                  </Button>
                </Link>
              </MenuHandler>
              <MenuList onMouseLeave={() => setMenuVis(false)}>
                <MenuItem> 1</MenuItem>
                <MenuItem> 2</MenuItem>
                <MenuItem> 2</MenuItem>
              </MenuList>
            </Menu>
        </div>
          <Link href='/cart'>
            <Button className="mr-0">
              <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </Button>
          </Link>
      </div>
    </Navbar>
  )
}
