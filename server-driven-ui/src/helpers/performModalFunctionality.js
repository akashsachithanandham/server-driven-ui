export const performModalOpen = payload => {
    payload.openModal(payload.cta_clicked);
    return;
}

export const performModalClose = payload => {
    payload.closeModal();
    return;
}
