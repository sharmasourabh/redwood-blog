// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Article> = (args) => {
//   return <Article {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Article from './Article'

const ARTICLE = {
  id: 687,
  title: 'गायत्री मन्त्र',
  body: 'ॐ भूर्भुव: स्व: तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो न: प्रचोदयात्। अर्थात .. उस प्राणस्वरूप, दुःखनाशक, सुखस्वरूप, श्रेष्ठ, तेजस्वी, पापनाशक, देवस्वरूप परमात्मा को हम अपने अन्तःकरण में धारण करें। वह परमात्मा हमारी बुद्धि को सन्मार्ग की ओर प्रेरित करे।',
  createdAt: 'Thu, 22 Sep 2022 17:11:44 GMT',
}

export const full = () => {
  return <Article article={ARTICLE} />
}

export const summary = () => {
  return <Article article={ARTICLE} summary={true} />
}

export default { title: 'Components/Article' }
