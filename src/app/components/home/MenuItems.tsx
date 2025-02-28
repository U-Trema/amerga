import {navListCVA, tabsTabCVA} from "@/libs/ui/nav/nav.classes";
import {Menu, Skeleton, TabsList, TabsTab, UnstyledButton} from "@mantine/core";
import {ArrowDown} from "@/libs/ui/icons/ArrowDown";
import {useMenu} from '@/libs/queries/nav/useNav'

export const MenuItems = () => {
  const { data, isSuccess } = useMenu()

  console.log(data)

  if (!isSuccess) {
    return (
      <TabsList className={navListCVA.root()} grow={false}>
        <TabsTab
          value="insurances"
          className={tabsTabCVA.root()}
          rightSection={<ArrowDown/>}
        >
          <Skeleton height={8} radius="xl" width='80px' />
        </TabsTab>

        <TabsTab value="contact" className={tabsTabCVA.root()}>
          <Skeleton height={8} radius="xl" width='80px' />
        </TabsTab>

        <TabsTab value="ekip" className={tabsTabCVA.root()}>
          <Skeleton height={8} radius="xl" width='80px' />
        </TabsTab>
      </TabsList>
    )
  }

  return (
    <TabsList className={navListCVA.root()} grow={false}>
      <TabsTab
        value="insurances"
        className={tabsTabCVA.root()}
        rightSection={<ArrowDown />}
      >
        <Menu shadow="md" offset={20} position='bottom'>
          <Menu.Target>
            <UnstyledButton className='!text-soft-black !text-sm !font-semibold !rounded-[10px] hover:!bg-grey-secondary' component='span'>
              Assurances
            </UnstyledButton>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item className='hover:!bg-grey-secondary !pl-5 !pr-10'>
              Assurances auto
            </Menu.Item>

            <Menu.Item className='hover:!bg-grey-secondary !pl-5 !pr-10'>
              Assurance habitation
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </TabsTab>

      <TabsTab value="contact" className={tabsTabCVA.root()}>
        Contact
      </TabsTab>

      <TabsTab value="ekip" className={tabsTabCVA.root()}>
        Nous connaître
      </TabsTab>
    </TabsList>
  )
}
