/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./VideoItem.css";


interface VideoItem {
    thumbnailImg: string,
    title: string,
    channelImg: string,
    channelName: string,
    views: number,
    uploadTime: string
}



const VideoItem: React.FC<VideoItem>  = ({ thumbnailImg, title, channelImg, channelName, views, uploadTime }) => {
    return (
        <div className="video-item">
            <a href="">
                <div className="thumbnail">
                    <img src={thumbnailImg} alt={thumbnailImg} />
                </div>
                <div className="detail">
                    <div className="channel-img">
                        <img src={channelImg} alt={channelImg} />
                    </div>
                    <div className="box-title">
                        <h6 className="title">{title}</h6>
                        <p className="channel-name">{channelName}</p>
                        <div className="views-upload">
                            <span className="views">{views}</span>
                            <span className="upload">{uploadTime}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default VideoItem;
