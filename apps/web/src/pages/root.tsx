import { useLoaderData, useNavigate } from 'react-router-dom';
import Layout from '../components/layout';
import Note from '../components/note';

export function Root() {
  const navigate = useNavigate();
  const notes = useLoaderData();
  console.log(notes);

  return (
    <Layout>
      <Note title="First" description="sdfs" id={1} />
      <div className="absolute bottom-16 right-3">
        <button className="btn btn-lg btn-circle btn-primary" onClick={() => navigate('/notes')}>
          <svg
            aria-label="New"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
}
