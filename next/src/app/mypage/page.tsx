import { Avatar, Box, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { fetchPostDataByUser } from '@/utils/fetchPostDataByUser'
import { PostType } from '@/types/types'
import { checkLoginStatus } from '@/utils/checkLoginStatus'
import { redirect } from 'next/navigation'

export default async function Mypage() {
  const user = await checkLoginStatus()
  const my_posts = await fetchPostDataByUser()

  return (
    <Stack spacing={6}>
      <HStack>
        <Avatar size="xs" />
        <Text fontSize="xs">{user.name || `user_${user.alias_id}`}</Text>
      </HStack>
      <HStack spacing={2}>
        <Box as={'span'} fontSize="sm">TOTAL</Box>
        <Box as={'span'} fontSize="xl" fontWeight="bold">{my_posts.length}</Box>
      </HStack>
      <SimpleGrid templateColumns="repeat(auto-fill, minmax(115px, 1fr))" spacingX={2} spacingY={4}>
        {my_posts.map((post: PostType) => (
          <PostCardSmall key={post.alias_id} post={post} />
        ))}
      </SimpleGrid>
    </Stack>
  )
}
