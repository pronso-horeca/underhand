// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type MenusvgIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function MenusvgIcon(props: MenusvgIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M458.917 85.664a7.5 7.5 0 00-7.5 7.5v393.691c0 5.594-4.551 10.145-10.145 10.145H70.728c-5.594 0-10.145-4.551-10.145-10.145v-68.729c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v68.729c0 13.865 11.28 25.145 25.145 25.145h370.544c13.865 0 25.145-11.279 25.145-25.145V93.164a7.5 7.5 0 00-7.5-7.5zM441.272 0H70.728C56.863 0 45.583 11.279 45.583 25.145v357.982c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5V25.145C60.583 19.551 65.134 15 70.728 15h370.544c5.594 0 10.145 4.551 10.145 10.145v33.02c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-33.02C466.417 11.279 455.137 0 441.272 0z"
        }
      ></path>

      <path
        d={
          "M194.656 138.497h189.458c14.514 0 26.321-11.808 26.321-26.321s-11.808-26.321-26.321-26.321H194.656c-14.514 0-26.321 11.808-26.321 26.321s11.807 26.321 26.321 26.321zm0-37.643h189.458c6.243 0 11.321 5.079 11.321 11.321s-5.079 11.321-11.321 11.321H194.656c-6.243 0-11.321-5.079-11.321-11.321s5.078-11.321 11.321-11.321zm0 137.677h189.458c14.514 0 26.321-11.808 26.321-26.321s-11.808-26.321-26.321-26.321H194.656c-14.514 0-26.321 11.808-26.321 26.321s11.807 26.321 26.321 26.321zm0-37.642h189.458c6.243 0 11.321 5.079 11.321 11.321s-5.079 11.321-11.321 11.321H194.656c-6.243 0-11.321-5.079-11.321-11.321s5.078-11.321 11.321-11.321zm0 137.676h189.458c14.514 0 26.321-11.808 26.321-26.321s-11.808-26.321-26.321-26.321H194.656c-14.514 0-26.321 11.808-26.321 26.321s11.807 26.321 26.321 26.321zm0-37.642h189.458c6.243 0 11.321 5.079 11.321 11.321s-5.079 11.321-11.321 11.321H194.656c-6.243 0-11.321-5.079-11.321-11.321s5.078-11.321 11.321-11.321zm0 137.678h189.458c14.514 0 26.321-11.808 26.321-26.321s-11.808-26.321-26.321-26.321H194.656c-14.514 0-26.321 11.808-26.321 26.321s11.807 26.321 26.321 26.321zm0-37.643h189.458c6.243 0 11.321 5.079 11.321 11.321s-5.079 11.321-11.321 11.321H194.656c-6.243 0-11.321-5.079-11.321-11.321s5.078-11.321 11.321-11.321zm-66.77-262.461c14.514 0 26.321-11.808 26.321-26.321S142.4 85.854 127.886 85.854s-26.321 11.808-26.321 26.321 11.808 26.322 26.321 26.322zm0-37.643c6.243 0 11.321 5.079 11.321 11.321s-5.079 11.321-11.321 11.321-11.321-5.079-11.321-11.321 5.079-11.321 11.321-11.321zm0 137.677c14.514 0 26.321-11.808 26.321-26.321s-11.808-26.321-26.321-26.321-26.321 11.808-26.321 26.321 11.808 26.321 26.321 26.321zm0-37.642c6.243 0 11.321 5.079 11.321 11.321s-5.079 11.321-11.321 11.321-11.321-5.079-11.321-11.321 5.079-11.321 11.321-11.321zm0 137.676c14.514 0 26.321-11.808 26.321-26.321s-11.808-26.321-26.321-26.321-26.321 11.808-26.321 26.321 11.808 26.321 26.321 26.321zm0-37.642c6.243 0 11.321 5.079 11.321 11.321s-5.079 11.321-11.321 11.321-11.321-5.079-11.321-11.321 5.079-11.321 11.321-11.321zm0 137.678c14.514 0 26.321-11.808 26.321-26.321s-11.808-26.321-26.321-26.321-26.321 11.808-26.321 26.321 11.808 26.321 26.321 26.321zm0-37.643c6.243 0 11.321 5.079 11.321 11.321s-5.079 11.321-11.321 11.321-11.321-5.079-11.321-11.321 5.079-11.321 11.321-11.321z"
        }
      ></path>
    </svg>
  )
}

export default MenusvgIcon
/* prettier-ignore-end */