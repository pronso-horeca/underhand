// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: azVx9DM13tZbR2SGxpPJBW
// Component: RwQZi7eZFd
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
import * as sty from "./PlasmicHeader.module.css" // plasmic-import: RwQZi7eZFd/css

import Instagram2SvgIcon from "./icons/PlasmicIcon__Instagram2Svg" // plasmic-import: 9tosiFRmf/icon
import FacebooksvgIcon from "./icons/PlasmicIcon__Facebooksvg" // plasmic-import: Flw25NYGX/icon
import HamburgerNavigationIcon from "./icons/PlasmicIcon__HamburgerNavigation" // plasmic-import: cwJrUItrF/icon

export type PlasmicHeader__VariantMembers = {}

export type PlasmicHeader__VariantsArgs = {}
type VariantPropType = keyof PlasmicHeader__VariantsArgs
export const PlasmicHeader__VariantProps = new Array<VariantPropType>()

export type PlasmicHeader__ArgsType = {}
type ArgPropType = keyof PlasmicHeader__ArgsType
export const PlasmicHeader__ArgProps = new Array<ArgPropType>()

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">
  logo?: p.Flex<"div">
  freeBox?: p.Flex<"div">
}

export interface DefaultHeaderProps {
  className?: string
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs
  args: PlasmicHeader__ArgsType
  overrides: PlasmicHeader__OverridesType
  dataFetches?: PlasmicHeader__Fetches
  forNode?: string
}) {
  const { variants, args, overrides, forNode, dataFetches } = props

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.PlasmicLink
        className={classNames(defaultcss.a, sty.link__gCtRw)}
        component={Link}
        href={"/" as const}
        platform={"gatsby"}
      >
        <div
          data-plasmic-name={"logo"}
          data-plasmic-override={overrides.logo}
          className={classNames(defaultcss.all, sty.logo)}
        />
      </p.PlasmicLink>

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        <p.PlasmicLink
          className={classNames(defaultcss.a, sty.link__o6QJm)}
          component={Link}
          href={"https://www.instagram.com/underhand.bar" as const}
          platform={"gatsby"}
        >
          <Instagram2SvgIcon
            className={classNames(defaultcss.all, sty.svg__f34Sz)}
            role={"img"}
          />
        </p.PlasmicLink>

        <p.PlasmicLink
          className={classNames(defaultcss.a, sty.link__tAoLp)}
          component={Link}
          href={"https://www.facebook.com/underhand.bar" as const}
          platform={"gatsby"}
        >
          <FacebooksvgIcon
            className={classNames(defaultcss.all, sty.svg__myvNy)}
            role={"img"}
          />
        </p.PlasmicLink>
      </p.Stack>

      {false ? (
        <p.PlasmicLink
          className={classNames(defaultcss.a, sty.link__aeRgg)}
          component={Link}
          href={"#navigation" as const}
          platform={"gatsby"}
        >
          <HamburgerNavigationIcon
            className={classNames(defaultcss.all, sty.svg__jV1R)}
            role={"img"}
          />
        </p.PlasmicLink>
      ) : null}
    </div>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  root: ["root", "logo", "freeBox"],
  logo: ["logo"],
  freeBox: ["freeBox"],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number]
type NodeDefaultElementType = {
  root: "div"
  logo: "div"
  freeBox: "div"
}

type ReservedPropsType = "variants" | "args" | "overrides"
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs
    args?: PlasmicHeader__ArgsType
    overrides?: NodeOverridesType<T>
    dataFetches?: PlasmicHeader__Fetches
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps,
    })

    const { dataFetches } = props

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader"
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`
  }
  return func
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps,
  }
)

export default PlasmicHeader
/* prettier-ignore-end */
