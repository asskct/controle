import React from 'react'

import PageBase from '../common/pageBase'
import { useStyles } from '../common/useStyles'
import Banner from '../common/banner'

function Pelada() {
    const classes = useStyles()

    return (
        <PageBase title="Pelada">
            <div className={classes.trow}>
                <div className={classes.tcol}>
                    Página do Administrador
                </div>
            </div>
        </PageBase>
    )
}

export default Pelada
