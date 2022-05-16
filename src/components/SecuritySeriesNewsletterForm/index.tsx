import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import styles from './styles.module.css';

export function SecuritySeriesNewsletterForm() {
  const { i18n } = useDocusaurusContext();
  const formLocaleHashmap = {
    pt: 'https://tally.so/embed/wMe1BY?alignLeft=1&hideTitle=1&transparentBackground=1',
    en: 'https://tally.so/embed/3Xx5XO?alignLeft=1&hideTitle=1&transparentBackground=1',
  };
  const localizedForm = formLocaleHashmap[i18n.currentLocale];

  return (
    <section className={styles.newsletterContainer}>
      <h2>
        <Translate
          id="securityNewsletter.title"
          description="The security newsletter component title"
        >
          Signup for news about this series
        </Translate>
      </h2>
      <p>
        <Translate
          id="securityNewsletter.description"
          description="The security newsletter component description"
        >
          Do you want to receive news about this series? Fill the form below and
          for every new article on this series I'm going to notify you on your
          e-mail
        </Translate>
      </p>
      <iframe src={localizedForm} width="100%" height="220" />
    </section>
  );
}
