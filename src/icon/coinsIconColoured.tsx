import React from 'react'

import { color } from '../_utils/branding'
import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

const CoinsIconColoured = (props: Icon) => (
  <BaseIcon {...props} viewBox="0 0 49 48">
    <g>
      <path
        d="M21.663 21.858c2.511 0 4.747-.516 6.33-1.307 1.65-.825 2.304-1.788 2.304-2.58v-3.13c-.447.344-.963.654-1.48.929-1.891.963-4.47 1.514-7.223 1.514-2.786 0-5.331-.55-7.223-1.514a8.999 8.999 0 01-1.479-.929v3.165h.035c3.405 0 6.535 1.479 8.736 3.852zM27.064 27.361v-2.786-.068-.138c0-.585.137-1.135.412-1.617-1.307.482-2.82.791-4.437.895a11.405 11.405 0 011.651 4.368 16.653 16.653 0 002.373-.654z"
        fill={color.lightMidnightGreen}
      />
      <path
        d="M15.162 14.084c1.582.791 3.853 1.307 6.398 1.307 2.545 0 4.816-.516 6.398-1.307 1.65-.825 2.304-1.788 2.304-2.58 0-.79-.653-1.754-2.304-2.58-1.582-.79-3.853-1.306-6.398-1.306-2.545 0-4.816.516-6.398 1.307-1.65.825-2.304 1.788-2.304 2.58 0 .79.653 1.788 2.304 2.58zM24.002 34.55c1.135-.171 2.202-.412 3.096-.756v-2.786-.069V29.288c-.688.206-1.41.413-2.201.55v.172c0 1.617-.345 3.13-.895 4.54zM28.921 24.37c0 .79.654 1.753 2.305 2.579 1.582.791 3.852 1.307 6.397 1.307 2.546 0 4.816-.516 6.398-1.307 1.651-.826 2.305-1.789 2.305-2.58 0-.791-.654-1.754-2.305-2.58-1.582-.79-3.852-1.307-6.398-1.307-2.545 0-4.815.516-6.397 1.307-1.651.826-2.305 1.789-2.305 2.58z"
        fill={color.lightMidnightGreen}
      />
      <path
        d="M37.658 30.113c-2.786 0-5.332-.55-7.224-1.513a9.002 9.002 0 01-1.479-.93v3.131c0 .791.654 1.754 2.305 2.58 1.582.79 3.852 1.307 6.398 1.307 2.545 0 4.815-.516 6.398-1.307 1.65-.826 2.304-1.789 2.304-2.58v-3.13c-.447.344-.963.653-1.479.929-1.892.963-4.471 1.513-7.223 1.513z"
        fill={color.lightMidnightGreen}
      />
      <path
        d="M37.658 36.545c-2.786 0-5.332-.55-7.224-1.513a9.009 9.009 0 01-1.479-.929v3.13c0 .792.654 1.755 2.305 2.58 1.582.791 3.852 1.307 6.398 1.307 2.545 0 4.815-.516 6.398-1.307 1.65-.825 2.304-1.788 2.304-2.58v-3.13c-.447.344-.963.654-1.479.929-1.892.963-4.471 1.513-7.223 1.513z"
        fill={color.lightMidnightGreen}
      />
      <path
        d="M23.005 28.222a10.283 10.283 0 00-2.03-4.54 9.918 9.918 0 00-2.132-2.03 10.449 10.449 0 00-5.951-1.926c-5.675 0-10.285 4.609-10.285 10.284 0 5.676 4.61 10.285 10.285 10.285 3.99 0 7.43-2.27 9.15-5.572a9.968 9.968 0 001.135-4.644v-.069c0-.619-.07-1.204-.172-1.788z"
        fill={color.boostBlue}
      />
    </g>
  </BaseIcon>
)

CoinsIconColoured.defaultProps = {
  ...BaseIconDefaultProps,
}

export { CoinsIconColoured }
