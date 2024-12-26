import React from 'react';
import "./Home.css";
import { VideoItem } from "../VideoItem";


interface Video {
    thumbnailImg: string;
    title: string;
    channelImg: string;
    channelName: string;
    views: number;
    uploadTime: string;
}

interface HomeProps {
    data: {
        videos: Video[];
    };
}



const Home: React.FC<HomeProps> = ({ data }) => {
    return (
        <div id="home" className='main-content'>
            {
                data.videos.map((video, index) => (
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



export default Home;
