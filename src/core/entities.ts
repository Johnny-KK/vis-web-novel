// 页面实体
export interface PageEntity {
  title: string; // 标题
  chapter?: number; // 章节号
  paraList: string[]; // 段落列表
}

// 已读书实体
export interface BookRead {
  name: string; // 书名
  progress: number; // 阅读进度 [0-100]
}
