<template>
  <div>
      <div>Event</div>
      <div>Event</div>
      <div>Event</div>
      <div>Event</div>
      <div>Event</div>
      <div>Event</div>
      <div>Event</div>
      <div>Event</div>


      <div> {{dataOverRoute}} </div>
      
  </div>
</template>

<script>
  export default {
    name: 'event',

    props: {
      dataOverRoute: { type: Object }
    }
  }
</script>
