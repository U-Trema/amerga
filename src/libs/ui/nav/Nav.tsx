"use client"

import {
  Container,
  Flex,
  Grid,
  GridCol,
  Tabs, Text
} from "@mantine/core"
import Link from "next/link"
import {navContainerCVA, navTabCVA, responsiveMenuCVA} from "./nav.classes"
import {BurgerMenu} from "@/libs/ui/icons/BurgerMenu"
import {MenuItems} from "@/app/components/home/MenuItems"
import {useState} from "react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className={`${isOpen ? 'bg-white' : 'bg-transparent'}`}>
      <div className={navContainerCVA.root()}>
        <Grid
          columns={12}
          gutter={0}
          justify='left'
        >
          <GridCol>
            <Flex align="stretch" gap='80px' className='z-20 relative justify-between md:justify-start'>
              <Link href='/'>
                <img
                  src="/amerga-logo_2.gif" alt="Amerga"
                  style={{ width: 100, height: 'auto', display: 'block' }}
                />
              </Link>

              <Tabs
                variant="unstyled"
                defaultValue="insurances"
                className={navTabCVA.root({ opened: isOpen })}
              >
                <MenuItems />
              </Tabs>

              <div onClick={toggleMenu} className='md:hidden flex items-center cursor-pointer z-20'>
                <BurgerMenu />
              </div>
            </Flex>
          </GridCol>
        </Grid>
      </div>

      <Container fluid bg='var(--color-white)' className={responsiveMenuCVA.root({ opened: isOpen })}>
        <Text className='!font-semibold'>Assurances</Text>
        <Text className='!font-semibold'>Contact</Text>
        <Text className='!font-semibold'>Nous connaître</Text>
      </Container>
    </div>
  )
}
