import React from 'react'
import {Text} from 'react-native'
import ListMovie from '../../MoviePage/ListMovie/ListMovie'
import {HOST} from '@env'


export default function LastestTvScreenNowPlayingScreen() {

    const NowPlayingUrl = `${HOST}/movie/now_playing`
    const page = 1

    return(
        <>
        <Text>Now Playing Movies</Text>
       <ListMovie url={NowPlayingUrl} page={page} isText={true} itemName={"movie"} content={"title"}> </ListMovie>
       </>
    )
};
