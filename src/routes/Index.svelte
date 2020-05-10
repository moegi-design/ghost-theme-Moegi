<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import Hero from "../components/Hero.svelte";
  import FeedItem from "../components/FeedItem.svelte";
  import Pagination from "../components/Pagination.svelte";

  export let params = {};

  const api = window.ghostAPI;
  const dispatch = createEventDispatcher();
  let postList = [];
  let paginationData = {};
  let page = params.page || 1

  onMount(async () => {
    postList = await api.posts.browse({ limit: 8, page, include: "tags" });
    paginationData = postList.meta;
    dispatch("message", {
      func: "setLoadStatus",
      data: {
        loaded: true
      }
    });
	});

  const getPostIndex = index => {
    var pagination = postList.meta.pagination;
    return pagination.total - (pagination.page - 1) * pagination.limit - index;
  };
</script>

<template>
  <Hero/>
  <div class="gh-container bg-white">
    <div class="feed-list simple">
      {#each postList as postItem, i}
        <FeedItem data={postItem} index={getPostIndex(i)} />
      {/each}
    </div>
    {#if paginationData.pagination}
      <Pagination paginationData={paginationData.pagination} />
    {/if}
  </div>
</template>
