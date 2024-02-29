import {motion} from "framer-motion";
import {liVariants, olVariants, datalist} from './constants.ts'

export const HtmlList = () => {

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
              <motion.li
                variants={liVariants}
                key={el.name}
              >
                Html-{el.name}
              </motion.li>
            )
          })
        }
      </motion.ol>
    </>
  )
}
