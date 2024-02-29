import React from 'react'
import {motion} from "framer-motion";
import {datalist, olVariants, liVariants} from './constants.ts'

interface ListElementInterface {
  name: string
}

// *** This is the React Component called in the list
// Pay attention to the ref type. Typescript is a b*tch
const ListElement = React.forwardRef(
  (props: ListElementInterface, ref: React.ForwardedRef<HTMLLIElement>) => {
    return (
      <li ref={ref}>{props.name}</li>
    )
  })


export const ReactList = () => {

  // You need to create the Motion component.
  // Not possible to do something like <motion.ListElement...
  const FramerMotionListElement = motion(ListElement)

  return (
    <>
      <motion.ol
        variants={olVariants}
        initial="hidden"
        animate="show"
        className="simplelist"
      >
        {
          datalist.map((el) => {
            return (
              <FramerMotionListElement
                variants={liVariants}
                key={el.name}
                name={`React-${el.name}`}
              />
            )
          })
        }
      </motion.ol>
    </>
  )
}
