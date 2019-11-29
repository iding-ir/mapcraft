export default function() {
  const url = new URL(window.location.href);
  const { protocol, host } = url;
  const root = `${protocol}//${host}/`;

  return root;
}
