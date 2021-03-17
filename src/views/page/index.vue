<template>
  <div class="page">
    <h1 class="title">{{ page.page.title }}</h1>
    <el-divider></el-divider>

    <p v-for="(item, i) in list" :key="i" class="para">{{ item }}</p>

    <div class="footer">
      <el-button>上一页</el-button>
      <el-button>目录</el-button>
      <el-button>下一页</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { PageEntity } from '@/core/entities';
import { computed, defineComponent, reactive, ComputedRef } from 'vue';

import { apiGetChapterByNovelId } from '@/core/apis';

import { pageData } from './data';

export default defineComponent({
  name: 'vis-page',
  props: {
    // 小说主键
    novelId: { type: String, default: '' }
  },
  setup() {
    const page: { page: PageEntity } = reactive({ page: { title: '', content: '' } });

    const list: ComputedRef<string[]> = computed(() => {
      return page.page.content
        .replaceAll(/[「」]/g, '')
        .split('。')
        .map(x => (x += '。'));
    });

    return { page, list };
  },
  created() {
    this.queryPage();
    console.log(pageData);
  },
  methods: {
    queryPage() {
      apiGetChapterByNovelId(this.novelId).then(res => {
        this.page.page = res.data;
      });
    }
  }
});
</script>

<style lang="scss" scoped>
.page {
  background-color: #e9faff;
  padding: 1rem;
  height: 100%;
  overflow-y: auto;

  .title {
    font-size: 20px;
    text-align: center;
    margin: 0.5rem 0;
  }

  .para {
    text-indent: 2rem;
    line-height: 1.5rem;
  }

  .footer {
    text-align: center;
  }
}

.el-divider {
  margin: 12px 0;
}
</style>
