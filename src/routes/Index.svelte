<script>
  import { onMount } from 'svelte';
  import FeedItem from "../components/FeedItem.svelte";

  const api = window.ghostAPI;
  let postList = [];

  onMount(async () => {
		postList = await api.posts.browse({ limit: 10, page: 1, include: "tags" });
	});

  const getPostIndex = index => {
    var pagination = postList.meta.pagination;
    return pagination.total - (pagination.page - 1) * pagination.limit - index;
  };
</script>

<template>
  <div class="gh-container bg-white">
    <div class="feed-list simple">
      {#each postList as postItem, i}
        <FeedItem data={postItem} index={getPostIndex(i)} />
      {/each}
    </div>
  </div>
</template>
