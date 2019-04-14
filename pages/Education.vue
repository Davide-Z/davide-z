<template>
  <v-timeline>
    <v-timeline-item v-for="(education, i) in educations" :key="i">
      <v-card class="elevation-10">
        <v-img :src="education.image" />
        <v-card-title primary-title>
          <div>
            <div class="title">{{ education.school }}</div>
            <span class="subtitle">
              {{ education.degree }}
            </span>
          </div>
        </v-card-title>
        <v-card-text>{{ education.description }}</v-card-text>
      </v-card>
      <template v-slot:opposite>
        <span class="font-weight-bold" v-text="education.year"></span>
      </template>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data() {
    return {
      educations: [
        {
          school: 'Lycée Charlemagne',
          degree: 'French Preparatory Class',
          description: 'French preparatory class for Engineering school',
          year: '2014 - 2016',
          courses: 'Mathematics, Physics',
          image: require('@/assets/lycee_charlemagne.jpg')
        },
        {
          school: 'Lycée Charlemagne',
          degree: 'Bac S',
          description: 'Paris 4th arrondissement secondary school',
          year: '2011 - 2014',
          courses: 'Mathematics, Physics, Biology, Philosophy',
          image: require('@/assets/lycee_charlemagne.jpg')
        }
      ]
    }
  }
}
</script>
