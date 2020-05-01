import React from 'react'

import Banner from '../common/banner'
import PageBase from '../common/pageBase'
import { useStyles } from '../common/useStyles'

function Galeria() {
    const classes = useStyles()

    return (
        <PageBase title="Galeria de Documentos">
            <div className={classes.trow}>
                <div className={classes.tcol}>
                    Página da Galeria de Documents
                </div>
            </div>
        </PageBase>
    )
}

export default Galeria