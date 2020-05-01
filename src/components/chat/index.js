import React from 'react'

import Banner from '../common/banner'
import PageBase from '../common/pageBase'
import { useStyles } from '../common/useStyles'

function Chat() {
    const classes = useStyles()

    return (
        <PageBase title="Chat de Mensagens">
            <div className={classes.trow}>
                <div className={classes.tcol}>
                    Página do Chat
                </div>
            </div>
        </PageBase>
    )
}

export default Chat