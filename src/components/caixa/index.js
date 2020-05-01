import React from 'react'

import Banner from '../common/banner'
import PageBase from '../common/pageBase'
import { useStyles } from '../common/useStyles'

function Caixa() {
    const classes = useStyles()

    return (
        <PageBase title="Financeiro">
            <div className={classes.trow}>
                <div className={classes.tcol}>
                    Página do Administrador financeiro
                </div>
            </div>
        </PageBase>
    )
}

export default Caixa