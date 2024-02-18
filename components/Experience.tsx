import Link from 'next/link';

import { a11yDate, visibleDate } from '@/utils/date';

const experience = [
  {
    company: 'DocuSign',
    location: 'Seattle',
    position: 'Team Lead',
    startDate: 'Mar, 2023',
    endDate: 'present',
    details: (
      <>
        <p>
          Joined the Product-Led Growth e-commerce team, managing a team of 6 engineers, delivering
          vital, friction-less purchasing experiences for DocuSign customers across our self-serve
          eco-system.
        </p>
        <p>
          Tech stack: Next.js, React, Node.js, TypeScript, Tailwind CSS, Webpack, Playwright,
          Optimizely, GraphQL, Apollo Client, REST APIs, Azure, Contentful
        </p>
      </>
    )
  },
  {
    company: 'Instacart',
    location: 'Seattle',
    position: 'Senior Software Engineer',
    startDate: 'June, 2021',
    endDate: 'Jan, 2023',
    details: (
      <>
        <p>
          Joined the pick-up team as the frontend tech lead and worked on the Retailer Platform
          Portal - an enterprise dashboard where the retailers manage their catalogs, pick-up
          staffing and scheduling, as well as to view analytics around various business metrics.
        </p>
        <p>Tech stack: React, TypeScript, GraphQL, Apollo, Ruby on Rails</p>
      </>
    )
  },
  {
    company: 'Amazon Web Services',
    location: 'Vancouver',
    position: 'Front End Engineer',
    startDate: 'June, 2020',
    endDate: 'May, 2021',
    details: (
      <>
        <p>
          Worked on AWS IoT Console, a web platform where our customers can collect, organize, and
          monitor data from industrial equipment at scale to make better, data-driven decisions.
        </p>
        <p>Tech stack: React, Angular, TypeScript, AWS, React Query, single-spa</p>
      </>
    )
  },
  {
    company: 'Arista Networks',
    location: 'Vnacouver',
    position: 'Software Engineer',
    startDate: 'Sep, 2018',
    endDate: 'May, 2020',
    details: (
      <>
        <p>
          Worked on CloudVision Platform, a webapp which monitors data center networks’ hierarchy
          and performance.
        </p>
        <p>Tech stack: TypeScript, React/Redux, D3.js, WebSockets</p>
      </>
    )
  }
];

export function Experience() {
  return (
    <ul>
      {experience.map(({ company, details, endDate, position, startDate }) => (
        <li
          key={company}
          className="pb-2 pl-0 mb-4 border-b dark:border-warmGray-900 border-warmGray-200 before:contents">
          <section>
            <h3 className="m-0 text-base font-normal">{position}</h3>
            <div>
              <div className="flex justify-between text-sm text-warmGray-600 dark:text-warmGray-400 ">
                <div>{company}</div>
                <div>
                  <time dateTime={a11yDate(startDate)}>{visibleDate(startDate)}</time>
                  {' - '}
                  <time dateTime={a11yDate(endDate)}>{visibleDate(endDate)}</time>
                </div>
              </div>
              <p className="mt-4 text-sm">{details}</p>
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
}
