// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react"
import * as p from "@plasmicapp/react-web"
export type LanguageValue = "ru" | "en"
export const LanguageContext = React.createContext<LanguageValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
)

export function useLanguage() {
  return React.useContext(LanguageContext)
}

export default LanguageContext
/* prettier-ignore-end */
