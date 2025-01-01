import { SkillItem } from './SkillItem';
import { skills } from './skillsData';

export const MarqueeContent = () => (
  <div className="flex items-center">
    {skills.map((skill) => (
      <SkillItem key={skill.name} {...skill} />
    ))}
  </div>
);