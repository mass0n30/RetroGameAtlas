import { useState, useEffect } from "react";
import styles from '../../styles/components/details.module.css';
import YouTubeEmbed from './Youtube';
import { getYouTubeId } from "../../helpers";
import { Award, ChevronLeft, ChevronRight, ExternalLink, Tv} from 'lucide-react';
import { useFetcher } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export default function GameDetailsRunSection({ recordData, gameName }) {
  // for speedrun videos states
  const [categoryRunIndex, setCategoryRunIndex] = useState(null);
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
        className={styles.recordsectionbtn}
        onClick={() => categoryIndexHandler(categoryIndex)}
        key={runCategory.categoryId}>
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

      {categoryRunIndex !== null && (
      <div className={styles.recordvideocontainer}>
        { recordData[categoryRunIndex].top3Runs.length > 1 && (
          <>
          <div className={styles.videoname}>
            <Tv className={styles.icons}/>
            <h3>{recordData[categoryRunIndex].categoryName}</h3>
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