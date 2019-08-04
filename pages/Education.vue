<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item v-for="(education, i) in educations" :key="i">
      <v-card class="elevation-10">
        <v-img :src="education.image" height="300" />
        <v-card-title>
          <div>
            <div class="title">{{ education.school }}</div>
            <span class="subtitle">
              {{ education.degree }}
            </span>
            <span v-if="$vuetify.breakpoint.smAndDown">
              ({{ education.year }})
            </span>
          </div>
          <v-spacer></v-spacer>
          <v-img
            v-if="$vuetify.breakpoint.mdAndUp"
            :src="education.logo"
            height="100"
            contain
          />
        </v-card-title>
        <v-card-text>{{ education.description }}</v-card-text>

        <v-card-actions>
          <v-btn flat @click="education.show = !education.show">
            Courses
            <v-icon>
              {{ education.show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}
            </v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="education.show">
            <v-chip v-for="(course, i) in education.courses" :key="i">
              {{ course }}
            </v-chip>
          </v-card-text>
        </v-slide-y-transition>
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
          year: '2018 - 2020',
          courses: [
            'Machine learning',
            'Stochastic process',
            'Statistics',
            'Econometry',
            'Financial economy',
            'Game theory'
          ],
          image: require('@/assets/education/ensae_paristech.jpg'),
          logo: require('@/assets/education/ensae_logo.jpg'),
          show: false
        },
        {
          school: 'Télécom SudParis',
          degree: 'MSc in Computer Science',
          description:
            'French engineering school specialised in telecommunication and computer science.',
          year: '2016 - 2018',
          courses: [
            'Probability',
            'Scientific calculus',
            'Statistical learning',
            'Data stream programming ',
            'Software engineering',
            'Relational algebra'
          ],
          image: require('@/assets/education/telecom_sudparis.jpg'),
          logo: require('@/assets/education/tsp_logo.png'),
          show: false
        },
        {
          school: 'Lycée Charlemagne',
          degree: 'French Preparatory Class - MPSI/MP*',
          description:
            'Paris 4th arrondissement french preparatory class for engineering school entrance exams.',
          year: '2014 - 2016',
          courses: [
            'Mathematics',
            'Physics',
            'Engineering Science',
            'Chemistry'
          ],
          image: require('@/assets/education/lycee_charlemagne.jpg'),
          logo: require('@/assets/education/charlemagne_logo.png'),
          show: false
        },
        {
          school: 'Lycée Charlemagne',
          degree: 'A-Level - French Scientific Baccalauréat',
          description: 'Paris 4th arrondissement secondary school.',
          year: '2011 - 2014',
          courses: [
            'Mathematics',
            'Physics',
            'Biology',
            'Philosophy',
            'Geography',
            'History'
          ],
          image: require('@/assets/education/lycee_charlemagne_cours.jpg'),
          logo: require('@/assets/education/charlemagne_logo.png'),
          show: false
        }
      ]
    }
  }
}
</script>
