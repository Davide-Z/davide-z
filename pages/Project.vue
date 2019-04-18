<template>
  <v-tabs centered grow>
    <v-tab v-for="(project, i) in projects" :key="i">
      {{ project.tab }}
    </v-tab>

    <v-tab-item v-for="(project, i) in projects" :key="i">
      <v-layout justify-center>
        <v-flex md8>
          <v-card flat>
            <v-card-title primary-title>
              <div class="headline">{{ project.title }}</div>
            </v-card-title>

            <v-card-text>{{ project.overview }}</v-card-text>

            <v-divider inset></v-divider>

            <v-card-text>{{ project.data.description }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          tab: 'Health',
          title: 'Gait analysis for Alzheimer detection',
          libraries: ['Python', 'Scikit-learn', 'Plotly', 'Tensorflow'],
          overview: 'overview TODO',
          link:
            'https://cassiopee.wp.telecom-sudparis.eu/2018-projet-n70-learning-alzheimer-analyse-de-la-marche/',
          data: {
            n: '853',
            n_features: '84',
            feature_examples: [
              'Cadence',
              'Ambulation time',
              'Velocity',
              'Swing percentage'
            ],
            description:
              "203 Patients' gait parameters measured with the pressure sensitive walkway GAITRite®."
          },
          figures: [
            {
              caption: 'Diagnostics proportion',
              image: require('@/assets/project/health_fig1.png')
            },
            {
              caption: 'Cadence distribution by diagnostic',
              image: require('@/assets/project/health_fig2.png')
            }
          ]
        },
        {
          tab: 'NLP',
          title: 'Gait analysis for Alzheimer detection',
          libraries: ['Python', 'Scikit-learn', 'Plotly', 'Tensorflow'],
          overview: 'overview TODO',
          link:
            'https://cassiopee.wp.telecom-sudparis.eu/2018-projet-n70-learning-alzheimer-analyse-de-la-marche/',
          data: {
            n: '853',
            n_features: '84',
            feature_examples: [
              'Cadence',
              'Ambulation time',
              'Velocity',
              'Swing percentage'
            ],
            description:
              "203 Patients' gait parameters measured with the pressure sensitive walkway GAITRite®."
          },
          figures: [
            {
              caption: 'Diagnostics proportion',
              image: require('@/assets/project/health_fig1.png')
            },
            {
              caption: 'Cadence distribution by diagnostic',
              image: require('@/assets/project/health_fig2.png')
            }
          ]
        }
      ]
    }
  }
}
</script>
