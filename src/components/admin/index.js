import React from 'react'

import Banner from '../common/banner'
import PageBase from '../common/pageBase'
import { useStyles } from '../common/useStyles'

function Admin() {
    const classes = useStyles()

    return (
        <PageBase title="Administrador">
            <div className={classes.trow}>
                <div className={classes.tcol}>
                    Página do Administrador
                </div>
            </div>
        </PageBase>
    )
}

export default Admin