import { useEffect } from 'react';
import { PROFILE } from '../data/profile.js';

/** Cập nhật <title> theo từng trang (SEO + screen reader thông báo trang mới) */
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${PROFILE.fullName}` : `${PROFILE.fullName} — ${PROFILE.role}`;
  }, [title]);
}

