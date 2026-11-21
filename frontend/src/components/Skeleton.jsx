import { Skeleton, Stack, Box } from "@mui/material";
import styles from '../styles/components/details.module.css';
import { FileX } from "lucide-react";
const skeletonBg = "#1a1e27";
const skeletonBgTransparent = "#1a1e2777";       
const skeletonBgAlt = "#1a2b29ad";
const border = "#2c3d3bc4"
const skeletonHighlight = "#00aaff75"; 

export function GameDetailsSkeleton() {
  return (
      <>
      <div className={styles.outercontaineralt}>
        <div className={styles.detailscontainer}>
          <div className={styles.covercontainer}
          style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Skeleton 
              variant="rounded" 
              height={800} 
              width={'100%'}
              animation="wave"
              sx={{ bgcolor: skeletonBg, border: '2px solid', borderColor: skeletonBgAlt, borderRadius: '8px',
                boxShadow: `0 0 10px ${skeletonHighlight}`,
              }}
            />
          </div>
          <div className={styles.datacontainer}>
            <Skeleton 
              variant="rounded" 
              width={'100%'} 
              height={800}
              animation="wave"
              sx={{ bgcolor: skeletonBg, border: '2px solid', borderColor: skeletonBgAlt, borderRadius: '8px',
                boxShadow: `0 0 10px ${skeletonHighlight}`,
              }}
            />
          </div>
        </div>
      </div>
      </>

  );
}

export function CardSkeleton() {
  return (
      <div >
        <div>
            <Skeleton 
              variant="rounded" 
              width={'100%'} 
              height={'100%'} 
              animation="wave"
              sx={{ bgcolor: skeletonBgTransparent }}
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
              width={'100%'} 
              height={'100%'} 
              animation="wave"
              sx={{ bgcolor: skeletonBgTransparent }}
            />
        </div>
      </div>   
  )
};

export function DashBoardContainerSkeleton() {
  return (
    <Skeleton 
      variant="rounded" 
      width={'100%'} 
      height={'100%'} 
      animation="wave"
      borderRadius={12}
      padding={12}
      sx={{ bgcolor: skeletonBg, border: '2px solid', bordercolor: skeletonBgAlt,
        boxShadow: `0 0 10px ${skeletonHighlight}`,
      }}
    />
  )
};

// eslint-disable-next-line react-refresh/only-export-components
export function formSkeleton() {
  return (
    <Skeleton 
      variant="rounded" 
      width={'100%'}    
      height={'100%'}
      animation="wave"
      sx={{ bgcolor: skeletonBg, border: '1px solid', bordercolor: skeletonBgAlt,
        boxShadow: `0 0 10px ${skeletonHighlight}`,
      }}
    />
  )
};
