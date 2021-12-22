export const visibleDate = (date: string) => {
  const d = new Date(date);
  if (!d.getFullYear()) return <span>{date}</span>;

  return (
    <>
      {String(d.getMonth() + 1).padStart(2, '0')}
      <span>/</span>
      {d.getFullYear() % 100}
    </>
  );
};

export const a11yDate = (date: string) => {
  const d = new Date(date);
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
};
