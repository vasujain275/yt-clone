import { VideoCard } from "@/components/VideoCard";

export default function Home() {
  return (
    <div>
      <VideoCard
        title="JavaScript just got way faster"
        author="Fireship"
        views="1Mn"
        date="1 day ago"
        thumbnail="/thum1.jpg"
        channel="/channel1.jpg"
      />
    </div>
  );
}
