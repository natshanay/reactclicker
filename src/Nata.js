import React from 'react'

const Nata = () => {
    const [click, setClick] = React.useState(10)

    const handleclick = ()=> {
        
        setClick((prev)=>
                prev+10
        )
        
    }
    const handleclick1 = ()=> {
        setClick(click=>click-10)
    }
   
  return (
    <div>
        <h1>{click}</h1>

        <button onClick={handleclick}>
            add by 1 
        </button>
        <br/>

        <button onClick={handleclick1}>
            dec by 1 
        </button>
    </div>
  )
}

export default Nata