import React, { useState } from 'react'
export const Fun = (Cmp) => {
  const [cnt, setCnt] = useState(0)
  return (props) => {

    const handleClick = () => {
      setCnt(cnt + 1)
    }
    const handleHover = () => {
      setCnt(cnt + 1)
    }
    return (
      <> <p>{cnt}</p>
        {props.fn === 'click' ? <div onClick={handleClick}>
          <Cmp {...props}></Cmp>
        </div> :
          <span onMouseOver={handleHover}>
            <Cmp {...props}></Cmp>
          </span>}

      </>

    )
  }
}
