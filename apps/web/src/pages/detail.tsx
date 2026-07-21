import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/layout';

export function Detail() {
  const navigate = useNavigate();
  const toEdit = () => navigate(`/notes/${1}/edit`, {relative: 'path'});
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold border-b border-gray-300 pb-1" onClick={toEdit}>Note Detail</h1>
        <p className="mt-4" onClick={toEdit}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque condimentum eros ut ornare. Nulla porttitor sapien sit amet est vestibulum, at faucibus nibh sagittis. Cras fringilla velit ut magna consectetur, a luctus justo facilisis. Integer rutrum pellentesque lacus at finibus. Proin a leo a tortor suscipit iaculis ac ut enim. Donec et nulla magna. Phasellus sed commodo metus. Morbi non scelerisque massa. Suspendisse in tellus pretium, ornare odio in, tempor libero. Maecenas vestibulum, nibh sit amet gravida pulvinar, nunc tellus consectetur tortor, eget viverra massa arcu quis neque. Nulla aliquam elementum fringilla. Curabitur orci augue, efficitur eu lectus eu, molestie ullamcorper mauris. Fusce dapibus eu justo at iaculis. Maecenas dignissim, mi vel venenatis elementum, risus justo convallis ipsum, id consectetur nibh felis vel lacus.

Praesent id ante convallis, commodo mi sed, auctor purus. Aenean pellentesque arcu vel mauris bibendum aliquam. Nullam dictum non velit in sollicitudin. Quisque sed magna lacinia, lacinia velit et, sollicitudin ante. Ut dapibus lacinia massa id elementum. Nullam vel efficitur ex, id condimentum massa. Nunc pellentesque lacinia tortor at gravida. Aliquam bibendum velit orci, egestas posuere elit bibendum sed.

Etiam vel mauris nunc. Aliquam dignissim metus sed nisl euismod, vel pellentesque massa scelerisque. Fusce aliquam, mauris non lobortis posuere, justo tortor vehicula velit, nec interdum leo lacus imperdiet nibh. Aenean in vulputate massa. Duis sit amet pretium dui. Donec lorem nunc, pulvinar at mauris eu, ultrices accumsan mauris. Donec volutpat risus eu lectus fermentum suscipit. Duis fermentum ac ligula eget malesuada. Nullam gravida erat quis pretium accumsan. Duis condimentum imperdiet felis non aliquam. Nulla facilisi. Phasellus lorem enim, gravida vitae enim vitae, efficitur vestibulum metus. Aliquam eu massa eu lacus efficitur sagittis. Proin ultrices ante non velit vehicula volutpat. Sed quis posuere nisl, et congue ex.

Sed vel tellus a justo maximus tempor at eget enim. Duis condimentum risus mauris, eget elementum felis semper vitae. Curabitur urna velit, dignissim eget risus id, maximus maximus dui. Aliquam non nibh lacinia, ornare urna ac, dictum nibh. Donec commodo egestas dui, ac faucibus nisl suscipit at. Aenean vel diam vel risus dapibus tempus eu at magna. Etiam ac fringilla odio, sed gravida justo. Integer at laoreet erat, et malesuada tellus. Morbi eleifend eleifend sem, eu imperdiet velit pulvinar ac. Quisque tellus arcu, auctor eu felis in, porta congue nunc.

Nullam eget augue mauris. Sed nec aliquam mi, vitae pretium nibh. Suspendisse suscipit nulla at aliquam porttitor. Ut dictum dui luctus laoreet suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec gravida molestie dolor a ullamcorper. Duis ornare quam ac vulputate auctor. Aliquam in odio ut sem aliquam posuere. Aenean viverra commodo lorem eget condimentum. Sed et venenatis tellus. Maecenas sed sagittis erat. Mauris a metus venenatis, tempor mi nec, faucibus augue. Curabitur bibendum sed dui eget malesuada.
        </p>
      </div>
    </Layout>
  );
}
