import React from 'react';
import "./Subscription.css";
import dataSubscription from "../../scripts/home.json"
import { VideoItem } from '../VideoItem';


const Subscription: React.FC = () => {
    return (
        <div id="subscription" className="mt-2">
            {
                dataSubscription.videos.map((video, index) => (
                    <VideoItem
                        key={index}
                        thumbnailImg={video.thumbnailImg}
                        title={video.title}
                        channelImg={video.channelImg}
                        channelName={video.channelName}
                        views={video.views}
                        uploadTime={video.uploadTime}
                    />
                ))
            }
        </div>
    );
};



export default Subscription;
