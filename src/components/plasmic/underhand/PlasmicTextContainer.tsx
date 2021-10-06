// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: azVx9DM13tZbR2SGxpPJBW
// Component: s5p5v6fIqv
import * as React from "react"

import { Link, GatsbyLinkProps as LinkProps } from "gatsby"

import * as p from "@plasmicapp/react-web"

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"

import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_underhand.module.css" // plasmic-import: azVx9DM13tZbR2SGxpPJBW/projectcss
import * as sty from "./PlasmicTextContainer.module.css" // plasmic-import: s5p5v6fIqv/css

export type PlasmicTextContainer__VariantMembers = {}

export type PlasmicTextContainer__VariantsArgs = {}
type VariantPropType = keyof PlasmicTextContainer__VariantsArgs
export const PlasmicTextContainer__VariantProps = new Array<VariantPropType>()

export type PlasmicTextContainer__ArgsType = {}
type ArgPropType = keyof PlasmicTextContainer__ArgsType
export const PlasmicTextContainer__ArgProps = new Array<ArgPropType>()

export type PlasmicTextContainer__OverridesType = {
  root?: p.Flex<"div">
}

export interface DefaultTextContainerProps {
  className?: string
}

function PlasmicTextContainer__RenderFunc(props: {
  variants: PlasmicTextContainer__VariantsArgs
  args: PlasmicTextContainer__ArgsType
  overrides: PlasmicTextContainer__OverridesType
  dataFetches?: PlasmicTextContainer__Fetches
  forNode?: string
}) {
  const { variants, args, overrides, forNode, dataFetches } = props

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        defaultcss.__wab_text,
        projectcss.root_reset,
        sty.root
      )}
    >
      {
        "Наші коктейлі смачні — всім зрозуміло і це легко перевірити.\n\nАле мало хто знає про коктейлі стільки як наші майстри — в цьому наша унікальність — \nти п’єш коктейль і дізнаєшся його історію. \n\nПрийти в Underhand — дізнатись щось нове про себе через призму цікавого поєднання смаків твого персонального коктейля — бармен розуміє вас і знає, що тобі потрібно саме зараз"
      }
    </div>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  root: ["root"],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number]
type NodeDefaultElementType = {
  root: "div"
}

type ReservedPropsType = "variants" | "args" | "overrides"
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTextContainer__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTextContainer__VariantsArgs
    args?: PlasmicTextContainer__ArgsType
    overrides?: NodeOverridesType<T>
    dataFetches?: PlasmicTextContainer__Fetches
  } & Omit<PlasmicTextContainer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTextContainer__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key }
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTextContainer__ArgProps,
      internalVariantPropNames: PlasmicTextContainer__VariantProps,
    })

    const { dataFetches } = props

    return PlasmicTextContainer__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicTextContainer"
  } else {
    func.displayName = `PlasmicTextContainer.${nodeName}`
  }
  return func
}

export const PlasmicTextContainer = Object.assign(
  // Top-level PlasmicTextContainer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTextContainer
    internalVariantProps: PlasmicTextContainer__VariantProps,
    internalArgProps: PlasmicTextContainer__ArgProps,
  }
)

export default PlasmicTextContainer
/* prettier-ignore-end */