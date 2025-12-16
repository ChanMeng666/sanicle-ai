'use client';

import { Search, Grid, List } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect, useState, use } from 'react';

// UI Components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Local imports
import DashboardLayout from "../../components/DashboardLayout";
import PopularResources from './components/PopularResources';
import ResourceGrid from './components/ResourceGrid';
import ResourceList from './components/ResourceList';
import { fetchResources } from './services';
import { Resource, ViewMode } from './types';
import { getCategoryCounts, getFilteredResources, getPopularResources } from './utils';

// Color schemes for different resource categories
const CATEGORY_COLORS = {
  policy_documents: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800",
  menstrual_health_resources: "bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950/70 dark:text-rose-300 dark:border-rose-800",
  menopause_health_resources: "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800",
  workshop_materials: "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800",
  others: "bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-950/70 dark:text-purple-300 dark:border-purple-800",
  all: "bg-gray-50 text-gray-600 border-gray-200 dark:bg-gray-800/70 dark:text-gray-300 dark:border-gray-700"
};

// Color schemes for different file types
const FILE_TYPE_COLORS = {
  pdf: "bg-red-50 text-red-600 border-red-200 dark:bg-red-950/70 dark:text-red-300 dark:border-red-800",
  word: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800",
  presentation: "bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-950/70 dark:text-orange-300 dark:border-orange-800",
  spreadsheet: "bg-green-50 text-green-600 border-green-200 dark:bg-green-950/70 dark:text-green-300 dark:border-green-800",
  image: "bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-950/70 dark:text-purple-300 dark:border-purple-800",
  video: "bg-pink-50 text-pink-600 border-pink-200 dark:bg-pink-950/70 dark:text-pink-300 dark:border-pink-800",
  text: "bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-800/70 dark:text-slate-300 dark:border-slate-700",
  all: "bg-gray-50 text-gray-600 border-gray-200 dark:bg-gray-800/70 dark:text-gray-300 dark:border-gray-700"
};

// Category display names (shortened) - same as in other components
const CATEGORY_DISPLAY_NAMES: Record<string, string> = {
  policy_documents: "Policy",
  menstrual_health_resources: "Menstrual",
  menopause_health_resources: "Menopause",
  workshop_materials: "Workshop",
  others: "Other",
  all: "All Categories"
};

/**
 * Employee Resources Page
 * Enhanced for mobile responsiveness
 */
export default function EmployeeResourcesPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = use(params);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace('/login');
    },
  });
  const router = useRouter();
  
  // State management
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [fileTypeFilter, setFileTypeFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [popularResources, setPopularResources] = useState<Resource[]>([]);

  // Load resources when component mounts
  useEffect(() => {
    if (session) {
      const loadResources = async () => {
        setLoading(true);
        setError(null);
        try {
          const data = await fetchResources();
          setResources(data);
          // Set popular resources (top 3 by view count)
          setPopularResources(getPopularResources(data, 3));
        } catch (error) {
          console.error('Error loading resources:', error);
          setError('Failed to fetch resource list, please try again');
        } finally {
          setLoading(false);
        }
      };
      
      loadResources();
    }
  }, [session]);

  // Apply filters to resources
  const filteredResources = getFilteredResources(
    resources,
    searchTerm,
    categoryFilter,
    fileTypeFilter,
    'all' // Pass default 'all' as activeTab parameter to maintain compatibility
  );
  
  // Get category counts for display
  const categoryCounts = getCategoryCounts(resources);

  // Get color class for the category
  const getCategoryColorClass = (category: string) => {
    return CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] || CATEGORY_COLORS.others;
  };

  // Get color class for the file type
  const getFileTypeColorClass = (fileType: string) => {
    return FILE_TYPE_COLORS[fileType as keyof typeof FILE_TYPE_COLORS] || FILE_TYPE_COLORS.text;
  };
  
  // Get short display name for category
  const getCategoryDisplayName = (category: string) => {
    const key = category as keyof typeof CATEGORY_DISPLAY_NAMES;
    return CATEGORY_DISPLAY_NAMES[key] || category;
  };

  return (
    <DashboardLayout
      userId={userId}
      title="Health Resource Library"
      description="Access health resources, guides and policy documents to support your wellbeing"
    >
      {/* New Horizontal Search & Filter Bar */}
      <Card className="mb-3 sm:mb-6 border shadow-sm bg-white/50 dark:bg-card/40 backdrop-blur-sm dark:border-border/40 dark:shadow-primary/5">
        <CardContent className="p-2 sm:p-4">
          <div className="flex flex-col gap-2 sm:gap-4">
            <div className="relative w-full">
              <Search className="absolute left-2 sm:left-3 top-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-7 sm:pl-9 text-xs sm:text-sm h-8 sm:h-10 border-primary/10 focus:border-primary/30 focus:ring-primary/20 dark:border-primary/30 dark:focus:border-primary/50 dark:bg-background/50"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:gap-4">
              <div className="flex-shrink-0 w-full sm:w-auto">
                <Select 
                  value={categoryFilter} 
                  onValueChange={setCategoryFilter}
                >
                  <SelectTrigger className={`w-full text-xs sm:text-sm h-8 sm:h-10 md:w-auto md:min-w-[180px] sm:min-w-[150px] border ${getCategoryColorClass(categoryFilter)}`}>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="policy_documents" className={CATEGORY_COLORS.policy_documents}>Policy Documents</SelectItem>
                    <SelectItem value="menstrual_health_resources" className={CATEGORY_COLORS.menstrual_health_resources}>Menstrual Health Resources</SelectItem>
                    <SelectItem value="menopause_health_resources" className={CATEGORY_COLORS.menopause_health_resources}>Menopause Health Resources</SelectItem>
                    <SelectItem value="workshop_materials" className={CATEGORY_COLORS.workshop_materials}>Workshop Materials</SelectItem>
                    <SelectItem value="others" className={CATEGORY_COLORS.others}>Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex-shrink-0 w-full sm:w-auto">
                <Select 
                  value={fileTypeFilter} 
                  onValueChange={setFileTypeFilter}
                >
                  <SelectTrigger className={`w-full text-xs sm:text-sm h-8 sm:h-10 md:w-auto md:min-w-[150px] sm:min-w-[130px] border ${getFileTypeColorClass(fileTypeFilter)}`}>
                    <SelectValue placeholder="All File Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All File Types</SelectItem>
                    <SelectItem value="pdf" className={FILE_TYPE_COLORS.pdf}>PDF</SelectItem>
                    <SelectItem value="word" className={FILE_TYPE_COLORS.word}>Word</SelectItem>
                    <SelectItem value="presentation" className={FILE_TYPE_COLORS.presentation}>PPT</SelectItem>
                    <SelectItem value="spreadsheet" className={FILE_TYPE_COLORS.spreadsheet}>Excel</SelectItem>
                    <SelectItem value="image" className={FILE_TYPE_COLORS.image}>Image</SelectItem>
                    <SelectItem value="video" className={FILE_TYPE_COLORS.video}>Video</SelectItem>
                    <SelectItem value="text" className={FILE_TYPE_COLORS.text}>Text</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-2 flex justify-end sm:ml-auto sm:justify-start gap-2">
                <Button 
                  variant={viewMode === 'grid' ? "secondary" : "outline"} 
                  size="sm" 
                  onClick={() => setViewMode('grid')}
                  className="w-8 h-8 sm:w-10 sm:h-10 p-0 dark:border-border/50 dark:hover:bg-primary/10"
                >
                  <Grid className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
                <Button 
                  variant={viewMode === 'list' ? "secondary" : "outline"} 
                  size="sm" 
                  onClick={() => setViewMode('list')}
                  className="w-8 h-8 sm:w-10 sm:h-10 p-0 dark:border-border/50 dark:hover:bg-primary/10"
                >
                  <List className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-3 sm:space-y-6 order-2 lg:order-1">
          {loading ? (
            <div className="flex justify-center items-center py-6 sm:py-10">
              <div className="text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 border-t-2 border-primary border-r-2 rounded-full animate-spin mx-auto mb-3 sm:mb-4"></div>
                <p className="text-xs sm:text-sm text-muted-foreground">Loading resources...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center py-6 sm:py-10 border border-red-200 rounded-lg bg-red-50 dark:bg-red-950/30 dark:border-red-800/50 dark:text-red-300">
              <p className="text-xs sm:text-sm text-red-600 dark:text-red-300">{error}</p>
            </div>
          ) : filteredResources.length === 0 ? (
            <div className="flex justify-center items-center py-8 sm:py-12 border rounded-lg bg-gray-50/50 dark:bg-gray-800/30 dark:border-gray-700/50">
              <div className="text-center px-3 sm:px-4 py-6 sm:py-8">
                <Search className="h-8 w-8 sm:h-12 sm:w-12 text-gray-300 dark:text-gray-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-medium mb-2">No resources found</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">We couldn&apos;t find any resources matching your search criteria</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Try adjusting your filters or search term</p>
              </div>
            </div>
          ) : viewMode === 'grid' ? (
            <ResourceGrid resources={filteredResources} />
          ) : (
            <ResourceList resources={filteredResources} />
          )}
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-3 sm:space-y-6 order-1 lg:order-2 mb-3 sm:mb-0">
          {/* Popular Resources */}
          <div className="lg:sticky lg:top-24">
            <PopularResources resources={popularResources} />
          </div>
        </div>
      </div>

      {/* Resource Summary */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-6 gap-4">
        <div>
          <p className="text-sm text-muted-foreground">
            Showing {filteredResources.length} of {resources.length} resources
            {categoryFilter !== 'all' && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="outline" className={`ml-2 ${getCategoryColorClass(categoryFilter)}`}>
                      {getCategoryDisplayName(categoryFilter)}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">{categoryFilter.replace(/_/g, ' ')}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {fileTypeFilter !== 'all' && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="outline" className={`ml-2 ${getFileTypeColorClass(fileTypeFilter)}`}>
                      {fileTypeFilter}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">{fileTypeFilter} file</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
} 