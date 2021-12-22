export const projects = [
  {
    title: 'React Hooks Library',
    details: `A collection of 30+ react hooks and utilities, also built an accompanying custom documentation website th
  at shows live react demos for all hooks.`,
    live: 'https://react-hooks-library.vercel.app',
    source: 'https://github.com/heyitsarpit/react-hooks-library'
  },
  {
    title: 'heyitsarpit.dev',
    details: `The website that you're looking at currently.`,
    source: 'https://github.com/heyitsarpit/heyitsarpit.dev'
  },
  {
    title: 'Ad Recommendation on YouTube Videos',
    details: `Senior year research project on the topic of ad recommendation on YouTube videos.
        Analysis of captions to generate product via keyword ranking algorithms. Analysis and comparison
  of string similarity measurement algorithms. Published research paper in Springer.`,
    live: 'https://link.springer.com/chapter/10.1007/978-981-15-8335-3_48',
    source: 'https://github.com/heyitsarpit/ad-recommendation'
  }
];

const SourceIcon = () => (
  <svg
    aria-label="code icon"
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const LiveIcon = () => (
  <svg
    aria-label="lightning icon"
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

export function Projects() {
  return (
    <ul>
      {projects.map(({ details, live, source, title }) => (
        <li
          key={title}
          className="pb-2 pl-0 mb-4 text-sm border-b before:contents dark:border-warmGray-900 border-warmGray-200">
          <section>
            <div className="flex justify-between">
              <h3 className="m-0 text-base font-normal">{title}</h3>
              <div className="flex gap-2">
                {source ? (
                  <a
                    href={source}
                    className="flex items-center gap-1 link-btn"
                    target="_blank"
                    rel="noopener noreferrer">
                    <span>source</span>
                    <SourceIcon />
                  </a>
                ) : null}
                {live ? (
                  <a
                    href={live}
                    className="flex items-center gap-1 link-btn"
                    target="_blank"
                    rel="noopener noreferrer">
                    <span>live</span>
                    <LiveIcon />
                  </a>
                ) : null}
              </div>
            </div>
            <p>{details}</p>
          </section>
        </li>
      ))}
    </ul>
  );
}
