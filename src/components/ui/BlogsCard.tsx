import { BookOpen } from 'lucide-react';
import { Card } from './Card';
import { Modal } from './Modal';
import { Tag } from './Tag';
import { useModal } from '../../hooks/useModal';
import { blogs } from '../../data/blogs';

export const BlogsCard = () => {
  const modal = useModal();

  return (
    <>
      <Card
        icon={BookOpen}
        iconColor="text-rose-500"
        title="Latest Blogs"
        onClick={modal.open}
      >
        <div className="space-y-3">
          {blogs.slice(-2).reverse().map((blog) => (
            <div key={blog.id}>
              <h3 className="text-zinc-200">{blog.title}</h3>
              <p className="text-zinc-400 text-sm">{blog.readTime}</p>
            </div>
          ))}
        </div>
      </Card>

      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title="Blog Posts"
      >
        <div className="space-y-8">
          {blogs.slice().reverse().map((blog) => (
            <div key={blog.id} className="border-b border-zinc-800 pb-6 last:border-0">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{blog.title}</h3>
                <div className="text-right">
                  <span className="text-zinc-400">{blog.date}</span>
                  <p className="text-sm text-zinc-500">{blog.readTime}</p>
                </div>
              </div>
              <p className="text-zinc-300 mb-4">{blog.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 hover:text-emerald-400 transition-colors inline-flex items-center gap-2"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};