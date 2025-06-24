<template>
    <div>
      <Card :animals="annonces" />
    </div>
  </template>
  
  <script>
  import Card from '@/components/Card.vue';
  
  export default {
    components: {
      Card
    },
    data() {
      return {
        annonces: []
      };
    },
    created() {
      fetch('http://localhost:3001/api/v1/animals')
        .then(response => response.json())
        .then(data => {
          this.annonces = data;
        })
        .catch(error => {
          console.error('Error fetching animals:', error);
        });
    }
  };
  </script>
  
  <style scoped>

  div {
    background-color: #f8f9fa;
  }
  </style>
  