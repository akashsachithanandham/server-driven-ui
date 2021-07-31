const contentGenerator = ({ modifiers, content }) => {
  const new_content = { ...content };

  for (const [key, value] of Object.entries(modifiers)) {
    (value || []).map(item => {
      const { element, identifier, display_text } = item;

      switch (key) {
        case 'bold':
          
          new_content[element] = new_content[element].replace(identifier, display_text );
          break;

      }
    })
  }

  return new_content;
}

export default contentGenerator;