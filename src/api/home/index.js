export const homeAPI = async ( ENVIRONMENT, ENDPOINT ) => {

    // NETWORK CALL TO GET DATA
    const network_data = await fetch( ENDPOINT + "/home" )
    const data_json = await network_data.json()

    const {

        home,
        meta,
        services,
        work

    } = data_json.data

    let home_data = {

        // HOME PROPS
        hero : "",
        about : "",
        insights : "",
        work : "",
        clients : "",
        difference : ""

    }
    home.map( ( data ) => {

        if( data.slug === "hero" )
            home_data.hero = data
        else if( data.slug === "about" )
            home_data.about = data
        else if( data.slug === "insights" )
            home_data.insights = data
        else if( data.slug === "work" )
            home_data.work = data
        else if( data.slug === "clients" )
            home_data.clients = data
        else if( data.slug === "difference" )
            home_data.difference = data

    })

    return { home_data, meta, services, work }

}
