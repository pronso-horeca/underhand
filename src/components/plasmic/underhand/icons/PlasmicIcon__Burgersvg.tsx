// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type BurgersvgIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function BurgersvgIcon(props: BurgersvgIconProps) {
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
          "M256 0c-75.045.003-104.111 54.669-105 55.458V121H91v15c0 58.524-7.146 94.495-14.712 132.577C68.772 306.407 61 345.524 61 407v105h390V407c0-61.476-7.771-100.593-15.287-138.423C428.146 230.495 421 194.524 421 136v-15h-60V55.458C359.967 54.54 330.835-.003 256 0zm-75 64.763C197.41 42.918 225.099 30.001 256 30c30.9-.001 58.587 12.916 75 34.763V121H181zM391.159 151c1.142 53.026 8.242 88.763 15.128 123.423C413.854 312.505 421 348.476 421 407v75H91v-75c0-58.524 7.146-94.495 14.712-132.577 6.886-34.66 13.987-70.397 15.128-123.423H151v30h30v-30h150v30h30v-30z"
        }
      ></path>

      <path
        d={
          "M301 242h-90c-40.153 0-73.032 31.719-74.909 71.417C126.84 321.664 121 333.66 121 347s5.84 25.336 15.091 33.583C137.968 420.281 170.847 452 211 452h90c40.154 0 73.032-31.719 74.909-71.416C385.16 372.336 391 360.34 391 347s-5.84-25.336-15.091-33.584C374.032 273.719 341.154 242 301 242zm-90 30h90c19.555 0 36.228 12.542 42.42 30H168.58c6.192-17.458 22.865-30 42.42-30zm90 150h-90c-19.555 0-36.228-12.542-42.42-30.01h174.84C337.228 409.458 320.555 422 301 422zm60-75c0 8.271-6.729 15-15 15H166c-8.271 0-15-6.729-15-15s6.729-15 15-15h180c8.271 0 15 6.729 15 15z"
        }
      ></path>
    </svg>
  )
}

export default BurgersvgIcon
/* prettier-ignore-end */
