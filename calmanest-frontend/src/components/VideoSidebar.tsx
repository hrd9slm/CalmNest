import React from 'react';

interface Video {
  title: string;
  url: string;
}

interface VideoSidebarProps {
  videos: Video[];
}

const VideoSidebar: React.FC<VideoSidebarProps> = ({ videos }) => {
  return (
    <div className="w-1/4 p-4 bg-gray-100">
      <h2 className="text-lg font-bold mb-4">Other Videos</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index} className="mb-2">
            <a href={video.url} className="text-blue-500 hover:underline">
              {video.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoSidebar;