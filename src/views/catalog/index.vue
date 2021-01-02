<template>
  <ul class="catalog-list">
    <li v-for="(item, i) in catalogList" :key="i">{{ item }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'vis-catalog',
  setup() {
    // 目录列表
    const catalogList: string[] = reactive([]);
    return { catalogList };
  },
  created() {
    this.queryCatalogList();
  },
  methods: {
    queryCatalogList() {
      this.catalogList.push(
        ...[
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸',
          '第八百一十二章 栽赃嫁祸'
        ]
      );
    }
  }
});
</script>

<style lang="scss" scoped>
.catalog-list {
  background-color: #e9faff;
  padding: 1rem;
  margin: 0;
  height: 100%;
  overflow-y: auto;

  li {
    list-style: none;
    line-height: 2rem;
    border-bottom: 1px dashed gainsboro;
  }
}
</style>
