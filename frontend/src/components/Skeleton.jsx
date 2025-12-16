import { Skeleton, Stack, Box } from "@mui/material";
import styles from '../styles/components/details.module.css';
const skeletonBg = "#191c25";       // slightly lighter than background
const skeletonHighlight = "#1a1e2a"; // slightly lighter still for wave
function GameDetailsSkeleton() {
  return (
      <>
      <div className={styles.outercontaineralt}>
        <div className={styles.detailscontainer}>
      
          <div className={styles.datacontainer}>
            <div className={styles.screenshotscontainerskeleton}>
              <Skeleton 
                variant="rounded" 
                width="100%" 
                height={650} 
                animation="wave"
                sx={{ bgcolor: skeletonBg}}
              />
            </div>
            <div className={styles.summarycontainerskeleton}>
              <Skeleton 
                variant="rounded" 
                width="100%" 
                height={200} 
                animation="wave"
                sx={{ bgcolor: skeletonBg }}
              />
            </div>
          </div>
        </div>
      </div>
      </>

  );
}


export default GameDetailsSkeleton;
