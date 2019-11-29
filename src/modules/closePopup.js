export default function() {
  if (this.popup && this.popup.isOpen()) this.popup.remove();
}
