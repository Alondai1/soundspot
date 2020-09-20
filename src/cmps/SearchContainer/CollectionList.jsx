import React from 'react';

import CollectionPreview from './CollectionPreview';

export default function CollectionList({ collection, isListViewOn, ...restOfProps }) {
    const flexDirection = isListViewOn ? 'list' : 'tiles'
    return (
        <div className={`flex wrap collection-list-container ${flexDirection}`}>
            {collection.map(track => {
                return <CollectionPreview
                    isListViewOn={isListViewOn}
                    track={track}
                    key={track.id}
                    {...restOfProps}
                />
            })}
        </div>
    )
}