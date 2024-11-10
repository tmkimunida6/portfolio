import { Box, HStack } from '@chakra-ui/react'
import NavButton from '../../molecules/NavButton'

type NavProps = {
  isIntersecting: boolean
}

const Nav = ({ isIntersecting }: NavProps) => {
  return (
    <Box as="nav" minH="48px">
      <HStack
        spacing={1}
        position={!isIntersecting ? 'fixed' : 'static'}
        bottom={0}
        width="100%"
        zIndex={10}
      >
        <NavButton iconName="FaHome" text="タイムライン" href="/timeline" />
        <NavButton iconName="FaSearch" text="検索" href="/search" />
        <NavButton iconName="FaPenSquare" text="投稿" href="/post" />
        <NavButton iconName="FaUserAlt" text="マイページ" href="/mypage" />
      </HStack>
    </Box>
  )
}

export default Nav
