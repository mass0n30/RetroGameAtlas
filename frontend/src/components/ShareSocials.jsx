  
  import {
      FacebookShareButton,
      TwitterShareButton,
      FacebookIcon,
      TwitterIcon,
      RedditShareButton,
      RedditIcon,
    } from 'react-share';

    import styles from '../styles/components/details.module.css';

   
   function SocialsShare() {
      const shareUrl = 'https://yourwebsite.com/your-content';
      const title = 'Check out this awesome content!';

      return (
        <>
        <div className={styles.socialsContainer}>
          <FacebookShareButton url={shareUrl} quote={title} className={styles.socialsharesbtn}>
            <FacebookIcon size={64} round />
          </FacebookShareButton>

          <TwitterShareButton url={shareUrl} title={title} hashtags={['react', 'share']} className={styles.socialsharesbtn}>
            <TwitterIcon size={64} round />
          </TwitterShareButton>

            <RedditShareButton
              className={styles.socialsharesbtn}
              url={shareUrl}
              title={title}
            >
              <RedditIcon size={64} round={true} />
            </RedditShareButton>
            </div>
          </>
      );
    }

    export default SocialsShare;