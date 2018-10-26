import { storiesOf } from '@storybook/vue'
import ArticleCard from '../components/ArticleCard'

const defaultData = {
  article: {
    author: {
      id: 0,
      name: 'Faker Author 1'
    },
    id: 0,
    imageUrl: 'https://saxozapatos.com/8303-home_default/zapato-cordones-cuero.jpg',
    postedDate: 'Fri Aug 17 2018 08:17:20 GMT-0400 (EDT)',
    summary: 'Quam sed est quis distinctio quia perspiciatis eum. Quisquam ab quo mollitia. Et ut et doloremque. Aut similique aut explicabo unde neque nobis voluptatem. Quis doloremque nostrum sint distinctio expedita error.',
    title: 'Headline for Faker Article 1'
  }
}

storiesOf('ArticleCard', module)
  .add('default', () => ({
    components: { ArticleCard },
    template: '<ArticleCard :article="article"/>',
    data () {
      return {
        ...defaultData
      }
    }
  }),
  { notes: 'THE Article component is called by Article and is used on mos of views' }
  )
  .add('no mostrar el autor', () => ({
    components: { ArticleCard },
    template: '<ArticleCard :article="article" :show-author="false"/>',
    data () {
      return {
        ...defaultData
      }
    }
  }),
  {notes: 'the ArticleCard components without the author is user on the Author views'}
  )
