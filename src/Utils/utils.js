function convertRuntimeToMinutes(runtime) {
  const pluralize = (count, singular, plural) =>
    count === 1 ? singular : plural;

  // Check for runtime in hours
  if (runtime >= 1) {
    const hours = Math.floor(runtime);
    const minutes = Math.round((runtime - hours) * 60);
    const hourText = `${hours} ${pluralize(hours, "hour", "hours")}`;
    const minuteText =
      minutes > 0
        ? `${minutes} ${pluralize(minutes, "minute", "minutes")}`
        : "";

    return `${hourText}${minutes > 0 ? " and " + minuteText : ""}`;
  }

  // For runtimes less than 1 hour
  const minutes = Math.round(runtime * 60);
  const seconds = Math.round(runtime * 3600);

  if (runtime >= 0.02) {
    return minutes === 60
      ? "1 hour"
      : `${minutes} ${pluralize(minutes, "minute", "minutes")}`;
  }

  return `${seconds} ${pluralize(seconds, "second", "seconds")}`;
}

export { convertRuntimeToMinutes };
