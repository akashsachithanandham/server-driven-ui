const performReactions = payload => {
  if (typeof window !== 'undefined') {
    const { url = '' } = payload;
    window.location.href = url;
  }

  return;
}

export default performReactions;