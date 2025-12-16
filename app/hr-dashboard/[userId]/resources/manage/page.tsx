'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';

// Import types
import { Resource } from './types';

// Import services
import { fetchResources, deleteResource as deleteResourceService } from './services';

// Import utils
import { filterResources, sortResources } from './utils';

// Import components
import HeaderSection from './components/HeaderSection';
import UnauthorizedView from './components/UnauthorizedView';
import LoadingView from './components/LoadingView';
import ErrorView from './components/ErrorView';
import EmptyView from './components/EmptyView';
import SearchAndFilters from './components/SearchAndFilters';
import ResourceTable from './components/ResourceTable';
import DeleteConfirmationDialog from './components/DeleteConfirmationDialog';

export default function ManageResourcesPage({ params }: { params: Promise<{ userId: string }> }) {
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
  const [sortField, setSortField] = useState<keyof Resource>('createdAt');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [resourceToDelete, setResourceToDelete] = useState<Resource | null>(null);

  // Load resources
  const loadResources = async () => {
    setLoading(true);
    setError(null);
    
    const { resources: fetchedResources, error: fetchError } = await fetchResources();
    
    if (fetchError) {
      setError(fetchError);
    } else {
      setResources(fetchedResources);
    }
    
    setLoading(false);
  };

  // Handle resource deletion
  const handleDeleteResource = async () => {
    if (!resourceToDelete) return;
    
    const { success, error: deleteError } = await deleteResourceService(resourceToDelete.id);
    
    if (success) {
      setResources(resources.filter(r => r.id !== resourceToDelete.id));
      setResourceToDelete(null);
    } else if (deleteError) {
      setError(deleteError);
    }
  };

  // Toggle sort field and direction
  const handleSortChange = (field: keyof Resource) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSearchTerm('');
    setCategoryFilter('all');
    setFileTypeFilter('all');
  };

  // View resource in new tab
  const handleViewResource = (resource: Resource) => {
    window.open(resource.fileUrl, '_blank');
  };

  // Load resources on component mount
  useEffect(() => {
    loadResources();
  }, []);

  // Check if user has HR or admin permissions
  if (session?.user?.role !== 'hr' && session?.user?.role !== 'admin') {
    return <UnauthorizedView />;
  }

  // Apply filters and sorting
  const filteredResources = filterResources(
    resources,
    searchTerm,
    categoryFilter,
    fileTypeFilter
  );
  
  const sortedResources = sortResources(
    filteredResources,
    sortField,
    sortDirection
  );

  // Check if any filters are applied
  const hasFilters = searchTerm !== '' || categoryFilter !== 'all' || fileTypeFilter !== 'all';

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <HeaderSection userId={userId} />

      <Card className="shadow-sm border-muted">
        <CardHeader className="border-b bg-muted/30 pb-5">
          <SearchAndFilters 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            categoryFilter={categoryFilter}
            onCategoryChange={setCategoryFilter}
            onClearFilters={handleClearFilters}
          />
        </CardHeader>
        <CardContent className="p-0">
          {loading ? (
            <LoadingView />
          ) : error ? (
            <ErrorView error={error} onRetry={loadResources} />
          ) : sortedResources.length === 0 ? (
            <EmptyView 
              userId={userId} 
              hasFilters={hasFilters} 
              onClearFilters={handleClearFilters} 
            />
          ) : (
            <ResourceTable 
              resources={sortedResources}
              sortField={sortField}
              sortDirection={sortDirection}
              onSortChange={handleSortChange}
              onViewResource={handleViewResource}
              onDeleteResource={setResourceToDelete}
            />
          )}
        </CardContent>
      </Card>

      <DeleteConfirmationDialog
        open={!!resourceToDelete}
        onOpenChange={(open) => !open && setResourceToDelete(null)}
        resource={resourceToDelete}
        onConfirmDelete={handleDeleteResource}
      />
    </div>
  );
} 