export const VideoEmbed = ({ url, className = '' }) => {
  return (
    <div className={`relative w-full pb-[56.25%] rounded-lg overflow-hidden ${className}`}>
      <iframe
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
};

