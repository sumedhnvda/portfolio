import { BookText } from 'lucide-react';
import { Card } from './Card';
import { Modal } from './Modal';
import { Tag } from './Tag';
import { useModal } from '../../hooks/useModal';
import { publications } from '../../data/publications';

export const PublicationsCard = () => {
  const modal = useModal();

  return (
    <>
      <Card
        icon={BookText}
        iconColor="text-sky-500"
        title="Publications"
        onClick={modal.open}
      >
        <div className="space-y-3">
          {publications.slice(0, 2).map((pub) => (
            <div key={pub.id}>
              <h3 className="text-zinc-200">{pub.title}</h3>
              <p className="text-zinc-400 text-sm">{pub.conference}</p>
            </div>
          ))}
        </div>
      </Card>

      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title="Research Publications"
      >
        <div className="space-y-8">
          {publications.map((pub) => (
            <div key={pub.id} className="border-b border-zinc-800 pb-6 last:border-0">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{pub.title}</h3>
                <span className="text-zinc-400">{pub.date}</span>
              </div>
              <p className="text-emerald-500 mb-2">{pub.conference}</p>
              <p className="text-zinc-300 mb-4">{pub.description}</p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Co-Authors:</h4>
                <div className="flex flex-wrap gap-2">
                  {pub.coAuthors.map((author) => (
                    <Tag key={author}>{author}</Tag>
                  ))}
                </div>
              </div>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 hover:text-emerald-400 transition-colors inline-flex items-center gap-2"
              >
                View Publication →
              </a>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};