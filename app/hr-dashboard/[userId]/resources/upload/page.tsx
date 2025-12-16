'use client';

import { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Import types
import { ResourceFormValues, UploadStatus } from './types';

// Import services
import { uploadResource } from './services';

// Import components
import HeaderSection from './components/HeaderSection';
import UnauthorizedView from './components/UnauthorizedView';
import ResourceForm from './components/ResourceForm';

export default function UploadResourcePage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = use(params);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace('/login');
    },
  });
  const router = useRouter();
  
  // State management
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (values: ResourceFormValues) => {
    if (!file) {
      setErrorMessage('Please select a file to upload');
      return;
    }

    setUploading(true);
    setUploadStatus('idle');
    setErrorMessage('');

    try {
      const result = await uploadResource(file, values);
      
      if (result.success) {
        setUploadStatus('success');
        setTimeout(() => {
          router.push(`/hr-dashboard/${userId}/resources/manage`);
        }, 1500);
      } else if (result.error) {
        setUploadStatus('error');
        setErrorMessage(result.error);
      }
    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Upload failed, please try again');
    } finally {
      setUploading(false);
    }
  };

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Remove file
  const handleRemoveFile = () => {
    setFile(null);
  };

  // Check if user has HR or admin permissions
  if (session?.user?.role !== 'hr' && session?.user?.role !== 'admin') {
    return <UnauthorizedView />;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <HeaderSection userId={userId} />

      <Card className="shadow-sm border-muted">
        <CardHeader className="border-b bg-muted/30">
          <CardTitle>Resource Information</CardTitle>
          <CardDescription>Upload company policy files, menstrual health or menopause health educational resources</CardDescription>
        </CardHeader>
        <CardContent className="pt-8">
          <ResourceForm 
            userId={userId}
            file={file}
            uploading={uploading}
            uploadStatus={uploadStatus}
            errorMessage={errorMessage}
            onFileChange={handleFileChange}
            onRemoveFile={handleRemoveFile}
            onSubmit={handleSubmit}
          />
        </CardContent>
      </Card>
    </div>
  );
} 