export const closePopup = function() {
  if (this.popup && this.popup.isOpen()) this.popup.remove();
};
