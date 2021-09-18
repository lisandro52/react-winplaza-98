export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'win98',
    values: [
      {
        name: 'win98',
        value: '#c0c0c0'
      },
      {
        name: 'white',
        value: '#ffffff'
      }
    ]
  }
}

export const decorators = [
  (story) => (
    <div style={{margin: '3em'}}>
      {story()}  
    </div>
  )
]