export default function dateFormat(timestamp: string | undefined) {
  if (timestamp) {
    return new Intl.DateTimeFormat("ru-RU", {
      minute: "2-digit",
      hour: "numeric",
      day: "numeric",
      month: "short",
      year: "numeric"
    }).format(new Date(timestamp));
  }
}