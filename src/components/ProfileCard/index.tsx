import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import AvatarImage from '@site/static/img/avatar.png';
import Resume from '@site/static/pdf/resume.pdf';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

export default function ProfileCard(): JSX.Element {
  const { siteConfig, codeTranslations } = useDocusaurusContext();
  return (
    <section className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <picture>
          <img src={AvatarImage} className={styles.avatarImage} />
        </picture>

        <h1 className={`hero__title ${styles.customTitle}`}>
          {siteConfig.title}
        </h1>

        <p className="hero__subtitle">
          {siteConfig.tagline + ' '}
          <Link to={siteConfig.customFields.companyURL as string}>
            @{siteConfig.customFields.companyName as string}
          </Link>
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={siteConfig.customFields.githubURL as string}
          >
            Github
          </Link>
          <Link
            className="button button--secondary button--lg"
            to={siteConfig.customFields.twitterURL as string}
          >
            X
          </Link>
          <Link
            className="button button--secondary button--lg"
            to={siteConfig.customFields.linkedinURL as string}
          >
            LinkedIn
          </Link>
          <Link
            className="button button--secondary button--lg"
            to={`mailto:${siteConfig.customFields.email as string}`}
          >
            Email
          </Link>

          <a className="button button--secondary button--lg" href={Resume}>
            {codeTranslations['buttons.resume']}
          </a>
        </div>
      </div>
    </section>
  );
}
