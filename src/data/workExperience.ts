import { WorkExperience } from '../types';

export const workExperience: WorkExperience[] = [
  {
    id: '1',
    company: 'CodeTroopers Club, SMVITM',
    role: 'Vice President',
    period: '2024 - Present',
    description: 'Leading the team in organizing events, workshops, and hackathons for the CSE department.',
    achievements: [
      'Successfully Started Event called Gyan Bit - A series of tech talks on various technical topics',
      'Built a Work division within the club to build and deliver projects for the college and local community',
    ],
    technologies: ['Leadership', 'Event Management', 'Public Speaking']
  },
  {
    id: '2',
    company: 'SangamOne Connected Services Pvt Ltd',
    role: 'Intern',
    period: '2025 - Present',
    description: 'Worked on a product where I led the team, guided them through development, and conducted teaching sessions internally and externally.',
    achievements: [
      'Led a product team from planning to delivery',
      'Mentored and taught peers regularly as part of internal learning sessions',
      'Conducted external knowledge-sharing sessions as part of the organization’s outreach'
    ],
    technologies: ['Team Leadership', 'Teaching', 'Community Engagement']
  }
]
