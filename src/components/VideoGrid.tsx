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
    title: "Object Oriented Programming is Good | Prime Reacts",
    author: "ThePrimeTime",
    views: "2.2Mn",
    date: "13 day ago",
    thumbnail: "/thum2.jpg",
    channel: "/channel2.jpg",
  },
  {
    title: "This video was made with code. But how?",
    author: "Fireship",
    views: "896k",
    date: "9 months ago",
    thumbnail: "/thum3.jpg",
    channel: "/channel1.jpg",
  },
  {
    title: "The Bun 1.0 Tech Stack",
    author: "Ethan Niser",
    views: "369k",
    date: "3 months ago",
    thumbnail: "/thum4.jpg",
    channel: "/channel3.jpg",
  },
  {
    title: "If Programming Was An Anime",
    author: "Joma Tech",
    views: "10Mn",
    date: "7 months ago",
    thumbnail: "/thum5.jpg",
    channel: "/channel4.jpg",
  },
  {
    title: "Brainf**k in 100 Seconds",
    author: "Fireship",
    views: "7Mn",
    date: "1 year ago",
    thumbnail: "/thum6.jpg",
    channel: "/channel1.jpg",
  },
  {
    title: "I coded a Leetcode clone (it's easier than you think)",
    author: "NeetCode",
    views: "700k",
    date: "8 months ago",
    thumbnail: "/thum7.jpg",
    channel: "/channel5.jpg",
  },
  {
    title: "JSON, I hardly know 'er",
    author: "ThePrimeagen",
    views: "1Mn",
    date: "1 day ago",
    thumbnail: "/thum8.jpg",
    channel: "/channel1.jpg",
  },
  {
    title: "The BETH Stack: Build Hypermedia-Driven Web Apps",
    author: "Ethan Niser",
    views: "587k",
    date: "11 months ago",
    thumbnail: "/thum9.jpg",
    channel: "/channel3.jpg",
  },
  {
    title: "I Love Neovim But I WONT Use It | Prime Reacts",
    author: "ThePrimeTime",
    views: "11Mn",
    date: "2 years ago",
    thumbnail: "/thum10.jpg",
    channel: "/channel2.jpg",
  },
  {
    title: "C++ Full Course for free ⚡️",
    author: "Bro Code",
    views: "17Mn",
    date: "11 months ago",
    thumbnail: "/thum11.jpg",
    channel: "/channel7.jpg",
  },
  {
    title: "Stop calling Fleet a VS Code Killer",
    author: "Fireship",
    views: "101k",
    date: "19 day ago",
    thumbnail: "/thum12.jpg",
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
