const performRedirection = payload => {
  if (typeof window !== 'undefined') {
    const { url = '' } = payload;
      window.location.href = `https://www.${url}`;
  }

  return;
}

export default performRedirection;
