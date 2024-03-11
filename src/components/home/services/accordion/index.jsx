// IMPORTS ATOMS
import Link from "@/atoms/link/jsx/index.jsx"
import PrimaryButton from "@/atoms/button/primary/jsx/index.jsx"

// IMPORTS REACT
import { useState } from "react"

// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

const Accordion = ( props ) => {

    const {

        expand,
        index,
        updateExpand,
        value

    } = props

    const isOpen = index === expand

    return (
        <div className="py-6 md:py-8 px-8 md:px-12 bg-white z-30 my-8 rounded-[42px]">
            <motion.section
                initial={ false }
                onClick={() => updateExpand( isOpen ? false : index )}
                className="cursor-pointer flex items-center justify-between gap-4 event"
                un9n-event={ "service-" + index }
            >
                <div className="flex-wrap">
                    <p className="text-3xl font-black text-[#071641]">{ value.title }</p>
                </div>
                <div className="w-6 aspect-square">
                    <motion.img
                        alt="add icon"
                        className={`${ isOpen ? "rotate-45": "rotate-0" } w-6 h-6 transition-all duration-300`}
                        src="/icons/add.svg"
                    />
                </div>
            </motion.section>
            <div>
                <AnimatePresence initial={ false }>
                {
                    isOpen &&
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="md:w-[50%] pt-4 md:pt-6 space-y-4 md:space-y-6">
                            <p className="font-proxima_nova text-xl md:text-2xl text-ms_dark_blue md:leading-normal">{ value.description }</p>
                            <Link href={ value.button_link } aria_label={ value.button_text }>
                                <PrimaryButton>{ value.button_text }</PrimaryButton>
                            </Link>
                        </div>
                    </motion.div>
                }
                </AnimatePresence>
            </div>
        </div>
    )

}
const Service = ( props ) => {

    const { data } = props

    const [ expand, updateExpand ] = useState( 0 )
    return (
        <section>
            {

                data.map( ( value, index ) => {

                    return (
                        <Accordion expand={ expand } updateExpand={ updateExpand } value={ value } index={ index } key={ "service" + index } />
                    )

                })

            }
        </section>
    )

}

export default Service
