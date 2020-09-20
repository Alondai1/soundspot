import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
    return (
        <div className="flex column center align-center loading-page">
            <h2 className="uppercase">Looking for some music</h2>
            <CircularProgress />
        </div>
    )
}