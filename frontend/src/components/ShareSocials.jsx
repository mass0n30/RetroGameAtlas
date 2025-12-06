  import {
      FacebookShareButton,
      TwitterShareButton,
      FacebookIcon,
      TwitterIcon,
      RedditShareButton,
      RedditIcon,
    } from 'react-share';
   
   function SocialsShare() {
      const shareUrl = 'https://yourwebsite.com/your-content';
      const title = 'Check out this awesome content!';

      return (
        <div>
          <FacebookShareButton url={shareUrl} quote={title}>
            <FacebookIcon size={64} round />
          </FacebookShareButton>

          <TwitterShareButton url={shareUrl} title={title} hashtags={['react', 'share']}>
            <TwitterIcon size={64} round />
          </TwitterShareButton>

            <RedditShareButton
              url={shareUrl}
              title={title}
            >
              <RedditIcon size={64} round={true} />
            </RedditShareButton>



        </div>
      );
    }

    export default SocialsShare;