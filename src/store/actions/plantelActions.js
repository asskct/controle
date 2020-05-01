const ativos =  [
    { 
        name: "Bob Marley",
        avatar: "1ZOE2yrsCTSEZHEXKRMPbRiynp5S3z4mC",
        position: "Goleiro"        
    },
    { 
        name: "Billy Wilman",
        avatar: "1HOCn0erBE6nXePMBhOU-767goDsuPXKP",
        position: "Zagueiro"        
    },
    { 
        name: "Charles Chaplim",
        avatar: "1lJ5tmi6ux58WsTNNVeiSOdAhXJMhdBBn",
        position: "Zagueiro"        
    },
    { 
        name: "Cristiano",
        avatar: "1e92bW1Y1GoANuvYKsOufJgqW1Q-tgZBh",
        position: "Atacante"        
    },
    { 
        name: "Dilma",
        avatar: "1m-07tYXjeHj7_6Ex1a4LrjBfHJW4llgm",
        position: "Atacante"        
    },
    { 
        name: "Albert Einstein",
        avatar: "13Y-DL5TWB0Tm9NHb1_f4T98pqKk-MHQX",
        position: "Armador"        
    },
    { 
        name: "Henry Ford",
        avatar: "1sO8aPic_6w7y1nHKl8i9NcwSQqP0RYIi",
        position: "Armador"        
    },
    { 
        name: "Sigmund Freud",
        avatar: "19qf6HA_wDrPjQbP0odzbegnqDX-AHMnb",
        position: "Volante"        
    },
    { 
        name: "Gandi",
        avatar: "18ks052PwzYLbPUKN_ipiGuZNeGYfDC9H",
        position: "Volante"        
    },
    { 
        name: "Lampião",
        avatar: "1vEubIu7gW7U6utyKKxb4Q4GrBt5lq320",
        position: "Lateral"        
    },
    { 
        name: "Lennin",
        avatar: "1ALsEWNn8GN9btZjP_upGyTDnVFiQNuXG",
        position: "Lateral"        
    }, 
]

export function Ativo() {
    return (dispatch) => {
        dispatch({ type: 'AXIOS_SUCCESS', ativos })        
    }
}