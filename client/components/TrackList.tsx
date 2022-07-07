import React from 'react'
import { ITrack } from '../types/track'
import TrackItem from './TrackItem'

interface TrackListProps {
    tracks: ITrack[]
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
    return (
        <div className='container flex-col'>
            <div className='p-12'>
                {tracks.map(track => 
                    <TrackItem
                        key={track._id}
                        track={track}
                    />
                )}
            </div>
        </div>
    )
}

export default TrackList
