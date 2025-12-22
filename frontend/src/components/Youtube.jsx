import { useState } from 'react';
import { Play } from 'lucide-react';
import styles from '../styles/components/details.module.css';

export default function VideoEmbed({ url, title }) {
  const [clicked, setClicked] = useState(false);

  if (!url) return null;

  // Detect platform
  const isYouTube = /youtu\.?be/.test(url);
  const isTwitch = /twitch\.tv/.test(url);

  // Extract IDs
  const videoId = isYouTube
    ? url.match(/(?:youtube\.com\/(?:.*v=|embed\/)|youtu\.be\/|youtube\.com\/shorts\/)([^?&"'>]+)/)?.[1]
    : isTwitch
    ? url.match(/videos\/(\d+)/)?.[1] || url.match(/twitch\.tv\/[^/]+/)?.[0] // optional fallback
    : null;

  if (!videoId) return null;

  const thumbnail = isYouTube ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;

  const wrapperStyle = {
    position: 'relative',
    maxWidth: '960px',
    width: '100%',
    aspectRatio: '16 / 9',
    cursor: 'pointer',
    borderRadius: '12px',
    overflow: 'hidden',
  };

  if (!clicked) {
    return (
      <div onClick={() => setClicked(true)} style={wrapperStyle}>
        {isYouTube && (
          <>
            <img
              src={thumbnail}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#ffffff49'
              }}
            >
              <div className={styles.watchonContainer}>
                <Play size={50} fill='#F03A47' />
                <img src='/logo/youtubeLogo.svg' style={{ width: '10rem', height: 'auto' }}/>
              </div>
            </div>
          </>
        )}
        {isTwitch && (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#8700d63b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ddd8e2ff',
              fontSize: '1.2rem',
              fontWeight: '700'
            }}
          >
              <div className={styles.watchonContainer}>
                <Play size={50} fill='#646cff'/>
                <img  src='/logo/twitchLogo.svg' style={{ width: '10rem', height: 'auto' }}/>
              </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={wrapperStyle}>
      {isYouTube && (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '12px' }}
        />
      )}
      {isTwitch && (
        <iframe
          src={`https://player.twitch.tv/?video=${videoId}&parent=${window.location.hostname}&autoplay=true`}
          height="100%"
          width="100%"
          allowFullScreen
          style={{ borderRadius: '12px', border: 'none' }}
          title={title}
        />
      )}
    </div>
  );
}
