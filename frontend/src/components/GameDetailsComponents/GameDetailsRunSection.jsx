import { useState, useEffect } from "react";
import styles from '../../styles/components/details.module.css';
import YouTubeEmbed from './Youtube';
import { getYouTubeId } from "../../helpers";
import { Award, ChevronLeft, ChevronRight, ExternalLink, Tv} from 'lucide-react';
import { useFetcher } from "react-router-dom";
import { styleMessages } from "../../helpers";
import { Trophy } from "lucide-react";


// eslint-disable-next-line react/prop-types
export default function GameDetailsRunSection({ recordData, gameName }) {
  // for speedrun videos states
  const [categoryRunIndex, setCategoryRunIndex] = useState(0);
  const [categoryRunPlaceIndex, setCategoryRunPlaceIndex] = useState(0);

  useEffect(() => {
    // Set initial categoryRunIndex to 0 when recordData is available

  }, [recordData]);


  if (!recordData || recordData.length === 0) {
    return <p>No run data available.</p>;
  }

 const categoryIndexHandler = (index) => {
    setCategoryRunIndex(index);
  };

  const categoryPlaceIndexHandler = (index) => {
    setCategoryRunPlaceIndex(index);
  };

  function runRecordSection(runCategory, gameName, categoryIndex) {
    return (
      <button
        onClick={() => categoryIndexHandler(categoryIndex)}
        key={runCategory.categoryId}
        className={`${styles.recordsectionbtn} ${categoryIndex % 2 ? styles.light : styles.dark}`}
        style={categoryIndex === categoryRunIndex ? { backgroundColor: 'var(--color-primary)' } : {}}
      >

        <div className={styles.recordsectioncontainer}>
          <div className={styles.recordsectionheadercontainer}>
            <h3 className={styles.recordsectionheader}>
              {runCategory.categoryName} World Records
            </h3>
          </div>
        </div>
      </button>
    );
  }
  
  return (
    <>

      {recordData[categoryRunIndex] !== null && (
      <div className={styles.recordvideocontainer}>
        { recordData[categoryRunIndex].top3Runs.length > 1 && (
          <>
          <div className={styles.recordvideocontent}>
            <div className={styles.videoname}>
              <h3>{recordData[categoryRunIndex].categoryName}</h3>
            </div>
            <div className={styles.videoplaceinfo}>
              { categoryRunPlaceIndex === 0 && (<div className={styles.placeinfo}><div><Trophy size={16} className={styles.icons} style={{ color: 'gold', filter: 'drop-shadow(0 0 5px gold)' }}/></div><p>1st Place</p></div>)}
              { categoryRunPlaceIndex === 1 && (<div className={styles.placeinfo}><div><Trophy size={16} className={styles.icons} style={{ color: 'silver', filter: 'drop-shadow(0 0 5px silver)' }}/></div><p>2nd Place</p></div>)}
              { categoryRunPlaceIndex === 2 && (<div className={styles.placeinfo}><div><Trophy size={16} className={styles.icons} style={{ color: '#cd7f32', filter: 'drop-shadow(0 0 5px #cd7f32)'  }}/></div><p>3rd Place</p></div>)}
            </div>
            <div className={styles.runinfo}>
              <p><strong>Runner:</strong> {recordData[categoryRunIndex].top3Runs[categoryRunPlaceIndex]?.username || 'Unknown'}</p>
              <p><strong>Time:</strong> {recordData[categoryRunIndex].top3Runs[categoryRunPlaceIndex]?.timeConverted || 'N/A'}</p>
            </div>
          </div>
            <button
              className={styles.arrowL}
              onClick={() =>
                categoryPlaceIndexHandler((prev) =>
                  prev === 0 ? recordData[categoryRunIndex].top3Runs.length - 1 : prev - 1
                )
              }
            >
            <ChevronLeft className={styles.icons} color="#E8F1F2" />
            </button>

            <button
              className={styles.arrowR}
              onClick={() =>
                categoryPlaceIndexHandler((prev) =>
                  prev === recordData[categoryRunIndex].top3Runs.length - 1 ? 0 : prev + 1
                )
              }
            >
            <ChevronRight className={styles.icons} color="#E8F1F2" />

            </button>
          </>
        )}
        { recordData[categoryRunIndex]?.top3Runs[categoryRunPlaceIndex]?.videoLink && (
          <YouTubeEmbed url={recordData[categoryRunIndex].top3Runs[categoryRunPlaceIndex].videoLink} title={recordData[categoryRunIndex].categoryName} urlId={recordData[categoryRunIndex].top3Runs[categoryRunPlaceIndex].videoId} />
        )}
        </div>
      )}
      <div className={styles.recordsectionscontainer}>
        {recordData.map((runCategory, index) => (
          <div key={runCategory.categoryId} className={styles.recordsectionwrapper}>
            {runRecordSection(runCategory, gameName, index)}
          </div>
        ))}
      </div>
    </>
  )

}