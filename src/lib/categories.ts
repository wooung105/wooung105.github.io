export const blogCategories = [
  '개발',
  'CTF/Wargame',
  'BugbBounty',
  '블로그/기술문서',
  '논문/컨퍼런스',
  '공모전/자격증',
] as const;

export const categoryIcons: Record<(typeof blogCategories)[number], string> = {
  '개발': 'M4 4h16v12H4z M2 20h20 M9 8l-2 2 2 2 M15 8l2 2-2 2',
  'CTF/Wargame': 'M5 21V3 M5 3h14l-3 5 3 5H5',
  'BugbBounty': 'M8 10a4 4 0 0 1 8 0v6a4 4 0 0 1-8 0z M9 3l2 3 M15 3l-2 3 M4 10h4 M16 10h4 M4 15h4 M16 15h4 M5 21l4-3 M19 21l-4-3 M12 10v10',
  '블로그/기술문서': 'M5 3h14v18H5z M9 7h6 M9 11h6 M9 15h4',
  '논문/컨퍼런스': 'M5 3h9l5 5v13H5z M14 3v6h5 M9 13h6 M9 17h6',
  '공모전/자격증': 'M7 3h10v6a5 5 0 0 1-10 0z M7 5H3v3a4 4 0 0 0 4 4 M17 5h4v3a4 4 0 0 1-4 4 M12 14v6 M8 21h8',
};
