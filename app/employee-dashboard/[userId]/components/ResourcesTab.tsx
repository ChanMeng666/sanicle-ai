'use client';

import { 
  BookOpen, 
  Calendar, 
  FileText, 
  MessageSquare,
  Brain
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

interface ResourcesTabProps {
  userId: string;
}

export default function ResourcesTab({ userId }: ResourcesTabProps) {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* IBM Watson AI 文档分析助手卡片 */}
        <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-4">
            <CardTitle className="flex items-center text-lg">
              <Brain className="mr-3 h-5 w-5 text-blue-700" />
              IBM Watson AI
            </CardTitle>
          </div>
          <CardContent className="p-6">
            <p className="mb-6 text-muted-foreground h-24">
              Utilize IBM Watson AI&apos;s powerful document analysis capabilities to quickly obtain document summaries
            </p>
            <Link href={`/employee-dashboard/${userId}/watson`}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Brain className="mr-2 h-5 w-5" />
                Document Intelligence
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Resource Library Card */}
        <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 px-6 py-4">
            <CardTitle className="flex items-center text-lg">
              <FileText className="mr-3 h-5 w-5 text-primary" />
              Resource Library
            </CardTitle>
          </div>
          <CardContent className="p-6">
            <p className="mb-6 text-muted-foreground h-24">
              Access health guides, educational materials, and company policies all in one place.
            </p>
            <Link href={`/employee-dashboard/${userId}/resources`}>
              <Button className="w-full">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Resources
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Events Card */}
        <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4">
            <CardTitle className="flex items-center text-lg">
              <Calendar className="mr-3 h-5 w-5 text-blue-600" />
              Health Events
            </CardTitle>
          </div>
          <CardContent className="p-6">
            <p className="mb-6 text-muted-foreground h-24">
              View and register for upcoming health workshops and webinars designed to support your wellbeing journey.
            </p>
            <Link href={`/employee-dashboard/${userId}/events`}>
              <Button variant="outline" className="w-full border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                View Events Calendar
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Feedback Card */}
        <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4">
            <CardTitle className="flex items-center text-lg">
              <MessageSquare className="mr-3 h-5 w-5 text-purple-600" />
              Share Feedback
            </CardTitle>
          </div>
          <CardContent className="p-6">
            <p className="mb-6 text-muted-foreground h-24">
              Help us improve our health support services by sharing your thoughts and experiences anonymously.
            </p>
            <Link href={`/employee-dashboard/${userId}/feedback`}>
              <Button variant="outline" className="w-full border-purple-200 hover:bg-purple-50 hover:text-purple-700">
                Submit Feedback
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 