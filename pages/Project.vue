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
          title: 'Gait Analysis for Alzheimer Detection',
          tools: ['Python', 'Scikit-learn', 'Plotly', 'Tensorflow'],
          toolsShow: true,
          overview:
            "Alzheimer's disease is a chronic neurodegenerative disease 😷 that usually starts slowly and gradually worsens over time. This project aims at diagnosing Alzhaimer's among patients through their gait analysis 👣.",
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
              "203 Patients' gait parameters measured with the pressure sensitive walkway GAITRite® provided by the university hospital trust in Paris 🏥, namely the Assistance Publique – Hôpitaux de Paris (AP-HP)."
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
          title: 'AlloCiné User Reviews Relevance Ranking',
          tools: ['Python', 'Scikit-learn', 'Beatiful Soup', 'Word2Vec'],
          toolsShow: true,
          overview:
            "AlloCiné is a French website 🇫🇷 specialised in film and serie referencing 🎬. The website is largely used in France to get information and reviews on films. Users can post their personal review on films, helping thus other users to get a glance before watching them at the cinema. This project aims at displaying relevant and insightful reviews at the top of the list. The relevance is defined subjectively according to other users' reaction (😊 or ☹️) to the review.",
          link:
            'https://cassiopee.wp.telecom-sudparis.eu/2018-projet-n70-learning-alzheimer-analyse-de-la-marche/',
          data: {
            n: '79652',
            n_features: '300 (Word2Vec) ➕ 34',
            feature_examples: [
              'Length',
              'Synopsis similarity',
              'Actors mentionned',
              'Word2Vec feature space'
            ],
            featuresShow: true,
            description:
              "User reviews of 2016's films obtained by web scraping with Python HTML parser Beautiful Soup. In order to have accurate user reactions, data scraping is only limited to reviews published within 180 days ⏳ after film release."
          },
          figures: [
            {
              caption: 'Reviews scraping',
              image: require('@/assets/project/nlp_fig1.png')
            },
            {
              caption: 'Cumulative distribution of absolute rank error',
              image: require('@/assets/project/nlp_fig2.png')
            }
          ]
        }
      ]
    }
  }
}
</script>
