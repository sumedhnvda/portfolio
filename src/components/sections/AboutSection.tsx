import { Terminal, Lightbulb, Trophy, GraduationCap, Briefcase } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Scard } from '../ui/Scard';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../ui/Modal';
import { Tag } from '../ui/Tag';
import { interests } from '../../data/interests';
import { workExperience } from '../../data/workExperience';
import { achievements } from '../../data/achievements';
import { education } from '../../data/education';
import { BlogsCard } from '../ui/BlogsCard';

export const AboutSection = () => {
  const workModal = useModal();
  const achievementsModal = useModal();
  const educationModal = useModal();

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Scard
          icon={Terminal}
          iconColor="text-emerald-500"
          title="About Me"
          className="md:col-span-2"
        >
          <p className="text-zinc-400">
            Hey there! 👋 I am a Computer Science Engineer with a strong passion for machine learning. 
            Since my first year of BE in CS, I have been diving deep into the world of ML, constantly exploring new algorithms and models.
            My journey has been focused on building real-world applications, and I am dedicated to solve complex problems across various domains of AI.
          </p>
        </Scard>

        <Scard
          icon={Lightbulb}
          iconColor="text-blue-500"
          title="Areas of Interest"
        >
          <div className="flex flex-wrap gap-2">
            {interests.slice(0, 8).map((interest) => (
              <Tag key={interest}>{interest}</Tag>
            ))}
          </div>
        </Scard>

        {/*<Card
          icon={Briefcase}
          iconColor="text-purple-500"
          title="Work Experience"
          onClick={workModal.open}
        >
          <div className="space-y-3">
            {workExperience.slice(0, 2).map((job) => (
              <div key={job.id}>
                <h3 className="text-zinc-200">{job.role}</h3>
                <p className="text-zinc-400 text-sm">{job.company}</p>
              </div>
            ))}
          </div>
        </Card>*/}

        <Card
          icon={GraduationCap}
          iconColor="text-indigo-500"
          title="Education"
          onClick={educationModal.open}
        >
          <div className="space-y-3">
            {education.slice(0, 2).map((edu) => (
              <div key={edu.id}>
                <h3 className="text-zinc-200">{edu.degree}</h3>
                <p className="text-zinc-400 text-sm">{edu.institution}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card
          icon={Trophy}
          iconColor="text-amber-500"
          title="Recent Achievements"
          onClick={achievementsModal.open}
        >
          <div className="space-y-3">
            {achievements.slice(-2).reverse().map((achievement) => (
              <div key={achievement.id}>
                <h3 className="text-zinc-200">{achievement.title}</h3>
                <p className="text-zinc-400 text-sm">{achievement.date}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Modal
        isOpen={workModal.isOpen}
        onClose={workModal.close}
        title="Work Experience"
      >
        <div className="space-y-8">
          {workExperience.map((job) => (
            <div key={job.id} className="border-b border-zinc-800 pb-6 last:border-0">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                <p className="text-emerald-500">{job.company}</p>
                <p className="text-zinc-400">{job.period}</p>
              </div>
              <p className="text-zinc-300 mb-4">{job.description}</p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-2">
                  {job.achievements.map((achievement, index) => (
                    <li key={index} className="text-zinc-300">{achievement}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>

      <Modal
        isOpen={educationModal.isOpen}
        onClose={educationModal.close}
        title="Education"
      >
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.id} className="border-b border-zinc-800 pb-6 last:border-0">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-emerald-500">{edu.institution}</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-zinc-400">{edu.period}</p>
                  <p className="text-zinc-300">GPA: {edu.gpa}</p>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Relevant Courses:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map((course) => (
                    <Tag key={course}>{course}</Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>

      <Modal
        isOpen={achievementsModal.isOpen}
        onClose={achievementsModal.close}
        title="Achievements & Recognition"
      >
        <div className="space-y-6">
          {achievements.slice().reverse().map((achievement) => (
            <div key={achievement.id} className="border-b border-zinc-800 pb-6 last:border-0">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                <span className="text-zinc-400">{achievement.date}</span>
              </div>
              <p className="text-zinc-300 mb-3">{achievement.description}</p>
              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  View →
                </a>
              )}
            </div>
          ))}
        </div>
      </Modal>
      {/*<Container><BlogsCard/></Container>*/}
    </Container>
  );
};