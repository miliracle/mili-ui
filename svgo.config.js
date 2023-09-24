const RemoveStrokePlugin = {
    type: 'visitor',
    name: 'remove-my-attrs',
    fn: () => {
      return {
        element: {
          enter: node => {
            if (node.name === 'path' || node.name === 'g' ) {
               delete node.attributes.fill
               delete node.attributes.stroke
               delete node.attributes['stroke-linecap']
               delete node.attributes['stroke-linejoin']
               delete node.attributes['stroke-width']
            }
          }
        }
      }
    }
  }

module.exports = {
    plugins: [
      {
        name: 'preset-default',
      },
      RemoveStrokePlugin
    ],
  };