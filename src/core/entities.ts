/** 标准后台请求返回接口 */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  msg: string;
}

/** 分页后台请求返回接口 */
export interface ApiPage<T> {
  records: T[];
  current: number;
  size: number;
  total: number;
}

// 页面实体
export interface PageEntity {
  title: string; // 标题
  content: string; // 章节内容
}

// 已读书实体
export interface BookRead {
  id: string; // 主键
  name: string; // 书名
  progress: number; // 阅读进度 [0-100]
}
