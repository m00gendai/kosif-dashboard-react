function Component_SwitchViews(){

    return(
        <div id="component_switchviews">
            <div id="component_switchviews">
                <button className="component_switchviews_option" onClick={() => window.open("https://www.skybriefing.com/portal/delegate/dabs?today")}>
                    DABS Today
                </button>
            </div>
            <div id="component_switchviews">
                <button className="component_switchviews_option" onClick={() => window.open("https://www.skybriefing.com/portal/delegate/dabs?tomorrow")}>
                    DABS Tomorrow
                </button>
            </div>
        </div>
    )
}

export default Component_SwitchViews