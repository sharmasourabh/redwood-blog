// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Comment> = (args) => {
//   return <Comment {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Comment from './Comment'

export const defaultView = () => {
  return (
    <Comment
      comment={{
        name: 'Rob Cameron',
        body: 'This is the first comment!',
        createdAt: '2020-01-01T12:34:56Z',
      }}
    />
  )
}

export const moderatorView = () => {
  // Similar to mockGraphQLQuery() and mockGraphQLMutation(), mockCurrentUser() is a global available in Storybook automatically, no need to import.
  mockCurrentUser({
    roles: 'moderator',
    id: 1,
    email: 'moderator@moderator.com',
  })
  return (
    <div className="m-4">
      <Comment
        comment={{
          id: 1,
          name: 'Rob Cameron',
          body: 'This is the first comment!',
          createdAt: '2020-01-01T12:34:56Z',
          postId: 1,
        }}
      />
    </div>
  )
}

export default {
  title: 'Components/Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>
