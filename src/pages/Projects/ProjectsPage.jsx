import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, PROJECT_CATEGORIES } from '../../data/projects.js';
import { useDebounce } from '../../hooks/useDebounce.js';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';
import ProjectCard from '../../components/projects/ProjectCard.jsx';
import Icon from '../../components/ui/Icon.jsx';
import Button from '../../components/ui/Button.jsx';
import './ProjectsPage.css';

export default function ProjectsPage() {
  useDocumentTitle('Dự án — Projects');

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 250);

  // Filter & Search logic
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // 1. Category Filter
      const matchesCategory =
        activeCategory === 'all' || project.categories.includes(activeCategory);

      // 2. Search Term Filter (tên hoặc công nghệ)
      const query = debouncedSearch.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.tech.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, debouncedSearch]);

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchTerm('');
  };

  return (
    <main className="page projects-page" id="main-content">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <div className="page-header__meta">
            <span className="section-subtitle">Dự án thực tế & Học thuật</span>
            <h1 className="page-title">Sản Phẩm & Dự Án Đã Làm</h1>
            <p className="page-description">
              Tất cả dự án dưới đây được dựng từ dữ liệu <code>src/data/projects.js</code>, render bằng <code>.map()</code>,
              có bộ lọc danh mục và ô tìm kiếm tức thì.
            </p>
          </div>

          <div className="projects-count-pill">
            <Icon name="projects" size={16} />
            <span>
              Hiển thị <strong>{filteredProjects.length}</strong> / {PROJECTS.length} dự án
            </span>
          </div>
        </div>

        {/* Filter & Search Bar Toolbar */}
        <section className="projects-toolbar card" aria-label="Bộ lọc và tìm kiếm dự án">
          {/* Category Tabs */}
          <div className="category-tabs" role="tablist" aria-label="Phân loại dự án">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`category-tab-btn ${activeCategory === cat.id ? 'category-tab-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.span
                    layoutId="active-category-pill"
                    className="category-tab-pill"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="search-wrap">
            <Icon name="search" size={18} className="search-icon" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm theo tên dự án, công nghệ (React, Next.js, Flutter...)"
              className="search-input"
              aria-label="Tìm kiếm dự án"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="search-clear"
                aria-label="Xóa nội dung tìm kiếm"
              >
                <Icon name="close" size={16} />
              </button>
            )}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="projects-grid-section section" aria-label="Danh sách dự án">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <motion.div className="projects-grid" layout>
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            ) : (
              /* Empty state */
              <motion.div
                className="projects-empty card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="empty-icon-wrap">
                  <Icon name="search" size={32} />
                </div>
                <h3 className="empty-title">Không tìm thấy dự án phù hợp</h3>
                <p className="empty-text">
                  Không có dự án nào khớp với từ khóa <strong>&ldquo;{debouncedSearch}&rdquo;</strong> trong danh mục được chọn.
                </p>
                <Button variant="primary" onClick={handleResetFilters}>
                  Đặt lại bộ lọc
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </main>
  );
}
