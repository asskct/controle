import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'
import { Paper } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import CameraIcon from '@material-ui/icons/Camera'
import MessageIcon from '@material-ui/icons/Message'
import SettingsIcon from '@material-ui/icons/Settings'

import SportsSoccerIcon from '@material-ui/icons/SportsSoccer'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'

import PageBase from '../common/pageBase'
import MediaCard from './MediaCard'
import { useStyles } from '../common/useStyles'
import ContainerButton from '../common/containerButton'
import Banner from '../common/banner'

export default function Home() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [location, setLocation] = useState(false)
    const [weather, setWeather] = useState(false)
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)

    let getWeather = async (lat, long) => {
        let res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                lat: lat,
                lon: long,
                appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                lang: 'pt',
                units: 'metric',
                cnt: 7
            }
        });
        setWeather(res.data);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            setLocation(true)
        },
            err => console.log('Mensagem:', err), {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
        })
    }, [])

    useEffect(() => {
        if (location)
            getWeather(latitude, longitude)
    }, [location, latitude, longitude])

    const items = [
        {
            id: 1,
            title: 'A imagem é meramemte Ilustrativa',
            image: 'https://docs.google.com/uc?id=1C3heQJFPCjbtzkN3LKzMox3vU5X0F0iV&export=download',
            header: 'Uniforme',
            resumo: `No mês março 2020 será lançada a campanha 
                     do novo uniforme da pelada.`
        },
        {
            id: 2,
            image: 'https://docs.google.com/uc?id=1cgFeuMma9ExhJII6qIMPPpN2EGgjUMsi&export=download',
            title: 'A imagem é meramemte Ilustrativa',
            resumo: `No mês Setembro de 2020 se dará a II Pescaria Americanados.`,
            header: 'II Pescaria Americanados'
        }
    ]

    return (
        <PageBase title="Home">
            <div className={classes.trow}>
                <div className={classes.tcol}>
                    <Carousel animation={"fade"} autoPlay={true} interval={2600} indicators={false}>
                        {items.map(item => <MediaCard key={item.id} Item={item} />)}
                    </Carousel>
                </div>
                <div className={classes.tcol}>
                    <Paper elevation={3} className={classes.paper} >
                        <ContainerButton
                            action={(e) => {
                                e.preventDefault()
                                dispatch(push('/pelada'))
                            }}
                            label="Pelada">
                            <SportsSoccerIcon fontSize="large" color="disabled" />
                        </ContainerButton>
                        <ContainerButton
                            action={(e) => {
                                e.preventDefault()
                                dispatch(push('/chat'))
                            }}
                            label="Chat" >
                            <MessageIcon fontSize="large" color="disabled" />
                        </ContainerButton>
                        <ContainerButton
                            action={(e) => {
                                e.preventDefault()
                                dispatch(push('/caixa'))
                            }}
                            label="Caixa">
                            <MonetizationOnIcon fontSize="large" color="primary" />
                        </ContainerButton>
                        <ContainerButton
                            action={(e) => {
                                e.preventDefault()
                                dispatch(push('/galeria'))
                            }}
                            label="Galeria">
                            <CameraIcon fontSize="large" color="disabled" />
                        </ContainerButton>
                        <ContainerButton
                            action={(e) => {
                                e.preventDefault()
                                dispatch(push('/admin'))
                            }}
                            label="Admin">
                            <SettingsIcon fontSize="large" color="disabled" />
                        </ContainerButton>
                    </Paper>
                    <Paper elevation={3} className={classes.paper} >
                        {
                            !location ? (
                                <Fragment>
                                    Você precisa Autorizar o acesso a sua localização.
                                </Fragment>
                            ) : (
                                    !weather
                                        ? (
                                            <Fragment>Carregando o clima...</Fragment>
                                        )
                                        : (
                                            <Fragment>
                                                <h5>Clima em {weather['name']} - {weather['weather'][0]['description']}</h5>
                                                <ul>
                                                    <li>Latitude: {latitude}</li>
                                                    <li>Longitude: {longitude}</li>
                                                    <li>Temperatura atual: {weather['main']['temp']}°</li>
                                                    <li>Temperatura máxima: {weather['main']['temp_max']}°</li>
                                                    <li>Temperatura minima: {weather['main']['temp_min']}°</li>
                                                    <li>Pressão: {weather['main']['pressure']} hpa</li>
                                                    <li>Humidade: {weather['main']['humidity']}%</li>
                                                </ul>
                                            </Fragment>
                                        )
                                )
                        }
                    </Paper>
                </div>
            </div>
            <div className={classes.trow}>
                <div className={classes.tcol}>Primeiro Slide</div>
                <div className={classes.tcol}>Segundo slide</div>
            </div>
        </PageBase>

    )
}
