<script setup>
  import { ref } from 'vue'
  import BoardGame from './BoardGame.vue'
  const props = defineProps({
    BGGusers: Array,
    gameInfo: Array,
    colours: Array,
  })

  const sortKey = ref();
  const sortOrder = ref();
  const sortField = ref();
  const sortOptions = ref([
    {label: 'Name', value: 'name'},
    {label: 'Max players', value: 'maxplayers'},
  ]);

  const onSortChange = (event) => {
    const value = event.value.value;
    const sortValue = event.value;

    sortOrder.value = 1;
    sortField.value = value;
    sortKey.value = sortValue;
  };
</script>

<template>
<div v-if="BGGusers.length > 0">
  <DataView :value="gameInfo" layout="grid" :sortOrder="sortOrder" :sortField="sortField">
    <template #header>
      <Select v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Name" @change="onSortChange($event)" />
    </template>
    <template #grid="slotProps">
      <div class="grid grid-cols-12 border-0">
        <template v-for="(item, index) in slotProps.items" :key="index">
          <div v-if="item.minplayers <= BGGusers.length && item.maxplayers >= BGGusers.length" class="col-span-6 sm:col-span-3 md:col-span-2 xl:col-span-3">
            <BoardGame :game="item" :players="BGGusers" :colours="colours"/>
          </div>
        </template>
      </div>
    </template>
  </DataView>
</div>
<div v-else class="text">
  <h1>Welcome to Kallaxion!</h1>
  <h3>Here to help you choose a game</h3>

  <p>To get started, type your BoardGameGeek username into the box above to fetch your collection and see which of your games you can play solo.</p>
  <p>Add a second user to see all the games you both own that are for 2 players or more.</p>
  <p>Keep adding users and the games available to you will adjust based on that player count.</p>
</div>
</template>

<style scoped>
  .text {
      text-align: center;
  }

  p {
      padding: 20px;
  }
</style>
