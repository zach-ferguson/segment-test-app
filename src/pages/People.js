import React, { useEffect } from 'react'
import analytics from '@segment/analytics.js-core'


function People() {

    function trackVoice() {
        analytics.track('Voice Followed', {
            voice: 'Joe Rogan',
        })
    }

    return (
        <div>
            <h1>People!</h1>
            <div>
                <button onClick={trackVoice}>
                    Follow Joe Rogan
                </button>
            </div>
        </div>
    )
}

export default People
