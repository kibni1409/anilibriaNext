'use client'

import { useState, useEffect } from 'react';
import styles from "./Home.module.scss";
import Layout from "@/components/layout/Layout";
import { ReleaseService } from "@/services/releases.service";
import ReleaseCard from "@/components/ui/ReleaseCard/ReleaseCard";
import { Pagination } from 'antd';
import Loader from '@/components/ui/Loader/Loader';
import {TRelease} from "@/services/types";

interface PaginationState {
  current: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

const HomePage = () => {
  const [releases, setReleases] = useState<TRelease[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<PaginationState>({
    current: 1,
    pageSize: 15,
    total: 0,
    totalPages: 0
  });
  const [error, setError] = useState<string | null>(null);

  const fetchReleases = async (page: number): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await ReleaseService.getReleases(page);
      
      if (response?.list) {
        setReleases(response.list);
        if (response.pagination) {
          setPagination(prev => ({
            ...prev,
            current: response.pagination.current_page,
            pageSize: response.pagination.per_page,
            total: response.pagination.total,
            totalPages: response.pagination.total_pages
          }));
        }
      }
    } catch (error) {
      setError('Не удалось загрузить релизы. Попробуйте позже.');
      console.error('Error fetching releases:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReleases(1);
  }, []);

  const handlePageChange = (page: number): void => {
    fetchReleases(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <div className={styles.HomeContainer}>
        {error && (
          <div className={styles.errorMessage}>{error}</div>
        )}
        
        {loading ? (
          <Loader />
        ) : (
          <div className={styles.HomeWrap}>
            {releases?.map((release) => (
              <ReleaseCard release={release} key={release.id} />
            ))}
          </div>
        )}
        
        {!loading && !error && releases.length > 0 && (
          <div className={styles.paginationWrapper}>
            <Pagination
              current={pagination.current}
              total={pagination.total}
              pageSize={pagination.pageSize}
              onChange={handlePageChange}
              showSizeChanger={false}
              disabled={loading}
              showTotal={(total, range) => 
                `${range[0]}-${range[1]} из ${total} релизов`
              }
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;