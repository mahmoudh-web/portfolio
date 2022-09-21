import { useRouter } from 'next/router'

const Lab = ({data}) => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Lab