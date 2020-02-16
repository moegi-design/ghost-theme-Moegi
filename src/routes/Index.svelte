<script>
  import FeedItem from "../components/FeedItem.svelte";

  const api = window.ghostAPI;
  let postList = [];

  const getPostsList = async () => {
    postList = await api.posts.browse({ limit: 5, include: 'tags' });
    console.log(postList);
    postList.forEach(post => {
      console.log(post.title);
    });
  };
  getPostsList();
</script>

<template>
  <div class="gh-container">
    <div class="feed-list simple">
      {#each postList as postItem, i}
        <FeedItem data={postItem} index={i} />
      {/each}
    </div>
  </div>
</template>
