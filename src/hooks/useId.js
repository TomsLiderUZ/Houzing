import { useId } from "react"

const uniqueId = ()=>{
    const id = useId()
    return id
}

export default uniqueId