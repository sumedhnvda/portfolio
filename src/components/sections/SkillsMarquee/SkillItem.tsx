interface SkillItemProps {
  name: string;
  icon: string;
}

export const SkillItem = ({ name, icon }: SkillItemProps) => (
  <div className="flex items-center gap-2 mx-8 text-zinc-400 hover:text-white transition-colors">
    <img src={icon} alt={name} className="w-6 h-6" />
    <span className="text-sm font-medium">{name}</span>
  </div>
);