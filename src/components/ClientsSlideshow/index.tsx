import React from 'react';
import styles from './styles.module.css';

// Sample logos, replace with actual logos from your project
import quintoandar from '@site/static/img/logos/quintoandar.png';
import neon from '@site/static/img/logos/neon.png';
import clickup from '@site/static/img/logos/clickup.png';
import medley from '@site/static/img/logos/medley.png';
import internationalPaper from '@site/static/img/logos/international-paper.png';
import vitafor from '@site/static/img/logos/vitafor.png';
import trilon from '@site/static/img/logos/trilon.png';
import plato from '@site/static/img/logos/plato.png';
import motion from '@site/static/img/logos/motion.png';
import dhl from '@site/static/img/logos/dhl.png';
import unilever from '@site/static/img/logos/unilever.png';
import privalia from '@site/static/img/logos/privalia.png';
import bosch from '@site/static/img/logos/bosch.png';
import mmm from '@site/static/img/logos/mmm.png';
import pepsi from '@site/static/img/logos/pepsi.png';
import udacity from '@site/static/img/logos/udacity.png';
import nestjs from '@site/static/img/logos/nestjs.png';
import doordash from '@site/static/img/logos/doordash.png';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function ClientsSlideshow(): JSX.Element {
  const {codeTranslations} = useDocusaurusContext();
  const logos = [
    bosch,
    mmm,
    doordash,
    neon,
    clickup,
    quintoandar,
    nestjs,
    udacity,
    pepsi,
    privalia,
    unilever,
    dhl,
    motion,
    plato,
    trilon,
    vitafor,
    medley,
    internationalPaper,
  ];

  return (
    <div>
      <h2 class={styles.logosTitle}>{codeTranslations["headings.clients"]}</h2>
      <div className={styles.logos}>
        <div className={styles.logosSlide}>
          {logos.map((logo, index) => (
            <img src={logo} alt={`Logo ${index + 1}`}/>
          ))}
        </div>
        <div className={styles.logosSlide}>
          {logos.map((logo, index) => (
            <img src={logo} alt={`Logo ${index + 1}`}/>
          ))}
        </div>
      </div>

    </div>
  );
};
