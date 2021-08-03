
const pushEvents = (payload) => {
  fetch('https://example.com/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

const pushPel = payload => {
  console.warn("PEL Object : ", payload.data);
  pushEvents(payload.data);
}

export default pushPel;
