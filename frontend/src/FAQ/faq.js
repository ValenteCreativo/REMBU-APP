import { useState } from 'react';
import styles from './faq.module.css'; // Asumimos que el CSS está en el mismo directorio

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is REMBU?',
      answer: 'REMBU is a decentralized network that collects data about the urban environment using smart antennas that users install in their homes. Users are rewarded for sharing the information.'
    },
    {
      question: 'How can I get an antenna?',
      answer: 'You can pre-order an antenna through our website. Once installed, the antenna will automatically collect data, and you will be rewarded for sharing this information with the network.'
    },
    {
      question: 'What kind of data do the antennas collect?',
      answer: 'The antennas collect data about humidity, noise, UV rays, air quality, and CO2 levels, helping monitor the health of urban environments.'
    },
    {
      question: 'How do rewards work?',
      answer: 'For every data point sent to the blockchain, users are rewarded with tokens that can be claimed and used on the platform.'
    },
    {
      question: 'What are the benefits of using the antennas?',
      answer: 'By using the antennas, you contribute to monitoring the urban environment, improving quality of life, and receiving rewards for doing so.'
    }
  ];

  return (
    <section className={styles.faqSection}>
      <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <h3 
              className={styles.faqQuestion}
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
            </h3>
            <p className={`${styles.faqAnswer} ${openQuestion === index ? styles.open : ''}`}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
