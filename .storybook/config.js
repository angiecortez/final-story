import { configure } from '@storybook/vue'
// automatically import all files ending in *.stories.js
// const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  require('../src/stories/indexStories')
  require('../src/stories/footerStories')
  require('../src/stories/Article.stories')
  require('../src/stories/ArticleCard.stories')
  require('../src/stories/ArticleList.stories')
  require('../src/stories/Author.stories')
  require('../src/stories/AuthorBio.stories')
  require('../src/stories/Authors.stories')
  // req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)