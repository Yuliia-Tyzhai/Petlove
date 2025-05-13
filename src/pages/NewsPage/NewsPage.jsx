import React, { useState, useEffect } from 'react';
import Title from '../../components/Title/Title';
import SearchField from '../../components/SearchField/SearchField';
import NewsList from '../../components/NewsList/NewsList';
import Pagination from '../../components/Pagination/Pagination';
import { fetchNews } from '../../services/api';
import styles from './NewsPage.module.css';

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchNews(searchQuery, page, setNews);
  }, [searchQuery, page]);

  return (
    <div className={styles.newsPage}>
      <Title />
      <SearchField onSearch={setSearchQuery} />
      <NewsList news={news} />
      <Pagination currentPage={page} setPage={setPage} />
    </div>
  );
};

export default NewsPage;
