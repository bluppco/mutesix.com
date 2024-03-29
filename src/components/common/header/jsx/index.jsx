// IMPORTS LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

// IMPORTS COMPONENTS
import HeaderMobile from "@/components/common/header/mobile/index.jsx"

// IMPORTS ATOMS
import Link from "@/atoms/link/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"
import PrimaryButton from "@/atoms/button/primary/jsx/index.jsx"

// IMPORTS HEADER COLLECTION
import { getCollection } from "astro:content"
let header_data = await getCollection("header")
header_data = header_data.sort((a, b) => a.data.order - b.data.order)

const Header = ( props ) => {

    return(
        <>
            <header className="py-4 hidden md:flex items-center fixed top-10 z-[100] w-full bg-white border-b border-zinc-200">
                <Container>
                    <nav className="flex items-center justify-between">
                        <div className="w-48 object-cover">
                            <Link href="/" aria-label="mutesix logo">
                                <PictureInternalContain
                                    alternative_text="mutesix logo"
                                    source="/logo/mutesix-logo.avif"
                                />
                            </Link>
                        </div>
                        <div className="flex gap-10 items-center">
                            <ul className="flex gap-8">
                                {

                                    header_data.map( ( item, index ) => {

                                        return (
                                            <li className="text-sm font-proxima_nova font-extrabold tracking-widest uppercase flex items-center gap-2 relative group cursor-pointer py-4" key={ index }>
                                                <Link
                                                    aria-label={"explore " + item.data.title }
                                                    href={ "/" + item.data.slug }
                                                >
                                                    { item.data.title }
                                                </Link>
                                                {

                                                    item.data.has_dropdown &&
                                                    <div>
                                                        <div className="size-3">
                                                            <PictureInternalContain
                                                                alternative_text="dropdown menu icon"
                                                                source="/icons/dropdown.svg"
                                                            />
                                                        </div>
                                                        {

                                                            item.data.title === "Services" &&
                                                            <div className="hidden group-hover:flex gap-10 absolute p-10 rounded bg-white -left-10 z-20 top-12 w-[540px]">
                                                                <div>
                                                                    <div className="font-proxima_nova font-bold text-xl text-ms_dark_blue mb-2 capitalize">{ item.data.title_one }</div>
                                                                    <div className="flex flex-col">
                                                                        {

                                                                            item.data.marketing_services.map( ( sub_item, sub_item_index ) => {

                                                                                return(
                                                                                    <div className="group w-fit" key={ sub_item_index }>
                                                                                        <div className="py-2">
                                                                                            <Link
                                                                                                aria-label={ "explore" + sub_item.title }
                                                                                                href={ "/" + item.data.slug + "/" + sub_item.slug }
                                                                                            >
                                                                                                <span className="font-proxima_nova font-light text-ms_dark_blue text-lg capitalize">{ sub_item.title }</span>
                                                                                            </Link>
                                                                                        </div>
                                                                                        {/*<div class="w-0 bg-ms_dark_blue group-hover:w-full h-[1px] transition-all duration-300 ease-in"></div>*/}
                                                                                    </div>
                                                                                    )

                                                                            })

                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-proxima_nova font-bold text-xl text-ms_dark_blue mb-2 capitalize">{ item.data.title_two }</div>
                                                                        <div className="flex flex-col">
                                                                            {

                                                                                item.data.creative_services.map( ( sub_item, sub_item_index ) => {

                                                                                    return(
                                                                                        <div className="group w-fit" key={ sub_item_index }>
                                                                                            <div className="py-2">
                                                                                                <Link
                                                                                                    aria-label={ "explore" + sub_item.title }
                                                                                                    href={ "/" + item.data.slug + "/" + sub_item.slug }
                                                                                                >
                                                                                                    <span className="font-proxima_nova font-light text-ms_dark_blue text-lg capitalize">{ sub_item.title }</span>
                                                                                                </Link>
                                                                                            </div>
                                                                                        {/*<div class="w-0 bg-ms_dark_blue group-hover:w-full h-[1px] transition-all duration-300 ease-in"></div>*/}
                                                                                        </div>
                                                                                    )

                                                                                })

                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                        }
                                                        {

                                                            item.data.title !== "Services" &&
                                                            <div className="hidden group-hover:block group-hover:flex-col absolute p-10 rounded bg-white -left-10 z-20 top-12 w-60 gap-2">
                                                                <div className="flex flex-col">
                                                                    {

                                                                        item.data.items.map( ( sub_item, sub_item_index ) => {

                                                                            return(
                                                                                <div className="group w-fit" key={ sub_item_index }>
                                                                                    <div className="py-2">
                                                                                        <Link
                                                                                            aria-label={ "explore" + sub_item.title }
                                                                                            href={ "/" + item.data.slug + "/" + sub_item.slug }
                                                                                        >
                                                                                            <span className="font-proxima_nova font-light text-ms_dark_blue text-lg capitalize">{ sub_item.title }</span>
                                                                                        </Link>
                                                                                    </div>
                                                                                    {/*<div class="w-0 bg-ms_dark_blue group-hover:w-full h-[1px] transition-all duration-300 ease-in"></div>*/}
                                                                                </div>
                                                                                )

                                                                        })

                                                                    }
                                                                </div>
                                                            </div>

                                                        }
                                                    </div>

                                                }
                                            </li>
                                        )

                                    })

                                }
                            </ul>
                            <Link href="/contact" aria_label="Let's Talk">
                                <PrimaryButton>Let's Talk</PrimaryButton>
                            </Link>
                        </div>
                    </nav>
                </Container>
            </header>
            <HeaderMobile
                header_data={ header_data }
            />
        </>
    )

}

export default Header
