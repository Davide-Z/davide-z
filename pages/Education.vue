<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
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
          school: 'ENSAE ParisTech',
          degree: 'MSc in Statistics',
          description:
            'French engineering school specialised in economy and statistics.',
          year: '2016 - 2018',
          courses:
            'Machine learning - Stochastic process - Statistics - Econometry - Financial economy - Game theory',
          image: require('@/assets/ensae_paristech.jpg')
        },
        {
          school: 'Télécom SudParis',
          degree: 'MSc in Computer Science',
          description:
            'French engineering school specialised in telecommunication and computer science.',
          year: '2016 - 2018',
          courses:
            'Probability - Scientific calculus -Statistical learning - Data stream programming - Software engineering - Relational algebra',
          image: require('@/assets/telecom_sudparis.jpg')
        },
        {
          school: 'Lycée Charlemagne',
          degree: 'French Preparatory Class',
          description: 'French preparatory class for Engineering school.',
          year: '2014 - 2016',
          courses: 'Mathematics - Physics',
          image: require('@/assets/lycee_charlemagne.jpg')
        },
        {
          school: 'Lycée Charlemagne',
          degree: 'Bac S',
          description: 'Paris 4th arrondissement secondary school.',
          year: '2011 - 2014',
          courses: 'Mathematics - Physics - Biology - Philosophy',
          image: require('@/assets/lycee_charlemagne_cours.jpg')
        }
      ]
    }
  }
}
</script>
