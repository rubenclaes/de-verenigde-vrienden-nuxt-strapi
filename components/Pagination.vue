<template>
  <nav aria-label="Pagination">
    <ul class="pagination">
      <li class="page-item disabled">
        <router-link v-if="page > 1" :to="`/${feed}/${page - 1}`">
          <i class="fa fa-angle-left"></i>
          <span class="sr-only">Previous</span>
        </router-link>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">1</a>
      </li>
      <li class="page-item active">
        <a class="page-link" href="#">
          2
          <span class="sr-only">{{ page }}</span>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">{{ maxPage }}</a>
      </li>
      <li class="page-item">
        <router-link v-if="hasMore" :to="`/${feed}/${page + 1}`">
          <i class="fa fa-angle-right"></i>
          <span class="sr-only">Next</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class ItemListNav extends Vue {
  @Prop({ type: String, required: true })
  feed!: string;

  @Prop({ type: Number, required: true })
  page!: number;

  @Prop({ type: Number, required: true })
  maxPage!: number;

  get hasMore() {
    return this.page < this.maxPage;
  }
}
</script>