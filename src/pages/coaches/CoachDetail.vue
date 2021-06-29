<template>
  <section>
    <base-card>
      <h2>{{fullName}}</h2>
      <h3>$ {{rate}} /hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button hasLink :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :id="area" :type="area" :title="area"></base-badge>
      <p>{{description}}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + '' + this.selectedCoach.lastName;
    },
    contactLink() {
      if (this.$route.path.includes('contact')) {
        return `${this.$route.path}`;
      }
      return this.$route.path + '/' + this.id + '/contact';
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach => {
      return coach.id === this.id;
    });
  }
};
</script>

<style>
</style>
