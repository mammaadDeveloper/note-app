import { Link } from 'react-router-dom';
interface PropsType {
  id: number;
  title: string;
  description: string;
}
export default function Note({ id, title, description }: PropsType) {
  return (
    <Link to={`/notes/${id}`}>
      <div className="flex flex-col items-center">
        <div className="card w-96 bg-base-100 card-lg shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
