import React from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import VideoSidebar from '@/components/VideoSidebar';

const page: React.FC = () => {
  const mainVideoUrl = 'https://example.com/main-meditation-video.mp4';
  const videoList = [
    { title: 'Meditation Video 1', url: 'https://example.com/video1.mp4' },
    { title: 'Meditation Video 2', url: 'https://example.com/video2.mp4' },
    { title: 'Meditation Video 3', url: 'https://example.com/video3.mp4' },
  ];

  return (
    <div className="flex">
      <VideoPlayer videoUrl={mainVideoUrl} />
      <VideoSidebar videos={videoList} />
    </div>
  );
};

export default page;