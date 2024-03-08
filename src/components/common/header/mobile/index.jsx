// IMPORTS ATOMS
import Link from "@/atoms/link/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

const HeaderMobile = ( props ) => {

    // GET PROPS
    const { header_data } = props

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className="md:hidden top-12 fixed z-50 w-full bg-white p-4 border-b border-b-gray-100">
            <nav>
                <div className="flex justify-between items-center z-30 relative">
                    <Link href="/" aria_label="mutesix logo">
                        <div className="h-8 w-full">
                            <PictureInternalContain
                                alternative_text="mutesix logo"
                                source="/logo/mutesix-logo.avif"
                            />
                        </div>
                    </Link>
                    <div onClick={ () => updateOpen( !isOpen ) }>
                        {

                            isOpen &&
                            <div className="w-6 aspect-square">
                                <PictureInternalContain
                                    alternative_text="close icon"
                                    source="/icons/close.svg"
                                />
                            </div>

                        }
                        {

                            !isOpen &&
                            <div className="w-6 aspect-square">
                                <PictureInternalContain
                                    alternative_text="menu icon"
                                    source="/icons/menu.svg"
                                />
                            </div>

                        }
                    </div>
                </div>
                <AnimatePresence initial={ false }>
                    {

                        <motion.div
                            key="content"
                            initial="collapsed"
                            animate={ isOpen ? "open" : "collapsed" }
                            exit="collapsed"
                            variants={{
                                open: { opacity: 1, display: "block" },
                                collapsed: { opacity: 0, display: "none" }
                            }}
                            transition={{ duration: 0.3 }}
                            className="grow !h-[calc(100vh-6rem)] bg-white !p-0"
                        >
                            <ul className="flex flex-col gap-8 items-center justify-center h-full z-10">
                                {

                                    header_data.map( ( value ) => {

                                        return(
                                            <li className="font-proxima_nova">
                                                <Link href={ value.data.slug } aria_label={ value.data.title }>{ value.data.title }</Link>
                                            </li>
                                        )

                                    })

                                }
                            </ul>
                        </motion.div>

                    }
                </AnimatePresence>
            </nav>
        </header>
    )

}

export default HeaderMobile
