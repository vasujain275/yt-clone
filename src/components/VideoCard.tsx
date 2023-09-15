type VideoCardProps = {
  title: string;
  author: string;
  views: string;
  date: string;
  thumbnail: string;
  channel: string;
};

export const VideoCard = (props: VideoCardProps) => {
  return (
    <div className="p-2">
      <div className="pb-2">
        <img src={props.thumbnail} className="rounded-3xl" />
      </div>
      <div className="grid grid-cols-10 p-1">
        <div className="col-span-1">
          <img src={props.channel} className="rounded-full" />
        </div>
        <div className="col-span-9 pl-3">
          <div>{props.title}</div>
          <div className=" text-gray-400 text-base">{props.author}</div>
          <div className=" text-gray-400 text-base">
            {props.views} • {props.date}
          </div>
        </div>
      </div>
    </div>
  );
};
