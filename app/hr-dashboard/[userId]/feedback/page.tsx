'use client';

import { useState, useEffect, use } from 'react';

import { Feedback } from './types';
import { fetchFeedback } from './services';
import { FeedbackHeader } from './components/FeedbackHeader';
import { FeedbackList } from './components/FeedbackList';
import { EmptyState } from './components/EmptyState';
import { LoadingState } from './components/LoadingState';

/**
 * HR Dashboard Feedback page
 * Displays employee feedback with filtering capabilities
 */
export default function FeedbackDashboard({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = use(params);
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Handle category filter change
  const handleFilterChange = (value: string) => {
    setCategoryFilter(value);
  };

  // Load feedback data on component mount and when filter changes
  useEffect(() => {
    const loadFeedback = async () => {
      setLoading(true);
      try {
        const data = await fetchFeedback(categoryFilter);
        setFeedback(data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
        alert('Failed to load employee feedback');
      } finally {
        setLoading(false);
      }
    };

    loadFeedback();
  }, [categoryFilter]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <FeedbackHeader
        userId={userId}
        categoryFilter={categoryFilter}
        onFilterChange={handleFilterChange}
      />

      {loading ? (
        <LoadingState />
      ) : feedback.length === 0 ? (
        <EmptyState 
          categoryFilter={categoryFilter} 
          setCategoryFilter={setCategoryFilter} 
        />
      ) : (
        <FeedbackList feedback={feedback} />
      )}
    </div>
  );
} 