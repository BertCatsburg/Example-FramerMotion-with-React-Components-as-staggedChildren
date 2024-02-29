export const datalist = [
  {name: 'John'},
  {name: "Alex"},
  {name: "Michael"},
  {name: 'Sandra'},
  {name: 'Mary'}
]

export const olVariants = {
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export const liVariants = {
  hidden: {opacity: 0, x: 100, transition: {duration: 0.5}},
  show: {opacity: 1, x: 0, transition: {duration: 0.5}}
}
