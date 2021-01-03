<template>
  <div class="bookshelf">
    <div class="book" v-for="item in bookList" :key="item.name">{{ item.name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

import { BookRead } from '@/core/entities';

export default defineComponent({
  name: 'vis-bookshelf',
  setup() {
    const bookList: BookRead[] = reactive([]);
    return { bookList };
  },
  created() {
    this.queryBookList();
  },
  methods: {
    queryBookList() {
      this.bookList.push(
        ...[
          { name: '书本一', progress: 20 },
          { name: '书本一', progress: 20 },
          { name: '书本一', progress: 20 },
          { name: '书本一', progress: 20 }
        ]
      );
    }
  }
});
</script>

<style lang="scss" scoped>
.bookshelf {
  background-color: #e9faff;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .book {
    background-color: #fff;
    flex: 0 0 33%;
  }
}
</style>
