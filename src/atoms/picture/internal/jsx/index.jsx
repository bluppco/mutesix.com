const PictureInternal = ( props ) => {

    // PROPS
    const {

        alternative_text,
        source

    } = props

    return(
        <picture className="w-full h-full">
            <source media="(max-width: 375px)" srcSet={ source } />
            <source media="(max-width: 640px)" srcSet={ source } />
            <img
                alt={ alternative_text }
                className="w-full h-full object-cover"
                src={ source }
            />
        </picture>
    )

}

export default PictureInternal
