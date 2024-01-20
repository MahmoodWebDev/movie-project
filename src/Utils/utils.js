function formatRuntime(runtimeInMinutes) {
  const pluralize = (count, singular, plural) =>
    count === 1 ? singular : plural;

  // Check if runtime is 60 minutes or more (1 hour or more)
  if (runtimeInMinutes >= 60) {
    const hours = Math.floor(runtimeInMinutes / 60);
    const minutes = runtimeInMinutes % 60;
    const hourText = `${hours} ${pluralize(hours, "hour", "hours")}`;
    const minuteText = minutes > 0
      ? `${minutes} ${pluralize(minutes, "minute", "minutes")}`
      : "";

    return `${hourText}${minutes > 0 ? " and " + minuteText : ""}`;
  }

  // For runtimes less than 60 minutes
  return `${runtimeInMinutes} ${pluralize(runtimeInMinutes, "minute", "minutes")}`;
}

export { formatRuntime };
