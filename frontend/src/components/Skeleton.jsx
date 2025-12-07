import { Skeleton, Stack, Box } from "@mui/material";
import styles from '../styles/components/details.module.css';
const skeletonBg = "#141721";       // slightly lighter than background
const skeletonHighlight = "#1a1e2a"; // slightly lighter still for wave
function GameDetailsSkeleton() {
  return (
      <>
      <div className={styles.outercontainer}>
        <div className={styles.savecontainer}>

        </div>
        <div className={styles.detailscontainer}>
          <div className={styles.covercontainer}>
            <div className={styles.uppercovercontainer}>
              <div className={styles.imgcontainer}>
                <Skeleton 
                  variant="rectangular" 
                  width={"100%"} 
                  height={600} 
                  animation="wave"
                  sx={{ bgcolor: skeletonBg, color: skeletonHighlight }}
                />
              </div>
            </div>
      
          </div>
          <div className={styles.datacontainer}>
            <div className={styles.screenshotscontainer}>
              <Skeleton 
                variant="rectangular" 
                width="100%" 
                height={450} 
                animation="wave"
                sx={{ bgcolor: skeletonBg, color: skeletonHighlight }}
              />
            </div>
            <div className={styles.summarycontainer}>
              <Skeleton 
                variant="rounded" 
                width="100%" 
                height={200} 
                animation="wave"
                sx={{ bgcolor: skeletonBg, color: skeletonHighlight }}
              />
            </div>
          </div>
        </div>
      </div>
      </>

  );
}


export default GameDetailsSkeleton;
