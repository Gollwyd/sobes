export default async function kek() {
  const response = await fetch('https://ipinfo.io/json?token=a8c677e413ad0b');
  const json = await response.json();
  return json.city;
}
