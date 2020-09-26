module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'jsx-a11y/alt-text': [ 'off' ],
    'jsx-a11y/anchor-has-content': [ 'off' ],
    'jsx-a11y/href-no-hash': [ 'off' ],
    'jsx-a11y/iframe-has-title': [ 'off' ],
    'jsx-a11y/label-has-for': [ 'error',
      {
        components: [ 'label' ],
        required: {
          every: [ 'nesting', 'id' ],
        },
        allowChildren: true,
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': [ 'off' ],
    'jsx-a11y/no-noninteractive-tabindex': [ 'off' ],
    'jsx-a11y/no-static-element-interactions': [ 'off' ],
  },
}
