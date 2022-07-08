import { Dispatch } from "react"
import { TrackAction, TrackActionTypes } from "../../types/track"
import axios from 'axios'

export const fetchTracks = (query: string) => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.get('http://localhost:5000/tracks/?search=' + (query || ''))
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Произошла ошибка при получении треков'
            })
        }
    }
}