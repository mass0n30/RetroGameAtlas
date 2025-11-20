import { useState } from 'react';

export default function YouTubeEmbed({ url, title }) {
  const [clicked, setClicked] = useState(false);

  // Extract video ID from any YouTube URL
  const videoId = url
    // eslint-disable-next-line react/prop-types
    ? url.match(/(?:youtube\.com\/(?:.*v=|embed\/)|youtu\.be\/|youtube\.com\/shorts\/)([^?&"'>]+)/)?.[1]
    : null;

  if (!videoId) return null; // No valid URL

  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (!clicked) {
    return (
      <div
        onClick={() => setClicked(true)}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',      
          cursor: 'pointer',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <img
          src={thumbnail}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        </div>
      </div>
    );
  }

  return (
    <iframe
      width="100%"
      height="300"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ borderRadius: '12px' }}
    />
  );
  
}