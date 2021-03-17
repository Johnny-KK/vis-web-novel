import http from './axios';
import { ApiPage, ApiResponse, BookRead, PageEntity } from './entities';

// 分页查询小说列表
export function apiPageNovel(params: object): Promise<ApiResponse<ApiPage<BookRead>>> {
  return http.post('novel/pageNovel', params );
}

// 根据ID查询小说内容
export function apiGetChapterByNovelId(novelId:string): Promise<ApiResponse<PageEntity>> {
  return http.get('chapter/getChapterByNovelId', {params: {novelId}})
}
