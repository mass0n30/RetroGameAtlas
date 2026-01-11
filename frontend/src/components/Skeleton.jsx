import { Skeleton, Stack, Box } from "@mui/material";
import styles from '../styles/components/details.module.css';
const skeletonBg = "#171f1e5b";       
const skeletonBgAlt = "#1c2928a8";
const skeletonHighlight = "#00aaff75"; 

export function GameDetailsSkeleton() {
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
                sx={{ bgcolor: skeletonBg
                 }}
              />
            </div>
            <div className={styles.summarycontainerskeleton}>
              <Skeleton 
                variant="rounded" 
                width="100%" 
                height={200} 
                animation="wave"
                sx={{ bgcolor: skeletonBgAlt }}
              />
            </div>
          </div>
        </div>
      </div>
      </>

  );
}

export function CardSkeleton() {
  return (
      <div className={styles.card_loader_container}>
        <div className={styles.card_loader} >
            <Skeleton 
              variant="rounded" 
              width={264} 
              height={374} 
              animation="wave"
              sx={{ bgcolor: skeletonBg }}
            />
        </div>
      </div>
  )
};

export function SSCardSkeleton() {
  return (
      <div className={styles.cardss_loader_container}>
        <div className={styles.cardss_loader}>
            <Skeleton 
              variant="rounded" 
              width={500} 
              height={294} 
              animation="wave"
              sx={{ bgcolor: skeletonBg }}
            />
        </div>
      </div>   
  )
};

