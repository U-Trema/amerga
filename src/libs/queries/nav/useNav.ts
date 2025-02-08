import { useQuery } from '@tanstack/react-query'
import {createClient} from "@/prismicio";

const fetchMenu = async (): Promise<any> => {
  const client = createClient()
  const document = await client.getSingle("menu");
  return document.data
}

const useMenu = () => {
  return useQuery({
    queryKey: ['posts', 'get_nav'],
    queryFn: () => fetchMenu(),
    staleTime: Infinity,
  })
}

export { useMenu, fetchMenu }
