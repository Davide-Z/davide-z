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
              <div class="display-1">{{ project.title }}</div>
            </v-card-title>

            <v-card-text>
              <blockquote class="blockquote">
                {{ project.overview }}
              </blockquote>
            </v-card-text>

            <v-divider inset></v-divider>
            <v-card-actions>
              <v-btn flat @click="project.toolsShow = !project.toolsShow">
                Tools
                <v-icon>
                  {{
                    project.toolsShow
                      ? 'keyboard_arrow_up'
                      : 'keyboard_arrow_down'
                  }}
                </v-icon>
              </v-btn>
            </v-card-actions>

            <v-slide-y-transition>
              <v-card-text v-show="project.toolsShow">
                <v-chip
                  color="primary"
                  text-color="white"
                  v-for="(tool, i) in project.tools"
                  :key="i"
                >
                  {{ tool }}
                </v-chip>
              </v-card-text>
            </v-slide-y-transition>

            <v-divider inset></v-divider>

            <v-card-title secondary-title>
              <div class="headline">Data</div>
            </v-card-title>
            <v-card-text>
              <blockquote class="blockquote">
                {{ project.data.description }}
              </blockquote>
              <br />
              <v-chip color="secondary" text-color="white">
                {{ project.data.n }} Data
              </v-chip>
              <v-chip color="secondary" text-color="white">
                {{ project.data.n_features }} Features
              </v-chip>
            </v-card-text>

            <v-card-actions>
              <v-btn
                flat
                @click="project.data.featuresShow = !project.data.featuresShow"
              >
                Feature examples
                <v-icon>
                  {{
                    project.data.featuresShow
                      ? 'keyboard_arrow_up'
                      : 'keyboard_arrow_down'
                  }}
                </v-icon>
              </v-btn>
            </v-card-actions>

            <v-slide-y-transition>
              <v-card-text v-show="project.data.featuresShow">
                <v-chip
                  color="tertiary"
                  text-color="white"
                  v-for="(feature, i) in project.data.feature_examples"
                  :key="i"
                >
                  {{ feature }}
                </v-chip>
              </v-card-text>
            </v-slide-y-transition>

            <v-divider inset></v-divider>

            <v-card-title secondary-title>
              <div class="headline">Graphics</div>
            </v-card-title>
            <v-layout row wrap justify-space-around align-end>
              <v-flex
                v-for="(figure, j) in project.figures"
                :key="j"
                md5
                sm4
                xs8
                justify-center
              >
                <v-img :src="figure.image"></v-img>
                <v-card-text class="font-weight-thin font-italic">
                  <p class="text-xs-center">
                    Figure {{ j }} : {{ figure.caption }}
                  </p>
                </v-card-text>
              </v-flex>
            </v-layout>
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
          tools: ['Python', 'Scikit-learn', 'Plotly', 'Tensorflow'],
          toolsShow: true,
          overview:
            "Alzheimer's disease is a chronic neurodegenerative disease that usually starts slowly and gradually worsens over time. This project aims at diagnosing Alzhaimer's among patients through their gait analysis.",
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
            featuresShow: true,
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
          tools: ['Python', 'Scikit-learn', 'Plotly', 'Tensorflow'],
          toolsShow: true,
          overview: 'TODO',
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
            featuresShow: true,
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
