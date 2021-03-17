<template>
  <el-input v-model="shelf.fuzzy" placeholder="搜索"></el-input>
  <el-button type="primary" @click="queryBookList()">搜索</el-button>

  <ul :class="shelf.type">
    <li v-for="item in shelf.list" :key="item.name" @click="showPage(item.id)">{{ item.name }}</li>
  </ul>

  <el-pagination
    background
    layout="prev, pager, next"
    :page-size="shelf.pageSize"
    :total="shelf.total"
    :current-page="shelf.currentPage"
    @current-change="queryBookList"
  >
  </el-pagination>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';

import { BookRead } from '@/core/entities';

import { apiPageNovel } from '@/core/apis';

export default defineComponent({
  name: 'vis-bookshelf',
  setup() {
    /**
     * @field {type} 书架展示类型 list列表/card卡片
     * @field {fuzzy} 模糊搜索
     * @field {list} 小说列表数据
     */
    const shelf: { type: string; fuzzy: string; pageSize: number; currentPage: number; total: number; list: BookRead[] } = reactive({
      type: 'list',
      fuzzy: '',
      pageSize: 20,
      currentPage: 0,
      total: 0,
      list: []
    });

    const params = computed(() => ({ fuzzy: shelf.fuzzy, pageSize: shelf.pageSize, currentPage: shelf.currentPage }));

    return { shelf, params };
  },
  created() {
    this.queryBookList();
  },
  methods: {
    // 分页查询列表数据
    queryBookList(current: number | undefined = undefined) {
      console.log(current);

      apiPageNovel(current ? Object.assign({}, this.params, { currentPage: current }) : this.params).then(res => {
        this.shelf.total = res.data.total;
        this.shelf.currentPage = res.data.current;
        this.shelf.list = res.data.records;
      });
    },
    // 去详情页
    showPage(id: string) {
      //
      this.$router.push(`/page/${id}`);
    }
  }
});
</script>

<style lang="scss" scoped>
.card {
  background-color: #e9faff;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  li {
    flex: 0 0 33%;
    background-color: #fff;
    height: 200px;
    margin: 20px;
  }
}

.list {
  background-color: #e9faff;
  padding: 1rem;
  margin: 0;
  // height: 100%;
  overflow-y: auto;

  li {
    list-style: none;
    line-height: 2rem;
    border-bottom: 1px dashed gainsboro;
  }

  li:active {
    background-color: #e8e8e8;
    user-select: none;
  }
}
</style>
