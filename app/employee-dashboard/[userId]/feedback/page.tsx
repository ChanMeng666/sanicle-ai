'use client';

import { useState, useRef, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Card,
  CardContent,
} from '@/components/ui/card';

import DashboardLayout from "../../components/DashboardLayout";
import { FeedbackFormValues } from './types';
import { submitFeedback } from './services';
import FeedbackForm from './components/FeedbackForm';
import SuccessMessage from './components/SuccessMessage';

export default function SubmitFeedback({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = use(params);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  // Handle form submission
  const handleSubmit = async (data: FeedbackFormValues) => {
    setIsSubmitting(true);
    
    try {
      const result = await submitFeedback(data);
      
      if (!result.success) {
        throw new Error(result.error);
      }
      
      // Show success state
      setSubmitSuccess(true);
      
      // Redirect back to dashboard after short delay
      setTimeout(() => {
        if (linkRef.current) {
          linkRef.current.click();
        }
      }, 1500);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert(error instanceof Error ? error.message : 'Failed to submit feedback');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout
      userId={userId}
      title="Submit Feedback"
      description="Share your thoughts and experiences about menstrual and menopause health support in the workplace."
    >
      {/* Hidden link for redirection */}
      <Link ref={linkRef} href={`/employee-dashboard/${userId}?tab=resources`} className="hidden" />
      
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            {submitSuccess ? (
              <SuccessMessage />
            ) : (
              <FeedbackForm 
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
} 