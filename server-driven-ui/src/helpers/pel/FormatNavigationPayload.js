const formatNavigationPelPayload = (payload) => {
  const {
    data,
    interaction_type,
    element_type
  } = payload;

  const pel_payload = {};

  pel_payload.eventName = `${element_type} ${interaction_type}`
  pel_payload.interactionType = interaction_type;
  pel_payload.origin = element_type;
  pel_payload.data = { ...data };

  return pel_payload;
}

export default formatNavigationPelPayload;
