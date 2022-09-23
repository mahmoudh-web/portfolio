import { useRouter } from 'next/router'

const Lab = () => {
    
    const router = useRouter()
    const { id } = router.query
  
    return (
    <div>
        <p>Post: {id}</p>
    </div>
  )
}

export default Lab