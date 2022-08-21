import {useEffect, useState} from 'react'

const useDidMount = (cb:()=>void) => {
  const [mount,setMount] = useState < boolean > (false)
  useEffect(() => {
    mount && cb()
    setMount(true)
  }, [mount])
}

export default useDidMount
