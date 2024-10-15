import React from 'react'

type setProductColorParams = {
  color: string[],
  productColor: string
  setProductColor: string,
}

const SelectProductColor = ({colors, productColor, setProductColor}: setProductColorParams) => {
  return (
    <div className='mt-3'>
        {colors.map((color) => {
          return (
            <button
              key={color}
              type='button'
              className={`rounded-full w-6 h-6 mr-2 border-2  ${
                color === productColor && ' border-primary'
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setProductColor(color)}
            ></button>
          );
        })}
      </div>
  )
}

export default SelectProductColor
