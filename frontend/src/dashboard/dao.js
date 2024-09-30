// DAO.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './dao.module.css';

const DAO = () => {
  // State for proposals
  const [proposals, setProposals] = useState([]);
  const [message, setMessage] = useState({ type: '', content: '' });

  // Simulated proposals data
  const simulatedProposals = [
    {
      id: 1,
      title: 'Urban Forest Expansion',
      description:
        'This proposal aims to plant 10,000 new trees across Mexico City to combat air pollution and create a healthier urban environment. The initiative focuses on high-traffic areas and public parks to maximize environmental benefits.',
      voteCount: 0,
    },
    {
      id: 2,
      title: 'Green Rooftop Incentive Program',
      description:
        'Encouraging the development of green rooftops by offering tax incentives to residents and businesses who implement them. This project will reduce urban heat, improve air quality, and enhance the city\'s biodiversity.',
      voteCount: 0,
    },
    {
      id: 3,
      title: 'Water Conservation Education Campaign',
      description:
        'A city-wide initiative to educate the public on water conservation practices, including workshops, community events, and educational materials. The goal is to reduce water waste by 20% within the next two years.',
      voteCount: 0,
    },
    {
      id: 4,
      title: 'Solar Panel Installation on Public Buildings',
      description:
        'This proposal suggests installing solar panels on all public buildings in Mexico City, aiming to reduce the city\'s carbon footprint and transition to renewable energy sources. The expected energy savings will be reinvested into further green projects.',
      voteCount: 0,
    },
  ];

  // Fetch proposals from API (for now, using simulated data)
  const fetchProposals = async () => {
    try {
      // Here you would normally fetch from the API, but we're using simulated proposals for now
      setProposals(simulatedProposals);
    } catch (error) {
      setMessage({ type: 'error', content: 'Error fetching proposals.' });
      console.error(error);
    }
  };

  // Vote for a proposal
  const voteProposal = async (proposalId) => {
    try {
      // Update the vote count (this would normally involve an API call)
      setProposals((prevProposals) =>
        prevProposals.map((proposal) =>
          proposal.id === proposalId
            ? { ...proposal, voteCount: proposal.voteCount + 1 }
            : proposal
        )
      );
      setMessage({ type: 'success', content: 'Vote submitted successfully!' });
    } catch (error) {
      setMessage({ type: 'error', content: 'Error submitting vote.' });
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProposals();
  }, []);

  return (
    <div className={styles.daoContainer}>
      <h2>Environmental Impact Proposals</h2>
      {message.content && (
        <p className={message.type === 'error' ? styles.error : styles.success}>
          {message.content}
        </p>
      )}

      <div className={styles.proposalList}>
        {proposals.length === 0 ? (
          <p>No proposals available at this time.</p>
        ) : (
          proposals.map((proposal) => (
            <div key={proposal.id} className={styles.proposalCard}>
              <h3>{proposal.title}</h3>
              <p>{proposal.description}</p>
              <p>Votes: {proposal.voteCount}</p>
              <button
                onClick={() => voteProposal(proposal.id)}
                className={styles.voteButton}
              >
                Vote
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DAO;
