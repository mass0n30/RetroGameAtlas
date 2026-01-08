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

  // inactive rows
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
              <div className={styles.recordsectioninactive}>
                <span className={styles.recordsectioninactivetxt}>
                  Click to view runs
                </span>
              </div>
          </div>
      </button>
    );
  }

  // active row returning category top 3 run information
  function runRecordRow(run, gameName, index) {
    if (!run) return null;

    if (index !== categoryRunIndex) return null;

    const isYouTube =
    run?.videoLink?.includes("youtube.com") ||
    run?.videoLink?.includes("youtu.be");


    return (
      <>
        <div key={run.runId} className={styles.recordrowcontainer}>
          
          <div className={styles.recordplacecontainer}>
            <div className={styles.recordplace}>
              {index === 0 && <Award className={styles.goldicon} />}
              {index === 1 && <Award className={styles.silvericon} />}
              {index === 2 && <Award className={styles.bronzeicon} />}
              <span className={styles.placetxt}>
                {index === 0 && "1st Place"}
                {index === 1 && "2nd Place"}
                {index === 2 && "3rd Place"}
              </span>
            </div>
          </div>

          <div className={styles.recordinfocontainer}>
            <div className={styles.recordtime}>Time: {run.time}</div>
            <div className={styles.recordplayer}>
              Player: {run.username || "Anonymous"}
            </div>

            {run.videoLink && (
              <div className={styles.recordvideolink}>
                {isYouTube ? (
                  <a
                    href={run.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <YouTubeEmbed
                      url={null}
                      title={`${gameName} - ${run.username} Speedrun`}
                      urlId={getYouTubeId(run.videoLink)}
                    />
                  </a>
                ) : (
                  <a
                    href={run.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                  >
                    <ExternalLink className={styles.icons} /> View Video
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </>
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