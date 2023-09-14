import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "JavaScript just got way faster",
    author: "Fireship",
    views: "1Mn",
    date: "1 day ago",
    thumbnail: "/thum1.jpg",
    channel: "/channel1.jpg",
  },
  {
    title: "JavaScript just got way faster",
    author: "Fireship",
    views: "1Mn",
    date: "1 day ago",
    thumbnail: "/thum1.jpg",
    channel: "/channel1.jpg",
  },
  {
    title: "JavaScript just got way faster",
    author: "Fireship",
    views: "1Mn",
    date: "1 day ago",
    thumbnail: "/thum1.jpg",
    channel: "/channel1.jpg",
  },
  {
    title: "JavaScript just got way faster",
    author: "Fireship",
    views: "1Mn",
    date: "1 day ago",
    thumbnail: "/thum1.jpg",
    channel: "/channel1.jpg",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            author={video.author}
            views={video.views}
            date={video.date}
            thumbnail={video.thumbnail}
            channel={video.channel}
          />
        </div>
      ))}
    </div>
  );
};
